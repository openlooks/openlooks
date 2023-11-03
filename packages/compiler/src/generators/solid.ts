import fs from 'fs';
import { resolve } from 'path';
import prettier from 'prettier';
import ts from 'typescript';
import {
  addImport,
  ensureDirectoryExists,
  getSetterName,
  isForElementIndexIdentifier,
  isFunctionCall,
  isJsxElement,
  isLiteImport,
  isLiteReexport,
  isMitosisImport,
  isStateRead,
  isStateWrite,
  isUseStoreDeclaration,
  tryGetFullText,
} from '../utils';

export async function transformToSolid(
  program: ts.Program,
  rootInputDir: string,
  inputFiles: string[],
  outDir: string
): Promise<void> {
  for (const inputFile of inputFiles) {
    if (inputFile.endsWith('tsconfig.json')) {
      continue;
    }

    if (!inputFile.endsWith('.ts') && !inputFile.endsWith('.tsx')) {
      const targetFileName = resolve(outDir, inputFile.replace(rootInputDir, '.'));
      ensureDirectoryExists(targetFileName);
      fs.copyFileSync(inputFile, targetFileName);
      continue;
    }

    const source = program.getSourceFile(inputFile) as ts.SourceFile;
    const result = ts.transform(source, [transformer(program)]);
    const printer = ts.createPrinter();

    for (const output of result.transformed) {
      const targetFileName = resolve(
        outDir,
        inputFile.replace(rootInputDir, '.').replace('.lite.ts', '.ts').replace('.lite.tsx', '.tsx')
      );

      const transformerOutput = printer.printFile(output);
      const prettierOutput = await prettier.format(transformerOutput, { filepath: targetFileName });
      ensureDirectoryExists(targetFileName);
      fs.writeFileSync(targetFileName, prettierOutput, 'utf8');
    }
  }
}

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

      if (ts.isTypeNode(node)) {
        const typeNode = node as ts.TypeNode;
        const typeStr = tryGetFullText(typeNode);

        // Rewrite "JSX.CSS" to "JSX.CSSProperties"
        if (typeStr === 'JSX.CSS') {
          solidImports.add('JSX');
          return ts.factory.createTypeReferenceNode('JSX.CSSProperties');
        }
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
              undefined,
              ts.factory.createVariableDeclarationList(
                [
                  ts.factory.createVariableDeclaration(
                    ts.factory.createArrayBindingPattern([
                      ts.factory.createBindingElement(undefined, undefined, propName, undefined),
                      ts.factory.createBindingElement(undefined, undefined, getSetterName(propName), undefined),
                    ]),
                    undefined,
                    undefined,
                    ts.factory.createCallExpression(ts.factory.createIdentifier('createSignal'), undefined, [
                      propAssignment.initializer,
                    ])
                  ),
                ],
                ts.NodeFlags.Const
              )
            )
          );
        }
        return useStateStmts;
      }

      // Replace state read with state getter
      if (isStateRead(node)) {
        return ts.factory.createCallExpression(ts.factory.createIdentifier(node.name.text), undefined, []);
      }

      // Replace state write with state setter
      if (isStateWrite(node)) {
        return ts.factory.createCallExpression(
          ts.factory.createIdentifier(getSetterName(node.left.name.text)),
          undefined,
          [node.right]
        );
      }

      // Rewrite "index" to "index()" if inside a For component
      if (isForElementIndexIdentifier(node)) {
        return ts.factory.createCallExpression(ts.factory.createIdentifier(node.text), undefined, []);
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
