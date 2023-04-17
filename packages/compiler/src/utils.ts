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

export function isJsxEventAttribute(node: ts.Node): node is ts.JsxAttribute {
  if (!ts.isJsxAttribute(node) || !/^on[A-Z]\w+/.test(node.name.text)) {
    return false;
  }
  const parent = getParentJsxTag(node);
  return !!(parent && /^[a-z]\w*/.test(parent.tagName.getText()));
}

export function isJsxSlotAttribute(node: ts.Node): node is ts.JsxAttribute {
  return ts.isJsxAttribute(node) && node.name.text.startsWith('slot');
}

export function isInputValueAttribute(node: ts.Node): node is ts.JsxAttribute {
  return (
    isJsxAttribute(node, 'value') &&
    node.parent &&
    ts.isJsxAttributes(node.parent) &&
    node.parent.parent &&
    (ts.isJsxOpeningElement(node.parent.parent) || ts.isJsxSelfClosingElement(node.parent.parent)) &&
    ts.isIdentifier(node.parent.parent.tagName) &&
    node.parent.parent.tagName.text === 'input'
  );
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

export function isPropsRead(node: ts.Node): node is ts.PropertyAccessExpression {
  return ts.isPropertyAccessExpression(node) && ts.isIdentifier(node.expression) && node.expression.text === 'props';
}

export function isStateRead(node: ts.Node, allowSetter?: boolean): node is ts.PropertyAccessExpression {
  // Check that this is (1) a "state" property acces and (2) not an assignment operation
  return (
    ts.isPropertyAccessExpression(node) &&
    ts.isIdentifier(node.expression) &&
    node.expression.text === 'state' &&
    (allowSetter ||
      !(
        ts.isBinaryExpression(node.parent) &&
        node.parent.operatorToken.kind === ts.SyntaxKind.EqualsToken &&
        node.parent.left === node
      ))
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
  const eachAttr = findJsxAttribute(node.openingElement, 'each');
  return (eachAttr?.initializer as ts.JsxExpression | undefined)?.expression;
}

export function getJsxForElementChildExpression(node: ts.JsxElement): ts.ArrowFunction | undefined {
  for (const child of node.children) {
    if (ts.isJsxExpression(child) && child.expression && ts.isArrowFunction(child.expression)) {
      return child.expression;
    }
  }
  return undefined;
}

export function isInsideForElement(node: ts.Node): node is ts.Identifier {
  // Find a parent node that is a "<For>" JsxElement
  let forElement = node.parent;
  while (forElement && !isJsxElement(forElement, 'For')) {
    forElement = forElement.parent;
  }
  return !!forElement;
}

export function isInsideJsx(node: ts.Node): boolean {
  let curr = node;
  while (curr) {
    if (ts.isJsxAttribute(curr) || ts.isJsxElement(curr)) {
      return true;
    }
    curr = curr.parent || (curr as any).original;
  }
  return false;
}

export function isInsideJsxAttribute(node: ts.Node): boolean {
  let curr = node;
  while (curr) {
    if (ts.isJsxAttribute(curr)) {
      return true;
    }
    curr = curr.parent || (curr as any).original;
  }
  return false;
}

export function isInsideSlotAttribute(node: ts.Node): boolean {
  let curr = node;
  while (curr) {
    if (ts.isJsxAttribute(curr) && curr.name.text.startsWith('slot')) {
      return true;
    }
    curr = curr.parent || (curr as any).original;
  }
  return false;
}

export function getSlotAttributes(node: ts.JsxOpeningElement | ts.JsxSelfClosingElement): ts.JsxAttribute[] {
  const result = [];
  // const attributes = node.attributes;
  for (const attr of node.attributes.properties) {
    if (ts.isJsxAttribute(attr) && attr.name.text.startsWith('slot')) {
      result.push(attr);
    }
  }
  return result;
}

export function getParentJsxTag(node: ts.Node): ts.JsxOpeningElement | ts.JsxSelfClosingElement | undefined {
  let curr = node;
  while (curr) {
    if (ts.isJsxOpeningElement(curr) || ts.isJsxSelfClosingElement(curr)) {
      return curr;
    }
    curr = curr.parent || (curr as any).original;
  }
  return undefined;
}

export function isForElementIndexIdentifier(node: ts.Node): node is ts.Identifier {
  return ts.isIdentifier(node) && node.text === 'index' && !ts.isParameter(node.parent) && isInsideForElement(node);
}

export function getJsxShowElementWhenExpression(node: ts.JsxElement): ts.Expression | undefined {
  const whenAttr = findJsxAttribute(node.openingElement, 'when');
  return (whenAttr?.initializer as ts.JsxExpression | undefined)?.expression;
}

export function getJsxShowElementChildElement(
  node: ts.JsxElement
): ts.JsxElement | ts.JsxExpression | ts.JsxFragment | ts.JsxSelfClosingElement | undefined {
  let result = node.children.find(
    (child) => ts.isJsxChild(child) && !(ts.isJsxText(child) && child.containsOnlyTriviaWhiteSpaces)
  ) as ts.JsxChild | undefined;

  if (result && ts.isJsxText(result)) {
    result = ts.factory.createJsxFragment(
      ts.factory.createJsxOpeningFragment(),
      [result],
      ts.factory.createJsxJsxClosingFragment()
    );
  }

  return result;
}

export function getSetterName(name: string): string {
  return 'set' + capitalize(name);
}

export function capitalize(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

export function addImport(
  sourceFile: ts.SourceFile,
  name: string | undefined,
  namedBindings: Set<string> | undefined,
  moduleName: string
): ts.SourceFile {
  if (!name && (!namedBindings || namedBindings.size === 0)) {
    return sourceFile;
  }
  return ts.factory.updateSourceFile(sourceFile, [
    ts.factory.createImportDeclaration(
      undefined,
      ts.factory.createImportClause(
        false,
        name ? ts.factory.createIdentifier(name) : undefined,
        namedBindings
          ? ts.factory.createNamedImports(
              Array.from(namedBindings)
                .sort()
                .map((i) => ts.factory.createImportSpecifier(false, undefined, ts.factory.createIdentifier(i)))
            )
          : undefined
      ),
      ts.factory.createStringLiteral(moduleName)
    ),
    ...sourceFile.statements,
  ]);
}

export function isContextProviderElement(node: ts.Node): node is ts.JsxElement {
  return ts.isJsxElement(node) && node.openingElement.tagName.getText() === 'Context.Provider';
}

export function getContextProviderValue(node: ts.JsxElement): ts.Expression | undefined {
  const valueAttr = findJsxAttribute(node.openingElement, 'value');
  return (valueAttr?.initializer as ts.JsxExpression | undefined)?.expression;
}

export function findJsxAttribute(
  node: ts.JsxOpeningElement | ts.JsxSelfClosingElement,
  name: string
): ts.JsxAttribute | undefined {
  return node.attributes.properties.find((attr) => ts.isJsxAttribute(attr) && attr.name.text === name) as
    | ts.JsxAttribute
    | undefined;
}
