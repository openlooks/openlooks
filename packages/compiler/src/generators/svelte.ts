import fs from 'fs';
import { resolve } from 'path';
import ts from 'typescript';
import prettier from 'prettier';
import {
  addImport,
  ensureDirectoryExists,
  isFunctionCall,
  isInsideJsx,
  isJsxAttribute,
  isJsxElement,
  isLiteImport,
  isLiteReexport,
  isMitosisImport,
  isPropsRead,
  isStateRead,
  isUseStoreDeclaration,
} from '../utils';

interface SvelteLandmarks {
  sourceFile?: ts.SourceFile;
  propsInterface?: ts.InterfaceDeclaration;
  topFunction?: ts.FunctionDeclaration;
  returnStmt?: ts.ReturnStatement;
  rootJsxElement?: ts.JsxElement;
}

export function transformToSvelte(
  program: ts.Program,
  rootInputDir: string,
  inputFiles: string[],
  outDir: string
): void {
  for (const inputFile of inputFiles) {
    if (inputFile.endsWith('tsconfig.json') || inputFile.endsWith('index.ts')) {
      continue;
    }

    if (!inputFile.endsWith('.ts') && !inputFile.endsWith('.tsx')) {
      const targetFileName = resolve(outDir, inputFile.replace(rootInputDir, '.'));
      ensureDirectoryExists(targetFileName);
      fs.copyFileSync(inputFile, targetFileName);
      continue;
    }

    const source = program.getSourceFile(inputFile) as ts.SourceFile;
    // const result = ts.transform(source, [transformer(program)]);
    const landmarks = buildLandmarks(program, source);
    const printer = ts.createPrinter();

    // for (const output of landmarks.sourceFile.transformed) {
    const targetFileName = resolve(
      outDir,
      inputFile.replace(rootInputDir, '.').replace('.lite.tsx', '.svelte').replace('.lite.ts', '.ts')
    );

    // const transformerOutput = printer.printFile(output);
    const transformerOutput = ['<script lang="ts">', printer.printFile(landmarks.sourceFile as ts.SourceFile), '\n\n'];

    if (landmarks.topFunction?.body?.statements) {
      for (const stmt of landmarks.topFunction.body.statements) {
        transformerOutput.push(
          printer.printNode(ts.EmitHint.Unspecified, stmt as ts.Statement, landmarks.sourceFile as ts.SourceFile)
        );
      }
    }
    transformerOutput.push('\n</script>\n\n');

    if (landmarks.rootJsxElement) {
      transformerOutput.push(
        printer.printNode(
          ts.EmitHint.Unspecified,
          landmarks.rootJsxElement as ts.JsxElement,
          landmarks.sourceFile as ts.SourceFile
        )
      );
    }

    const prettierOutput = prettier.format(transformerOutput.join('\n'), { filepath: targetFileName });
    ensureDirectoryExists(targetFileName);
    fs.writeFileSync(targetFileName, prettierOutput, 'utf8');
    // }
  }
}

