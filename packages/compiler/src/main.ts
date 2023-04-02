import fastGlob from 'fast-glob';
import { resolve } from 'path';
import ts from 'typescript';
import { transformToReact } from './react';
import { transformToSolid } from './solid';

async function main(): Promise<void> {
  const inputFiles = await fastGlob(['../mitosis/src/**/*', '../mitosis/public/**/*']);

  const program = ts.createProgram(
    inputFiles.map((f) => resolve(f)),
    {}
  );

  transformToReact(program, inputFiles, '../react');
  transformToSolid(program, inputFiles, '../solid');
}

main()
  .then(() => console.log('done'))
  .catch((err) => console.error(err));
