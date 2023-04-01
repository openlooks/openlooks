import fastGlob from 'fast-glob';
import fs from 'fs';
import { dirname, resolve } from 'path';
import prettier from 'prettier';
import ts from 'typescript';
import { transformer } from './transformers';

async function main(): Promise<void> {
  const outDir = './output';
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
  }

  const inputFiles = await fastGlob(['../mitosis/src/**/*', '../mitosis/public/**/*']);

  const program = ts.createProgram(
    inputFiles.map((f) => resolve(f)),
    {}
  );

  for (const inputFile of inputFiles) {
    if (!inputFile.endsWith('.ts') && !inputFile.endsWith('.tsx')) {
      const targetFileName = resolve(outDir, inputFile.replace('../mitosis/', ''));
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
        inputFile.replace('../mitosis/', '').replace('.lite.ts', '.ts').replace('.lite.tsx', '.tsx')
      );

      const transformerOutput = printer.printFile(output);
      const prettierOutput = prettier.format(transformerOutput, { filepath: targetFileName });
      ensureDirectoryExists(targetFileName);
      fs.writeFileSync(targetFileName, prettierOutput, 'utf8');
    }
  }
}

function ensureDirectoryExists(targetFileName: string): void {
  const targetDir = dirname(targetFileName);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
}

main()
  .then(() => console.log('done'))
  .catch((err) => console.error(err));
