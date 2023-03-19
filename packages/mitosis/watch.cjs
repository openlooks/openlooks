const { exec } = require('child_process');
const chokidar = require('chokidar');
const { copyStaticFile } = require('./copyfiles.cjs');

chokidar.watch('./src/').on('change', (path) => {
  if (path.endsWith('.lite.tsx')) {
    // If the file is ".lite.tsx" then run mitosis
    const target = 'solid';
    const inputFile = path.replaceAll('\\', '/');
    const outputFile = `../${target}/${inputFile.replace('.lite.tsx', '.tsx')}`;
    const cmd = `npx mitosis compile --config=mitosis.config.cjs --force --to=${target} --out=${outputFile} ${inputFile}`;
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.log(`Error: ${error.message.trim()}`);
        return;
      }
      if (stderr) {
        console.log(`Error: ${stderr.trim()}`);
        return;
      }
      console.log(`Success: ${stdout.trim()}`);
    });
  } else {
    // Otherwise, copy the file to the destination directories
    copyStaticFile(path);
  }
});
