// Copy all non-mitosis files from the source directory to the destination directories
// const config = require('./mitosis.config.cjs');

const fg = require('fast-glob');
const { copyFileSync } = require('fs');
const { resolve } = require('path');

const targets = ['react', 'solid', 'svelte', 'vue'];

async function main() {
  const entries = await fg(['./src/**/*.css', './src/**/*.ts', '!./src/**/*.lite.ts', '!./src/**/*.lite.tsx']);
  for (const entry of entries) {
    copyStaticFile(entry);
  }
}

function copyStaticFile(fileName) {
  for (const target of targets) {
    copyFileSync(resolve(fileName), resolve('..', target, fileName));
  }
}

module.exports = {
  copyStaticFile,
};

if (require.main === module) {
  main();
}
