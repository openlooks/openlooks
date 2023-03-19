// Copy all non-mitosis files from the source directory to the destination directories
// const config = require('./mitosis.config.cjs');

const fg = require('fast-glob');
const { copyFileSync } = require('fs');
const { resolve } = require('path');

const targets = ['react', 'solid', 'svelte', 'vue/vue3'];

async function main() {
  const entries = await fg(['./src/**/*.css', './src/**/*.ts']);
  for (const target of targets) {
    for (const entry of entries) {
      copyFileSync(resolve(entry), resolve('..', target, entry));
    }
  }
}

if (require.main === module) {
  main();
}
