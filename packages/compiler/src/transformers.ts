import ts from 'typescript';

export function transformer(program: ts.Program): ts.TransformerFactory<ts.SourceFile> {
  const checker = program.getTypeChecker();
  console.log('program', !!program);
  console.log('checker', !!checker);

  return (context: ts.TransformationContext) => {
    const visitor: ts.Visitor = (node) => {
      node = ts.visitEachChild(node, visitor, context);

      if (ts.isImportDeclaration(node)) {
        const importDecl = node as ts.ImportDeclaration;

        if (ts.isStringLiteral(importDecl.moduleSpecifier)) {
          const fromString = importDecl.moduleSpecifier.text;

          // Remove mitosis imports
          if (fromString.startsWith('@builder.io/mitosis')) {
            return undefined;
          }

          // Remove ".lite" suffixes from import file names
          if (fromString.endsWith('.lite')) {
            return ts.factory.updateImportDeclaration(
              importDecl,
              importDecl.modifiers,
              importDecl.importClause,
              ts.factory.createStringLiteral(fromString.replace('.lite', '')),
              undefined
            );
          }
        }
      }

      // React: Rewrite "JSX.CSS" to "as CSSProperties"
      if (ts.isTypeNode(node)) {
        const typeNode = node as ts.TypeNode;
        const typeStr = tryGetFullText(typeNode);
        // console.log('typeStr', typeStr);
        if (typeStr === 'JSX.CSS') {
          return ts.factory.createTypeReferenceNode('React.CSSProperties');
        }
      }

      // React: Rewrite JSX "class" attribute to "className"
      if (ts.isJsxAttribute(node)) {
        const attr = node as ts.JsxAttribute;
        const name = tryGetFullText(attr.name); //.getFullText().trim();
        if (name === 'class') {
          return ts.factory.createJsxAttribute(ts.factory.createIdentifier('className'), attr.initializer);
        }
      }

      // React: Rewrite "useStore" to "useState" statements
      if (ts.isVariableStatement(node)) {
        const varStmt = node as ts.VariableStatement;
        if (varStmt.declarationList.declarations.length === 1) {
          const decl = varStmt.declarationList.declarations[0];
          const declName = tryGetFullText(decl.name);
          const declInitializer = decl.initializer;
          if (
            declName === 'state' &&
            declInitializer &&
            ts.isCallExpression(declInitializer) &&
            tryGetFullText(declInitializer.expression) === 'useStore'
          ) {
            const callExpr = declInitializer as ts.CallExpression;
            const arg0 = callExpr.arguments[0];
            if (ts.isObjectLiteralExpression(arg0)) {
              const objLiteral = arg0 as ts.ObjectLiteralExpression;
              const useStateStmts: ts.Statement[] = [];
              for (const prop of objLiteral.properties) {
                if (ts.isPropertyAssignment(prop)) {
                  const propName = tryGetFullText(prop.name);
                  const propInitializer = prop.initializer;
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
                              propInitializer,
                            ])
                          ),
                        ],
                        ts.NodeFlags.Const
                      )
                    )
                  );
                }
              }
              return useStateStmts;
            }
          }
        }
      }

      // React: Replace state variable references with state variable getters
      if (ts.isPropertyAccessExpression(node)) {
        const propStr = tryGetFullText(node);
        if (propStr.startsWith('state.')) {
          // Don't replace setters - do that in the assignment below
          if (
            !(
              ts.isBinaryExpression(node.parent) &&
              node.parent.operatorToken.kind === ts.SyntaxKind.EqualsToken &&
              node.parent.left === node
            )
          ) {
            return ts.factory.createIdentifier(propStr.replace('state.', ''));
          }
        }
      }

      // React: Replace state variable assignments with state variable setters
      if (ts.isBinaryExpression(node) && node.operatorToken.kind === ts.SyntaxKind.EqualsToken) {
        const lhs = node.left;
        const lhsStr = tryGetFullText(lhs);
        if (lhsStr.startsWith('state.')) {
          return ts.factory.createCallExpression(
            ts.factory.createIdentifier(getSetterName(lhsStr.replace('state.', ''))),
            undefined,
            [node.right]
          );
        }
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

function getSetterName(name: string): string {
  return 'set' + capitalize(name);
}

function capitalize(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1);
}
