// Create Mitosis icons from Tabler icons
const { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

async function main() {
  const inputDir = '../../node_modules/@tabler/icons/icons/';
  const outputDir = './src/icons/';

  if (!existsSync(resolve(outputDir))) {
    mkdirSync(resolve(outputDir));
  }

  const files = readdirSync(inputDir);
  for (const file of files) {
    let svg = readFileSync(resolve(inputDir, file), 'utf8');

    // Remove xmlns="http://www.w3.org/2000/svg"
    svg = svg.replace(/xmlns="[^"]*"/g, '');

    // Remove class="icon icon-tabler icon-tabler-adjustments"
    svg = svg.replace(/class="[^"]*"/g, '');

    const iconName = getIconName(file);
    writeFileSync(
      resolve(outputDir, `${iconName}.lite.tsx`),
      `export default function ${iconName}() {
  return (${svg.trim()});
}
`,
      'utf8'
    );
  }
}

function getIconName(inputFile) {
  return (
    'Icon' +
    inputFile
      .replace('.svg', '')
      .split('-')
      .map((part) => part[0].toUpperCase() + part.slice(1))
      .join('')
  );
}

if (require.main === module) {
  main();
}
