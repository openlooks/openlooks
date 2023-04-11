import fs from 'fs';
import { basename, resolve } from 'path';
import prettier from 'prettier';
import ts, { Expression, JsxElement } from 'typescript';
import {
  addImport,
  ensureDirectoryExists,
  getContextProviderValue,
  getJsxForElementChildExpression,
  getJsxForElementEachExpression,
  isContextProviderElement,
  isFunctionCall,
  isInsideJsx,
  isJsxAttribute,
  isJsxElement,
  isJsxEventAttribute,
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
  moduleStatements: ts.Statement[];
  setContextExpression?: ts.Expression;
  topFunction?: ts.FunctionDeclaration;
  returnStmt?: ts.ReturnStatement;
  rootJsxElement?: ts.JsxChild;
  usesStyle?: boolean;
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

    let transformerOutput: string;

    if (targetFileName.endsWith('.svelte')) {
      const svelteOutput = [];

      if (landmarks.moduleStatements) {
        svelteOutput.push('<script lang="ts" context="module">');
        for (const stmt of landmarks.moduleStatements) {
          svelteOutput.push(printer.printNode(ts.EmitHint.Unspecified, stmt, landmarks.sourceFile as ts.SourceFile));
        }
        svelteOutput.push('\n</script>\n\n');
      }

      svelteOutput.push('<script lang="ts">', printer.printFile(landmarks.sourceFile as ts.SourceFile), '\n\n');

      if (landmarks.topFunction?.body?.statements) {
        for (const stmt of landmarks.topFunction.body.statements) {
          svelteOutput.push(
            printer.printNode(ts.EmitHint.Unspecified, stmt as ts.Statement, landmarks.sourceFile as ts.SourceFile)
          );
        }
      }

      if (landmarks.setContextExpression) {
        svelteOutput.push(
          printer.printNode(
            ts.EmitHint.Unspecified,
            landmarks.setContextExpression,
            landmarks.sourceFile as ts.SourceFile
          )
        );
      }

      if (landmarks.usesStyle) {
        svelteOutput.push(`  function mitosis_styling(node, vars) {
Object.entries(vars || {}).forEach(([p, v]) => {
if (p.startsWith('--')) {
  node.style.setProperty(p, v);
} else {
  node.style[p] = v;
}
});
}`);
      }

      svelteOutput.push('\n</script>\n\n');

      if (landmarks.rootJsxElement) {
        writeJsxElementOrFragment(
          printer,
          landmarks.sourceFile as ts.SourceFile,
          svelteOutput,
          landmarks.rootJsxElement
        );
      }

      transformerOutput = transformSolidToSvelte(svelteOutput.join('\n'));
    } else {
      transformerOutput = printer.printFile(landmarks.sourceFile as ts.SourceFile);
    }

    const prettierOutput = prettier.format(transformerOutput, { filepath: targetFileName });
    ensureDirectoryExists(targetFileName);
    fs.writeFileSync(targetFileName, prettierOutput, 'utf8');
  }
}

