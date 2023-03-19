// Create Mitosis icons from Tabler icons

const fg = require('fast-glob');
const { copyFileSync } = require('fs');
const { resolve } = require('path');

const targets = ['react', 'solid', 'svelte', 'vue/vue3'];

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

if (require.main === module) {
  main();
}
