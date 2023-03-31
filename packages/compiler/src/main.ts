import fs from 'fs';
import { basename, resolve } from 'path';
import prettier from 'prettier';
import ts from 'typescript';
import { transformer } from './transformers';

async function main(): Promise<void> {
  const inputFilePath = '../mitosis/src/components/Button.lite.tsx';
  const outDirFilePath = './output';

  if (!fs.existsSync(outDirFilePath)) {
    fs.mkdirSync(outDirFilePath);
  }

  const program = ts.createProgram([inputFilePath], {});
  const source = program.getSourceFile(inputFilePath) as ts.SourceFile;
  const result = ts.transform(source, [transformer(program)]);
  const printer = ts.createPrinter();
  for (const output of result.transformed) {
    const outputFileName = resolve(outDirFilePath, basename(inputFilePath).replace('.lite.tsx', '.tsx'));
    const transformerOutput = printer.printFile(output);
    const prettierOutput = prettier.format(transformerOutput, { filepath: outputFileName });
    fs.writeFileSync(outputFileName, prettierOutput, 'utf8');
  }
}

main()
  .then(() => console.log('done'))
  .catch((err) => console.error(err));
