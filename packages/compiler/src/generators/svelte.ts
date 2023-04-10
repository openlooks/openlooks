import fs from 'fs';
import { resolve } from 'path';
import prettier from 'prettier';
import ts, { Expression, JsxChild } from 'typescript';
import {
  addImport,
  ensureDirectoryExists,
  getJsxForElementChildExpression,
  getJsxForElementEachExpression,
  isFunctionCall,
  isInsideJsx,
  isJsxAttribute,
  isJsxElement,
  isJsxSlotAttribute,
  isLiteImport,
  isLiteReexport,
  isMitosisImport,
  isPropsRead,
  isStateRead,
  isUseStoreDeclaration,
  tryGetFullText,
} from '../utils';

interface SvelteLandmarks {
  sourceFile?: ts.SourceFile;
  propsInterface?: ts.InterfaceDeclaration;
  topFunction?: ts.FunctionDeclaration;
  returnStmt?: ts.ReturnStatement;
  rootJsxElement?: ts.JsxElement | ts.JsxFragment;
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
    const landmarks = buildLandmarks(program, source);
    const printer = ts.createPrinter();

    const targetFileName = resolve(
      outDir,
      inputFile.replace(rootInputDir, '.').replace('.lite.tsx', '.svelte').replace('.lite.ts', '.ts')
    );

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
      writeJsxElementOrFragment(
        printer,
        landmarks.sourceFile as ts.SourceFile,
        transformerOutput,
        landmarks.rootJsxElement
      );
    }

    const svelteReplaced = transformSolidToSvelte(transformerOutput.join('\n'));
    const prettierOutput = targetFileName.endsWith('.svelte')
      ? prettier.format(svelteReplaced, { filepath: targetFileName })
      : svelteReplaced;
    ensureDirectoryExists(targetFileName);
    fs.writeFileSync(targetFileName, prettierOutput, 'utf8');
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
          landmarks.rootJsxElement = getRootJsxElement(node.expression);
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
            ts.factory.createStringLiteral(node.moduleSpecifier.text.replace('.lite', '.svelte')),
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
            ts.factory.createStringLiteral(node.moduleSpecifier.text.replace('.lite', '.svelte')),
            undefined
          );
        }

        // TODO: implement "style" attributes
        if (isJsxAttribute(node, 'style')) {
          return undefined;
        }

        // TODO: implement "slot" attributes
        if (isJsxSlotAttribute(node) || isJsxAttribute(node, 'icon')) {
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

        // Rewrite <For each={...}> to <>{...}</>
        if (isJsxElement(node, 'For')) {
          const eachExpr = getJsxForElementEachExpression(node);
          const childExpr = getJsxForElementChildExpression(node);
          if (eachExpr && childExpr) {
            // Rewrite the <For each={...}> to <For each={...} as={...}></For>
            return ts.factory.updateJsxElement(
              node,
              ts.factory.updateJsxOpeningElement(
                node.openingElement,
                node.openingElement.tagName,
                node.openingElement.typeArguments,
                ts.factory.createJsxAttributes([
                  ts.factory.createJsxAttribute(
                    ts.factory.createIdentifier('each'),
                    ts.factory.createJsxExpression(undefined, eachExpr)
                  ),
                  ts.factory.createJsxAttribute(
                    ts.factory.createIdentifier('as'),
                    ts.factory.createJsxExpression(
                      undefined,
                      ts.factory.createArrayLiteralExpression(
                        childExpr.parameters.map((param) => ts.factory.createIdentifier(tryGetFullText(param)))
                      )
                    )
                  ),
                ])
              ),
              [getRootJsxElement(childExpr.body as Expression, true) as JsxChild],
              node.closingElement
            );
          }
        }

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
        return outputSourceFile;
      };
    };
  }

  const result = ts.transform(source, [transformer(program)]);
  landmarks.sourceFile = result.transformed[0];
  return landmarks;
}

function getRootJsxElement(expr: ts.Expression | undefined, collapseFragments = false): ts.JsxElement | undefined {
  let result = expr as ts.Node;
  if (result && ts.isParenthesizedExpression(result)) {
    result = result.expression;
  }
  if (result && collapseFragments && ts.isJsxFragment(result)) {
    result = result.children[0];
  }
  return result as ts.JsxElement;
}

function writeJsxElementOrFragment(
  printer: ts.Printer,
  sourceFile: ts.SourceFile,
  output: string[],
  node: ts.JsxElement | ts.JsxFragment
): void {
  if (node) {
    if (ts.isJsxFragment(node)) {
      for (const child of node.children) {
        writeJsxElementOrFragment(printer, sourceFile, output, child as ts.JsxElement | ts.JsxFragment);
      }
    } else {
      output.push(printer.printNode(ts.EmitHint.Unspecified, node, sourceFile));
    }
  }
}

function transformSolidToSvelte(content: string): string {
  const solidForPattern = /<For each=\{(.+?)\} as=\{\[(.+?)\]\}>([\s\S]*?)<\/For>/g;
  const solidShowPattern = /<Show when=\{(.+?)\}>([\s\S]*?)<\/Show>/g;
  const jsxFragmentOpenPattern = /<>\s*/g;
  const jsxFragmentClosePattern = /\s*<\/>/g;
  content = content.replace(solidForPattern, (_match, each, as, content) => {
    return `{#each ${each} as ${as}}` + '\n' + content + '\n{/each}';
  });
  content = content.replace(solidShowPattern, (_match, when, content) => {
    return `{#if ${when}}` + '\n' + content + '\n{/if}';
  });
  content = content.replace(jsxFragmentOpenPattern, '');
  content = content.replace(jsxFragmentClosePattern, '');
  return content;
}
