import ts from 'typescript';

export function transformer(program: ts.Program): ts.TransformerFactory<ts.SourceFile> {
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
      if (
        ts.isImportDeclaration(node) &&
        ts.isStringLiteral(node.moduleSpecifier) &&
        node.moduleSpecifier.text.startsWith('@builder.io/mitosis')
      ) {
        return undefined;
      }

      // Remove ".lite" suffixes from import file names
      if (
        ts.isImportDeclaration(node) &&
        ts.isStringLiteral(node.moduleSpecifier) &&
        node.moduleSpecifier.text.endsWith('.lite')
      ) {
        return ts.factory.updateImportDeclaration(
          node,
          node.modifiers,
          node.importClause,
          ts.factory.createStringLiteral(node.moduleSpecifier.text.replace('.lite', '')),
          undefined
        );
      }

      // Remove ".lite" suffixes from re-export file names
      if (
        ts.isExportDeclaration(node) &&
        node.moduleSpecifier &&
        ts.isStringLiteral(node.moduleSpecifier) &&
        node.moduleSpecifier.text.endsWith('.lite')
      ) {
        return ts.factory.updateExportDeclaration(
          node,
          node.modifiers,
          node.isTypeOnly,
          node.exportClause,
          ts.factory.createStringLiteral(node.moduleSpecifier.text.replace('.lite', '')),
          undefined
        );
      }

      // React: Rewrite "JSX.CSS" to "as CSSProperties"
      if (ts.isTypeNode(node)) {
        const typeNode = node as ts.TypeNode;
        const typeStr = tryGetFullText(typeNode);
        if (typeStr === 'JSX.CSS') {
          return ts.factory.createTypeReferenceNode('React.CSSProperties');
        }

        if (typeStr === 'MouseEvent') {
          return ts.factory.createTypeReferenceNode('React.MouseEvent');
        }
      }

      // React: Rewrite JSX "class" attribute to "className"
      if (ts.isJsxAttribute(node) && node.name.text === 'class') {
        return ts.factory.updateJsxAttribute(node, ts.factory.createIdentifier('className'), node.initializer);
      }

      // React: Rewrite JSX "for" attribute to "htmlFor"
      if (ts.isJsxAttribute(node) && node.name.text === 'for') {
        return ts.factory.updateJsxAttribute(node, ts.factory.createIdentifier('htmlFor'), node.initializer);
      }

      // React: Rewrite "createContext" to "React.createContext"
      if (isFunctionCall(node, 'createContext')) {
        return ts.factory.updateCallExpression(
          node,
          ts.factory.createIdentifier('React.createContext'),
          node.typeArguments,
          node.arguments
        );
      }

      // React: Rewrite "useContext" to "React.useContext"
      if (isFunctionCall(node, 'useContext')) {
        return ts.factory.updateCallExpression(
          node,
          ts.factory.createIdentifier('React.useContext'),
          node.typeArguments,
          node.arguments
        );
      }

      // React: Rewrite "useStore" to "React.useState"
      if (
        ts.isVariableStatement(node) &&
        node.declarationList.declarations.length === 1 &&
        ts.isIdentifier(node.declarationList.declarations[0].name) &&
        node.declarationList.declarations[0].name.text === 'state' &&
        isFunctionCall(node.declarationList.declarations[0].initializer, 'useStore')
      ) {
        const callExpr = node.declarationList.declarations[0].initializer as ts.CallExpression;
        const objLiteral = callExpr.arguments[0] as ts.ObjectLiteralExpression;
        const useStateStmts: ts.Statement[] = [];
        for (const prop of objLiteral.properties) {
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

      // React: Replace state variable references with state variable getters
      if (ts.isPropertyAccessExpression(node) && ts.isIdentifier(node.expression) && node.expression.text === 'state') {
        // Don't replace setters - do that in the assignment below
        if (
          !(
            ts.isBinaryExpression(node.parent) &&
            node.parent.operatorToken.kind === ts.SyntaxKind.EqualsToken &&
            node.parent.left === node
          )
        ) {
          return ts.factory.createIdentifier(node.name.text);
        }
      }

      // React: Replace state variable assignments with state variable setters
      if (
        ts.isBinaryExpression(node) &&
        node.operatorToken.kind === ts.SyntaxKind.EqualsToken &&
        ts.isPropertyAccessExpression(node.left) &&
        ts.isIdentifier(node.left.expression) &&
        node.left.expression.text === 'state'
      ) {
        return ts.factory.createCallExpression(
          ts.factory.createIdentifier(getSetterName(node.left.name.text)),
          undefined,
          [node.right]
        );
      }

      // React: Rewrite "onMount" to "useEffect"
      if (isFunctionCall(node, 'onMount')) {
        return ts.factory.createCallExpression(ts.factory.createIdentifier('React.useEffect'), undefined, [
          node.arguments[0],
          ts.factory.createArrayLiteralExpression(),
        ]);
      }

      return node;
    };

    // Return transformer factory
    return (sourceFile: ts.SourceFile) => {
      // Visit all nodes
      const outputSourceFile = ts.visitNode(sourceFile, visitor) as ts.SourceFile;

      // React: Add React import
      return ts.factory.updateSourceFile(outputSourceFile, [
        ts.factory.createImportDeclaration(
          undefined,
          ts.factory.createImportClause(false, ts.factory.createIdentifier('React'), undefined),
          ts.factory.createStringLiteral('react')
        ),
        ...outputSourceFile.statements,
      ]);
    };
  };
}

function tryGetFullText(node: ts.Node): string {
  try {
    return node.getFullText().trim();
  } catch (err) {
    return '';
  }
}

function isFunctionCall(node: ts.Node | undefined, name: string): node is ts.CallExpression {
  return !!node && ts.isCallExpression(node) && ts.isIdentifier(node.expression) && node.expression.text === name;
}

function getSetterName(name: string): string {
  return 'set' + capitalize(name);
}

function capitalize(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1);
}