function buildLandmarks(program: ts.Program, source: ts.SourceFile): SvelteLandmarks {
  const landmarks: SvelteLandmarks = {
    sourceFile: undefined as ts.SourceFile | undefined,
    topFunction: undefined as ts.FunctionDeclaration | undefined,
    returnStmt: undefined as ts.ReturnStatement | undefined,
  };

  function transformer(program: ts.Program): ts.TransformerFactory<ts.SourceFile> {
    if (!program) {
      throw new Error('Missing program');
    }

    const checker = program.getTypeChecker();
    if (!checker) {
      throw new Error('Missing checker');
    }

    const solidImports = new Set<string>();

    return (context: ts.TransformationContext) => {
      // Plan:
      // During walk:
      // Get reference to the default export function
      // Remove it from the source file
      // Get reference to return statement in default export function
      // Remove it from the function
      // During write
      // In <script> tag, first write the main source
      // Then write all of the non-JSX code from the function
      // Then write the JSX
      // let componentFunction: ts.FunctionDeclaration | undefined = undefined;
      // let componentReturnStmt: ts.ReturnStatement | undefined = undefined;

      const visitor: ts.Visitor = (node) => {
        node = ts.visitEachChild(node, visitor, context);

        if (ts.isSourceFile(node)) {
          landmarks.sourceFile = node;
        }

        if (ts.isInterfaceDeclaration(node) && node.name.text.endsWith('Props')) {
          landmarks.propsInterface = node;
          const propsStatements = [] as ts.Node[];

          for (const member of node.members) {
            if (ts.isPropertySignature(member) && ts.isIdentifier(member.name)) {
              propsStatements.push(
                ts.factory.createVariableStatement(
                  [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
                  ts.factory.createVariableDeclarationList(
                    [ts.factory.createVariableDeclaration(member.name.text, undefined, member.type, undefined)],
                    ts.NodeFlags.Let
                  )
                )
              );
            }
          }

          return propsStatements;
        }

        if (
          ts.isFunctionDeclaration(node) &&
          node.modifiers &&
          node.modifiers.some((i) => i.kind === ts.SyntaxKind.ExportKeyword) &&
          node.modifiers.some((i) => i.kind === ts.SyntaxKind.DefaultKeyword)
        ) {
          landmarks.topFunction = node;
          return undefined;
        }

        if (ts.isReturnStatement(node)) {
          landmarks.returnStmt = node;
          landmarks.rootJsxElement = getRootJsxElement(node);
          return undefined;
        }

        // Remove mitosis imports
        if (isMitosisImport(node)) {
          return undefined;
        }

        // Remove ".lite" suffixes from import file names
        if (isLiteImport(node)) {
          return ts.factory.updateImportDeclaration(
            node,
            node.modifiers,
            node.importClause,
            ts.factory.createStringLiteral(node.moduleSpecifier.text.replace('.lite', '')),
            undefined
          );
        }

        // Remove ".lite" suffixes from re-export file names
        if (isLiteReexport(node)) {
          return ts.factory.updateExportDeclaration(
            node,
            node.modifiers,
            node.isTypeOnly,
            node.exportClause,
            ts.factory.createStringLiteral(node.moduleSpecifier.text.replace('.lite', '')),
            undefined
          );
        }

        // Remove "style" attribute
        if (isJsxAttribute(node, 'style')) {
          // return renameJsxAttribute(node, 'htmlFor');
          return undefined;
        }

        if (ts.isAsExpression(node) && isInsideJsx(node)) {
          return node.expression;
        }

        // Rewrite "useStore" to "createSignal"
        if (isUseStoreDeclaration(node)) {
          solidImports.add('createSignal');
          const useStateStmts: ts.Statement[] = [];
          for (const prop of node.declarationList.declarations[0].initializer.arguments[0].properties) {
            const propAssignment = prop as ts.PropertyAssignment;
            const propName = (propAssignment.name as ts.Identifier).text;
            useStateStmts.push(
              ts.factory.createVariableStatement(
                [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
                ts.factory.createVariableDeclarationList(
                  [ts.factory.createVariableDeclaration(propName, undefined, undefined, propAssignment.initializer)],
                  ts.NodeFlags.Let
                )
              )
            );
          }
          return useStateStmts;
        }

        // Replace state read with state getter
        if (isPropsRead(node)) {
          return ts.factory.createIdentifier(node.name.text);
        }

        // Replace state read with state getter
        if (isStateRead(node, true)) {
          // return ts.factory.createCallExpression(ts.factory.createIdentifier(node.name.text), undefined, []);
          return ts.factory.createIdentifier(node.name.text);
        }

        // // Replace state write with state setter
        // if (isStateWrite(node)) {
        //   return ts.factory.createCallExpression(
        //     ts.factory.createIdentifier(getSetterName(node.left.name.text)),
        //     undefined,
        //     [node.right]
        //   );
        // }

        // // Rewrite "index" to "index()" if inside a For component
        // if (isForElementIndexIdentifier(node)) {
        //   return ts.factory.createCallExpression(ts.factory.createIdentifier(node.text), undefined, []);
        // }

        if (isFunctionCall(node, 'createContext')) {
          solidImports.add('createContext');
        }

        if (isFunctionCall(node, 'useContext')) {
          solidImports.add('useContext');
        }

        if (isFunctionCall(node, 'onMount')) {
          solidImports.add('onMount');
        }

        if (isJsxElement(node, 'For')) {
          solidImports.add('For');
        }

        if (isJsxElement(node, 'Show')) {
          solidImports.add('Show');
        }

        return node;
      };

      // Return transformer factory
      return (sourceFile: ts.SourceFile) => {
        // Visit all nodes
        let outputSourceFile = ts.visitNode(sourceFile, visitor) as ts.SourceFile;
        outputSourceFile = addImport(outputSourceFile, undefined, solidImports, 'solid-js');

        console.log('componentFunction', !!landmarks.topFunction);
        console.log('componentReturnStmt', !!landmarks.returnStmt);

        return outputSourceFile;
      };
    };
  }

  const result = ts.transform(source, [transformer(program)]);
  landmarks.sourceFile = result.transformed[0];
  return landmarks;
}

function getRootJsxElement(returnStmt: ts.ReturnStatement): ts.JsxElement | undefined {
  let result = returnStmt.expression;
  // while (result) {
  // console.log('root element', ts.SyntaxKind[result.kind]);
  if (result && ts.isParenthesizedExpression(result)) {
    result = result.expression;
  }
  // }
  return result as ts.JsxElement;
}
