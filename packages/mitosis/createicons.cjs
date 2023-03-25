// Create Mitosis icons from Tabler icons
const { existsSync, mkdirSync, readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const iconList = [
  'adjustments.svg',
  'alert-circle.svg',
  'database.svg',
  'message-circle.svg',
  'messages.svg',
  'photo.svg',
  'settings.svg',
];

async function main() {
  const inputDir = '../../node_modules/@tabler/icons/icons/';
  const outputDir = './src/icons/';

  if (!existsSync(resolve(outputDir))) {
    mkdirSync(resolve(outputDir));
  }

  // Create icon props
  writeFileSync(
    resolve(outputDir, 'IconProps.ts'),
    `export interface IconProps {
  size?: string;
}
  `,
    'utf8'
  );

  for (const file of iconList) {
    let svg = readFileSync(resolve(inputDir, file), 'utf8');

    // Remove xmlns="http://www.w3.org/2000/svg"
    svg = svg.replace(/xmlns="[^"]*"/g, '');

    // Remove class="icon icon-tabler icon-tabler-adjustments"
    svg = svg.replace(/class="[^"]*"/g, '');

    // Replace width="24" height="24"
    // with
    // width={props.size || '24'}
    // height={props.size || '24'}
    svg = svg.replace(/\swidth="([^"]*)"/g, " width={props.size || '$1'}");
    svg = svg.replace(/\sheight="([^"]*)"/g, " height={props.size || '$1'}");

    const iconName = getIconName(file);
    writeFileSync(
      resolve(outputDir, `${iconName}.lite.tsx`),
      `import { IconProps } from './IconProps';
export default function ${iconName}(props: IconProps) {
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
