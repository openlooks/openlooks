const { exec } = require('child_process');
const chokidar = require('chokidar');
const { copyStaticFile } = require('./copyfiles.cjs');

chokidar.watch('./src/').on('change', (path) => {
  if (path.endsWith('.lite.tsx')) {
    // If the file is ".lite.tsx" then run mitosis
    exec('npx mitosis build --config=mitosis.config.cjs', (error, stdout, stderr) => {
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
