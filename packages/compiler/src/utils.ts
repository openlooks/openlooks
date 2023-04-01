import fs from 'fs';
import { dirname } from 'path';
import ts from 'typescript';

export function ensureDirectoryExists(targetFileName: string): void {
  const targetDir = dirname(targetFileName);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
}

export function tryGetFullText(node: ts.Node): string {
  try {
    return node.getFullText().trim();
  } catch (err) {
    return '';
  }
}

export function isPropertySignature(node: ts.Node, name: string): node is ts.PropertySignature {
  return ts.isPropertySignature(node) && node.name.getText() === name;
}

export function renamePropertySignature(node: ts.PropertySignature, newName: string): ts.PropertySignature {
  return ts.factory.updatePropertySignature(
    node,
    node.modifiers,
    ts.factory.createIdentifier(newName),
    node.questionToken,
    node.type
  );
}

export function isJsxAttribute(node: ts.Node, name: string): node is ts.JsxAttribute {
  return ts.isJsxAttribute(node) && node.name.text === name;
}

export function renameJsxAttribute(
  node: ts.JsxAttribute,
  newName: string,
  newInitializer?: ts.JsxAttributeValue
): ts.JsxAttribute {
  return ts.factory.updateJsxAttribute(node, ts.factory.createIdentifier(newName), newInitializer ?? node.initializer);
}

export function isFunctionCall(node: ts.Node | undefined, name: string): node is ts.CallExpression {
  return !!node && ts.isCallExpression(node) && ts.isIdentifier(node.expression) && node.expression.text === name;
}

export function renameFunctionCall(node: ts.CallExpression, newName: string): ts.CallExpression {
  return ts.factory.updateCallExpression(
    node,
    ts.factory.createIdentifier(newName),
    node.typeArguments,
    node.arguments
  );
}

export function isMitosisImport(node: ts.Node): node is ts.ImportDeclaration {
  return (
    ts.isImportDeclaration(node) &&
    ts.isStringLiteral(node.moduleSpecifier) &&
    node.moduleSpecifier.text.startsWith('@builder.io/mitosis')
  );
}

export function isLiteImport(node: ts.Node): node is ts.ImportDeclaration & { moduleSpecifier: ts.StringLiteral } {
  return (
    ts.isImportDeclaration(node) &&
    ts.isStringLiteral(node.moduleSpecifier) &&
    node.moduleSpecifier.text.endsWith('.lite')
  );
}

export function isLiteReexport(node: ts.Node): node is ts.ExportDeclaration & { moduleSpecifier: ts.StringLiteral } {
  return (
    ts.isExportDeclaration(node) &&
    !!node.moduleSpecifier &&
    ts.isStringLiteral(node.moduleSpecifier) &&
    node.moduleSpecifier.text.endsWith('.lite')
  );
}

export function isUseStoreDeclaration(node: ts.Node): node is ts.VariableStatement & {
  declarationList: ts.VariableDeclarationList & {
    declarations: [
      ts.VariableDeclaration & { initializer: ts.CallExpression & { arguments: [ts.ObjectLiteralExpression] } }
    ];
  };
} {
  return (
    ts.isVariableStatement(node) &&
    node.declarationList.declarations.length === 1 &&
    ts.isIdentifier(node.declarationList.declarations[0].name) &&
    node.declarationList.declarations[0].name.text === 'state' &&
    isFunctionCall(node.declarationList.declarations[0].initializer, 'useStore') &&
    node.declarationList.declarations[0].initializer.arguments.length === 1 &&
    ts.isObjectLiteralExpression(node.declarationList.declarations[0].initializer.arguments[0])
  );
}

export function isStateRead(node: ts.Node): node is ts.PropertyAccessExpression {
  // Check that this is (1) a "state" property acces and (2) not an assignment operation
  return (
    ts.isPropertyAccessExpression(node) &&
    ts.isIdentifier(node.expression) &&
    node.expression.text === 'state' &&
    !(
      ts.isBinaryExpression(node.parent) &&
      node.parent.operatorToken.kind === ts.SyntaxKind.EqualsToken &&
      node.parent.left === node
    )
  );
}

export function isStateWrite(node: ts.Node): node is ts.BinaryExpression & { left: ts.PropertyAccessExpression } {
  return (
    ts.isBinaryExpression(node) &&
    node.operatorToken.kind === ts.SyntaxKind.EqualsToken &&
    ts.isPropertyAccessExpression(node.left) &&
    ts.isIdentifier(node.left.expression) &&
    node.left.expression.text === 'state'
  );
}

export function isJsxElement(
  node: ts.Node,
  tagName: string
): node is ts.JsxElement & { openingElement: ts.JsxOpeningElement } {
  return (
    ts.isJsxElement(node) &&
    ts.isJsxOpeningElement(node.openingElement) &&
    ts.isIdentifier(node.openingElement.tagName) &&
    node.openingElement.tagName.text === tagName
  );
}

export function getJsxForElementEachExpression(node: ts.JsxElement): ts.Expression | undefined {
  const eachAttr = node.openingElement.attributes.properties.find(
    (attr) => ts.isJsxAttribute(attr) && attr.name.text === 'each'
  ) as ts.JsxAttribute;
  return (eachAttr?.initializer as ts.JsxExpression | undefined)?.expression;
}

export function getJsxForElementChildExpression(node: ts.JsxElement): ts.Expression | undefined {
  return (node.children.find((child) => ts.isJsxExpression(child)) as ts.JsxExpression | undefined)?.expression;
}

export function getJsxShowElementWhenExpression(node: ts.JsxElement): ts.Expression | undefined {
  const whenAttr = node.openingElement.attributes.properties.find(
    (attr) => ts.isJsxAttribute(attr) && attr.name.text === 'when'
  ) as ts.JsxAttribute;
  return (whenAttr?.initializer as ts.JsxExpression | undefined)?.expression;
}

export function getJsxShowElementChildElement(node: ts.JsxElement): ts.JsxElement | ts.JsxFragment | undefined {
  return node.children.find((child) => ts.isJsxElement(child) || ts.isJsxFragment(child)) as
    | ts.JsxElement
    | ts.JsxFragment
    | undefined;
}

export function getSetterName(name: string): string {
  return 'set' + capitalize(name);
}

export function capitalize(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1);
}
