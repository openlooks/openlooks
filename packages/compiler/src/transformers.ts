import ts from 'typescript';

export function transformer<T extends ts.Node>(program: ts.Program): ts.TransformerFactory<T> {
  const checker = program.getTypeChecker();
  console.log('program', !!program);
  console.log('checker', !!checker);

  return (context) => {
    const visitor: ts.Visitor = (node) => {
      node = ts.visitEachChild(node, visitor, context);

      // Remove mitosis imports
      if (ts.isImportDeclaration(node)) {
        const importDecl = node as ts.ImportDeclaration;
        if ((importDecl.moduleSpecifier as ts.StringLiteral).text?.startsWith('@builder.io/mitosis')) {
          return undefined;
        }
      }

      // Rewrite "JSX.CSS" to "as CSSProperties"
      if (ts.isAsExpression(node)) {
        const asExpr = node as ts.AsExpression;
        console.log('asExpr', asExpr.getFullText());
      }

      return node;
    };

    return (node) => ts.visitNode(node, visitor) as T;
  };
}