function buildLandmarks(program: ts.Program, source: ts.SourceFile): SvelteLandmarks {
  const landmarks: SvelteLandmarks = {
    sourceFile: undefined as ts.SourceFile | undefined,
    moduleStatements: [] as ts.Statement[],
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

    const svelteImports = new Set<string>();

    return (context: ts.TransformationContext) => {
      const visitor: ts.Visitor = (node) => {
        node = ts.visitEachChild(node, visitor, context);

        if (ts.isInterfaceDeclaration(node)) {
          landmarks.moduleStatements.push(node);

          if (node.name.text.endsWith('Props')) {
            const propsStatements = [] as ts.Node[];

            for (const member of node.members) {
              if (ts.isPropertySignature(member) && ts.isIdentifier(member.name) && member.name.text !== 'children') {
                if (member.questionToken) {
                  // Optional prop - add "undefined" to type and add intializer
                  propsStatements.push(
                    ts.factory.createVariableStatement(
                      [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
                      ts.factory.createVariableDeclarationList(
                        [
                          ts.factory.createVariableDeclaration(
                            member.name.text,
                            undefined,
                            ts.factory.createUnionTypeNode([
                              member.type as ts.TypeNode,
                              ts.factory.createKeywordTypeNode(ts.SyntaxKind.UndefinedKeyword),
                            ]),
                            ts.factory.createIdentifier('undefined')
                          ),
                        ],
                        ts.NodeFlags.Let
                      )
                    )
                  );
                } else {
                  // Required prop
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
            }

            return propsStatements;
          }
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
          const jsxReturnValue = getRootJsxElement(node.expression);
          if (jsxReturnValue) {
            landmarks.returnStmt = node;
            landmarks.rootJsxElement = jsxReturnValue;
            return undefined;
          }
        }

        // Remove mitosis imports
        if (isMitosisImport(node)) {
          return undefined;
        }

        // Remove ".lite" suffixes from import file names
        if (isLiteImport(node)) {
          let newName = node.moduleSpecifier.text;
          if (newName.endsWith('.context.lite')) {
            newName = newName.replace('.context.lite', '.context');
          } else if (newName.endsWith('.lite')) {
            newName = newName.replace('.lite', '.svelte');
          }
          return ts.factory.updateImportDeclaration(
            node,
            node.modifiers,
            node.importClause,
            ts.factory.createStringLiteral(newName),
            undefined
          );
        }

        // Remove ".lite" suffixes from re-export file names
        if (isLiteReexport(node)) {
          let newName = node.moduleSpecifier.text;
          if (newName.endsWith('.context.lite')) {
            newName = newName.replace('.context.lite', '.context');
          } else if (newName.endsWith('.lite')) {
            newName = newName.replace('.lite', '.svelte');
          }
          return ts.factory.updateExportDeclaration(
            node,
            node.modifiers,
            node.isTypeOnly,
            node.exportClause,
            ts.factory.createStringLiteral(newName),
            undefined
          );
        }

        // Replace "style" with mitosis styling adapter
        if (isJsxAttribute(node, 'style')) {
          landmarks.usesStyle = true;
          return ts.factory.updateJsxAttribute(
            node,
            ts.factory.createIdentifier('use:mitosis_styling'),
            node.initializer
          );
        }

        // TODO: implement "slot" attributes
        if (isJsxSlotAttribute(node) || isJsxAttribute(node, 'icon')) {
          return undefined;
        }

        if (isJsxEventAttribute(node)) {
          const attrName = node.name.escapedText as string;
          return ts.factory.updateJsxAttribute(
            node,
            ts.factory.createIdentifier('on:' + attrName[2].toLowerCase() + attrName.slice(3)),
            node.initializer
          );
        }

        if (ts.isAsExpression(node) && isInsideJsx(node)) {
          return node.expression;
        }

        // Rewrite "useStore" to "createSignal"
        if (isUseStoreDeclaration(node)) {
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
        if (isPropsRead(node) && node.name.text !== 'children') {
          return ts.factory.createIdentifier(node.name.text);
        }

        if (
          ts.isJsxExpression(node) &&
          node.expression &&
          isPropsRead(node.expression) &&
          node.expression.name.text === 'children'
        ) {
          return ts.factory.createJsxSelfClosingElement(
            ts.factory.createIdentifier('slot'),
            undefined,
            ts.factory.createJsxAttributes([])
          );
        }

        // Replace state read with state getter
        if (isStateRead(node, true)) {
          return ts.factory.createIdentifier(node.name.text);
        }

        // Rewrite the <For each={...}> to <For each={...} as={...}></For>
        if (isJsxElement(node, 'For')) {
          const eachExpr = getJsxForElementEachExpression(node);
          const childExpr = getJsxForElementChildExpression(node);
          if (eachExpr && childExpr) {
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
              [getRootJsxElement(childExpr.body as Expression) as JsxElement],
              node.closingElement
            );
          }
        }

        if (
          landmarks.sourceFile?.fileName &&
          ts.isExportAssignment(node) &&
          ts.isCallExpression(node.expression) &&
          isFunctionCall(node.expression, 'createContext')
        ) {
          const contextName = basename(landmarks.sourceFile.fileName).replace('.context.lite.ts', '');
          return [
            ts.factory.createVariableStatement(
              undefined,
              ts.factory.createVariableDeclarationList(
                [
                  ts.factory.createVariableDeclaration(
                    'key',
                    undefined,
                    undefined,
                    ts.factory.createCallExpression(ts.factory.createIdentifier('Symbol'), undefined, undefined)
                  ),
                ],
                ts.NodeFlags.Const
              )
            ),
            ts.factory.createExportAssignment(
              undefined,
              false,
              ts.factory.createObjectLiteralExpression([
                ts.factory.createPropertyAssignment(
                  ts.factory.createIdentifier(contextName),
                  node.expression.arguments[0]
                ),
                ts.factory.createShorthandPropertyAssignment('key'),
              ])
            ),
          ];
        }

        if (isContextProviderElement(node)) {
          // Replace the context provider with default <slot />
          const valueExpr = getContextProviderValue(node);
          if (valueExpr) {
            svelteImports.add('setContext');
            landmarks.setContextExpression = ts.factory.createCallExpression(
              ts.factory.createIdentifier('setContext'),
              undefined,
              [ts.factory.createIdentifier('Context.key'), valueExpr]
            );
            return ts.factory.createJsxSelfClosingElement(
              ts.factory.createIdentifier('slot'),
              undefined,
              ts.factory.createJsxAttributes([])
            );
          }
        }

        if (isFunctionCall(node, 'useContext')) {
          svelteImports.add('getContext');
          return ts.factory.updateCallExpression(node, ts.factory.createIdentifier('getContext'), undefined, [
            ts.factory.createIdentifier('Context.key'),
          ]);
        }

        if (isFunctionCall(node, 'onMount')) {
          svelteImports.add('onMount');
        }

        return node;
      };

      // Return transformer factory
      return (sourceFile: ts.SourceFile) => {
        // Visit all nodes
        landmarks.sourceFile = sourceFile;
        let outputSourceFile = ts.visitNode(sourceFile, visitor) as ts.SourceFile;
        outputSourceFile = addImport(outputSourceFile, undefined, svelteImports, 'svelte');
        return outputSourceFile;
      };
    };
  }

  const result = ts.transform(source, [transformer(program)]);
  landmarks.sourceFile = result.transformed[0];
  return landmarks;
}

function getRootJsxElement(expr: ts.Expression | undefined): ts.JsxChild | undefined {
  let result = expr as ts.Node;
  if (result && ts.isParenthesizedExpression(result)) {
    result = result.expression;
  }
  return ts.isJsxChild(result) ? result : undefined;
}

function writeJsxElementOrFragment(
  printer: ts.Printer,
  sourceFile: ts.SourceFile,
  output: string[],
  node: ts.JsxChild
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
  const forOpenPattern = /<For each=\{([^}]+?)\} as=\{\[(.+?)\]\}>/gm;
  const forClosePattern = /<\/For>/g;
  const showOpenPattern = /<Show when=\{(.+?)\}>/g;
  const showClosePattern = /<\/Show>/g;
  const jsxFragmentOpenPattern = /<>\s*/g;
  const jsxFragmentClosePattern = /\s*<\/>/g;
  content = content.replace(forOpenPattern, (_match, each, as) => `{#each ${each} as ${as}}`);
  content = content.replace(forClosePattern, '{/each}');
  content = content.replace(showOpenPattern, (_match, when) => `{#if ${when}}`);
  content = content.replace(showClosePattern, '{/if}');
  content = content.replace(jsxFragmentOpenPattern, '');
  content = content.replace(jsxFragmentClosePattern, '');
  return content;
}
