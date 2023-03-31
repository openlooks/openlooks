import ts from 'typescript';

export function transformer(program: ts.Program): ts.TransformerFactory<ts.SourceFile> {
  const checker = program.getTypeChecker();
  console.log('program', !!program);
  console.log('checker', !!checker);

  return (context: ts.TransformationContext) => {
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

      // Rewrite "class" to "className"
      if (ts.isJsxAttribute(node)) {
        const attr = node as ts.JsxAttribute;
        const name = attr.name.getFullText().trim();
        if (name === 'class') {
          return ts.factory.createJsxAttribute(ts.factory.createIdentifier('className'), attr.initializer);
        }
      }

      return node;
    };

    // Return transformer factory
    return (sourceFile: ts.SourceFile) => {
      // Visit all nodes
      const outputSourceFile = ts.visitNode(sourceFile, visitor) as ts.SourceFile;

      // Perform any additional transformations
      // Add React import
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
