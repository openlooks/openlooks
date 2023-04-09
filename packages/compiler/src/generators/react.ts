import fs from 'fs';
import { resolve } from 'path';
import prettier from 'prettier';
import ts from 'typescript';
import {
  addImport,
  ensureDirectoryExists,
  getJsxForElementChildExpression,
  getJsxForElementEachExpression,
  getJsxShowElementChildElement,
  getJsxShowElementWhenExpression,
  getSetterName,
  isFunctionCall,
  isInputValueAttribute,
  isJsxAttribute,
  isJsxElement,
  isLiteImport,
  isLiteReexport,
  isMitosisImport,
  isStateRead,
  isStateWrite,
  isUseStoreDeclaration,
  renameFunctionCall,
  renameJsxAttribute,
  renamePropertySignature,
  tryGetFullText,
} from '../utils';

export function transformToReact(
  program: ts.Program,
  rootInputDir: string,
  inputFiles: string[],
  outDir: string
): void {
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
      const prettierOutput = prettier.format(transformerOutput, { filepath: targetFileName });
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

        // Rewrite "JSX.CSS" to "as CSSProperties"
        if (typeStr === 'JSX.CSS') {
          return ts.factory.createTypeReferenceNode('React.CSSProperties');
        }

        // Rewrite "MouseEvent" to "React.MouseEvent"
        if (typeStr === 'MouseEvent') {
          return ts.factory.createTypeReferenceNode('React.MouseEvent');
        }

        // Rewrite "Event" to "React.SyntheticEvent"
        if (typeStr === 'Event') {
          return ts.factory.createTypeReferenceNode('React.SyntheticEvent');
        }
      }

      // Rewrite JSX "autocomplete" attribute to "autoComplete"
      if (isJsxAttribute(node, 'autocomplete')) {
        return renameJsxAttribute(node, 'autoComplete');
      }

      // Rewrite JSX "class" attribute to "className"
      if (isJsxAttribute(node, 'class')) {
        return renameJsxAttribute(node, 'className');
      }

      // Rewrite JSX "for" attribute to "htmlFor"
      if (isJsxAttribute(node, 'for')) {
        return renameJsxAttribute(node, 'htmlFor');
      }

      // Rewrite JSX "value" attribute to "defaultValue"
      if (isInputValueAttribute(node)) {
        return renameJsxAttribute(node, 'defaultValue');
      }

      // Rewrite innerHTML to dangerouslySetInnerHTML
      if (isJsxAttribute(node, 'innerHTML')) {
        return renameJsxAttribute(
          node,
          'dangerouslySetInnerHTML',
          ts.factory.createJsxExpression(
            undefined,
            ts.factory.createObjectLiteralExpression([
              ts.factory.createPropertyAssignment(
                '__html',
                (node.initializer as ts.JsxExpression).expression as ts.Expression
              ),
            ])
          )
        );
      }

      // Rewrite "class" interface member to "className"
      if (ts.isPropertySignature(node) && node.name.getText() === 'class') {
        return renamePropertySignature(node, 'className');
      }

      // Rewrite "createContext" to "React.createContext"
      if (isFunctionCall(node, 'createContext')) {
        return renameFunctionCall(node, 'React.createContext');
      }

      // Rewrite "useContext" to "React.useContext"
      if (isFunctionCall(node, 'useContext')) {
        return renameFunctionCall(node, 'React.useContext');
      }

      // Rewrite "useStore" to "React.useState"
      if (isUseStoreDeclaration(node)) {
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
                    ts.factory.createCallExpression(ts.factory.createIdentifier('React.useState'), undefined, [
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
        return ts.factory.createIdentifier(node.name.text);
      }

      // Replace state write with state setter
      if (isStateWrite(node)) {
        return ts.factory.createCallExpression(
          ts.factory.createIdentifier(getSetterName(node.left.name.text)),
          undefined,
          [node.right]
        );
      }

      // Rewrite "onMount" to "useEffect"
      if (isFunctionCall(node, 'onMount')) {
        return ts.factory.createCallExpression(ts.factory.createIdentifier('React.useEffect'), undefined, [
          node.arguments[0],
          ts.factory.createArrayLiteralExpression(),
        ]);
      }

      // Rewrite <For each={...}> to <>{...}</>
      if (isJsxElement(node, 'For')) {
        const eachExpr = getJsxForElementEachExpression(node);
        const childExpr = getJsxForElementChildExpression(node);
        if (eachExpr && childExpr) {
          return ts.factory.createJsxFragment(
            ts.factory.createJsxOpeningFragment(),
            [
              ts.factory.createJsxExpression(
                undefined,
                ts.factory.createCallExpression(ts.factory.createPropertyAccessExpression(eachExpr, 'map'), undefined, [
                  childExpr,
                ])
              ),
            ],
            ts.factory.createJsxJsxClosingFragment()
          );
        }
      }

      // Rewrite <Show when={...}> to <>{...}</>
      if (isJsxElement(node, 'Show')) {
        const whenExpr = getJsxShowElementWhenExpression(node);
        const childElement = getJsxShowElementChildElement(node);
        if (whenExpr && childElement) {
          return ts.factory.createJsxFragment(
            ts.factory.createJsxOpeningFragment(),
            [
              ts.factory.createJsxExpression(
                undefined,
                ts.factory.createBinaryExpression(whenExpr, ts.SyntaxKind.AmpersandAmpersandToken, childElement)
              ),
            ],
            ts.factory.createJsxJsxClosingFragment()
          );
        }
      }

      return node;
    };

    // Return transformer factory
    return (sourceFile: ts.SourceFile) => {
      // Visit all nodes
      const outputSourceFile = ts.visitNode(sourceFile, visitor) as ts.SourceFile;

      // Add React import
      return addImport(outputSourceFile, 'React', undefined, 'react');
    };
  };
}
