import fastGlob from 'fast-glob';
import { resolve } from 'path';
import ts from 'typescript';
import { transformToReact } from './react';

async function main(): Promise<void> {
  const inputFiles = await fastGlob(['../mitosis/src/**/*', '../mitosis/public/**/*']);

  const program = ts.createProgram(
    inputFiles.map((f) => resolve(f)),
    {}
  );

  transformToReact(program, inputFiles, '../react');
}

// function buildReact(program: ts.Program, inputFiles: string[], outDir: string): void {
//   for (const inputFile of inputFiles) {
//     if (!inputFile.endsWith('.ts') && !inputFile.endsWith('.tsx')) {
//       const targetFileName = resolve(outDir, inputFile.replace('../mitosis/', ''));
//       ensureDirectoryExists(targetFileName);
//       fs.copyFileSync(inputFile, targetFileName);
//       continue;
//     }

//     const source = program.getSourceFile(inputFile) as ts.SourceFile;
//     const result = ts.transform(source, [transformer(program)]);
//     const printer = ts.createPrinter();

//     for (const output of result.transformed) {
//       const targetFileName = resolve(
//         outDir,
//         inputFile.replace('../mitosis/', '').replace('.lite.ts', '.ts').replace('.lite.tsx', '.tsx')
//       );

//       const transformerOutput = printer.printFile(output);
//       const prettierOutput = prettier.format(transformerOutput, { filepath: targetFileName });
//       ensureDirectoryExists(targetFileName);
//       fs.writeFileSync(targetFileName, prettierOutput, 'utf8');
//     }
//   }
// }

main()
  .then(() => console.log('done'))
  .catch((err) => console.error(err));
