// Copy all non-mitosis files from the source directory to the destination directories

const fg = require('fast-glob');
const { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } = require('fs');
const { resolve, dirname } = require('path');

const targets = ['react', 'solid', 'svelte', 'vue'];

async function main() {
  const entries = await fg([
    './src/**/*.css',
    './src/**/*.ts',
    '!./src/**/*.lite.ts',
    '!./src/**/*.lite.tsx',
    './public/**/*',
  ]);
  for (const entry of entries) {
    copyStaticFile(entry);
  }
}

function copyStaticFile(fileName) {
  const sourceFileName = resolve(fileName);
  for (const target of targets) {
    if (target === 'svelte' && target.endsWith('.ts')) {
      // Apparently Mitosis builds .ts files for Svelte,
      // and copies them automatically.
      // Do not copy the source .ts files for Svelte.
      continue;
    }
    const targetFileName = resolve('..', target, fileName);
    const targetDir = dirname(targetFileName);
    if (!existsSync(targetDir)) {
      mkdirSync(targetDir, { recursive: true });
    }

    // Read source
    let content = readFileSync(sourceFileName, 'utf8');

    // Replace imports
    content = content.replace(/from '([^']+).lite'/g, "from '$1'");

    // Write source
    writeFileSync(targetFileName, content, 'utf8');
  }
}

module.exports = {
  copyStaticFile,
};

if (require.main === module) {
  main();
}
