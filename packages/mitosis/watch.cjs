const { exec } = require('child_process');
const chokidar = require('chokidar');
const { copyStaticFile } = require('./copyfiles.cjs');

chokidar.watch('./src/').on('change', (path) => {
  if (path.endsWith('.lite.tsx')) {
    // If the file is ".lite.tsx" then run mitosis
    // mitosis compile --to=<format> [options] [files]
    // npx mitosis build --config=mitosis.config.cjs
    const target = 'solid';
    const inputFile = path.replaceAll('\\', '/');
    const outputFile = `../${target}/${inputFile.replace('.lite.tsx', '.tsx')}`;
    const cmd = `npx mitosis compile --config=mitosis.config.cjs --force --to=${target} --out=${outputFile} ${inputFile}`;
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });
  } else {
    // Otherwise, copy the file to the destination directories
    copyStaticFile(path);
  }
});
