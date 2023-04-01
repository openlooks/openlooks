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

      const targetDir = dirname(targetFileName);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      const outputFileName = resolve(outDir, targetFileName);
      const transformerOutput = printer.printFile(output);
      const prettierOutput = prettier.format(transformerOutput, { filepath: outputFileName });
      fs.writeFileSync(outputFileName, prettierOutput, 'utf8');
    }
  }
}

main()
  .then(() => console.log('done'))
  .catch((err) => console.error(err));
