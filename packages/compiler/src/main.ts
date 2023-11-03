#!/usr/bin/env

import fastGlob from 'fast-glob';
import { resolve } from 'path';
import ts from 'typescript';
import { transformToPreact } from './generators/preact';
import { transformToReact } from './generators/react';
import { transformToSolid } from './generators/solid';

const inputDir = '../mitosis';
const resolvedInputDir = resolve(inputDir);

async function main(): Promise<void> {
  const inputFiles = (await fastGlob([inputDir + '/src/**/*', inputDir + '/public/**/*'])).map((f) => resolve(f));
  const rootNames = inputFiles.filter((f) => f.endsWith('.ts') || f.endsWith('.tsx'));
  await buildAll(inputFiles, rootNames);
  if (process.argv.some((a) => a === '--watch')) {
    await watch(inputFiles, rootNames);
  }
}

async function buildAll(inputFiles: string[], rootNames: string[]): Promise<void> {
  return transform(ts.createProgram(rootNames, {}), inputFiles);
}

async function watch(inputFiles: string[], rootNames: string[]): Promise<void> {
  // Based on: https://github.com/microsoft/TypeScript-wiki/blob/main/Using-the-Compiler-API.md

  const changedFiles = new Set<string>();

  const host = ts.createWatchCompilerHost(
    '../mitosis/tsconfig.json',
    {},
    {
      ...ts.sys,
      watchFile(
        fileName: string,
        callback: ts.FileWatcherCallback,
        pollingInterval?: number,
        options?: ts.WatchOptions
      ) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return ts.sys.watchFile!(
          fileName,
          (fileName, eventKind) => {
            changedFiles.add(fileName);
            callback(fileName, eventKind);
          },
          pollingInterval,
          options
        );
      },
    },
    ts.createSemanticDiagnosticsBuilderProgram
  );

  const origCreateProgram = host.createProgram;
  host.createProgram = (_rootNames: readonly string[] | undefined, options, host, oldProgram) => {
    return origCreateProgram(rootNames, options, host, oldProgram);
  };

  const origPostProgramCreate = host.afterProgramCreate as (program: ts.SemanticDiagnosticsBuilderProgram) => void;
  host.afterProgramCreate = (program) => {
    origPostProgramCreate(program);
    const changeArray = Array.from(changedFiles).map((f) => resolve(f));
    console.log('Changed files:', changeArray);
    changedFiles.clear();
    transform(program.getProgram(), changeArray).catch(console.error);
  };

  ts.createWatchProgram(host);
}

async function transform(program: ts.Program, inputFiles: string[]): Promise<void> {
  await transformToPreact(program, resolvedInputDir, inputFiles, '../preact');
  await transformToReact(program, resolvedInputDir, inputFiles, '../react');
  await transformToSolid(program, resolvedInputDir, inputFiles, '../solid');
  // transformToSvelte(program, resolvedInputDir, inputFiles, '../svelte');
}

main()
  .then(() => console.log('done'))
  .catch((err) => console.error(err));
