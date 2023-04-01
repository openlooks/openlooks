// Create index.ts from components list

const { existsSync, mkdirSync, readFileSync, writeFileSync, readdirSync } = require('fs');
const { resolve } = require('path');

const iconList = [
  'adjustments.svg',
  'alert-circle.svg',
  'brand-discord-filled.svg',
  'brand-github.svg',
  'database.svg',
  'message-circle.svg',
  'messages.svg',
  'photo.svg',
  'settings.svg',
  'sun.svg',
];

async function main() {
  const components = [];
  const other = [];

  for (const file of readdirSync('./src/components/')) {
    if (file.endsWith('.context.lite.ts')) {
      // Ignore context files
      continue;
    }
    if (file.endsWith('.lite.ts') || file.endsWith('.lite.tsx')) {
      components.push({ dir: 'components', file });
    } else {
      other.push({ dir: 'components', file });
    }
  }

  for (const file of readdirSync('./src/utils/')) {
    other.push({ dir: 'utils', file });
  }

  components.sort(sortComparator);
  other.sort(sortComparator);

  const outputLines = [];
  outputLines.push('// This file is auto-generated by buildindex.cjs');
  outputLines.push('// Do not edit this file directly');
  outputLines.push('');
  outputLines.push('// Mitosis Components');

  for (const component of components) {
    const componentName = component.file.replace(/.lite.tsx?/, '');
    outputLines.push(`export { default as ${componentName} } from './components/${componentName}.lite';`);
  }

  outputLines.push('');
  outputLines.push('// Other');

  for (const file of other) {
    outputLines.push(`export * from './${file.dir}/${file.file.replace(/.tsx?/, '')}';`);
  }

  outputLines.push('');

  writeFileSync(resolve('./src/index.ts'), outputLines.join('\n'), 'utf8');
}

function sortComparator(a, b) {
  const aStr = `${a.dir}/${a.file}`;
  const bStr = `${b.dir}/${b.file}`;
  return aStr.localeCompare(bStr);
}

if (require.main === module) {
  main();
}