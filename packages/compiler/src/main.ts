import fs from 'fs';
import { basename, resolve } from 'path';
import prettier from 'prettier';
import ts from 'typescript';
import { transformer } from './transformers';

async function main(): Promise<void> {
  const outDir = './output';
  const inputFiles = [
    '../mitosis/src/components/Alert.lite.tsx',
    '../mitosis/src/components/Button.lite.tsx',
    '../mitosis/src/site/components/Counter.lite.tsx',
  ];

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
  }

  for (const inputFile of inputFiles) {
    const inputFilePath = resolve(inputFile);
    const program = ts.createProgram([inputFilePath], {});
    const source = program.getSourceFile(inputFilePath) as ts.SourceFile;
    const result = ts.transform(source, [transformer(program)]);
    const printer = ts.createPrinter();
    for (const output of result.transformed) {
      const outputFileName = resolve(outDir, basename(inputFilePath).replace('.lite.tsx', '.tsx'));
      const transformerOutput = printer.printFile(output);
      const prettierOutput = prettier.format(transformerOutput, { filepath: outputFileName });
      fs.writeFileSync(outputFileName, prettierOutput, 'utf8');
    }
  }
}

main()
  .then(() => console.log('done'))
  .catch((err) => console.error(err));
