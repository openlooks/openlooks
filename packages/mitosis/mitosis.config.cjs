const targets = {
  preact: 'preact',
  react: 'react',
  solid: 'solid',
  svelte: 'svelte',
  vue3: 'vue',
};

module.exports = {
  files: 'src/**',
  dest: '..',
  targets: Object.keys(targets),
  getTargetPath: (target) => targets[target.target],
  options: {
    preact: {
      typescript: true,
    },
    react: {
      typescript: true,
    },
    solid: {
      typescript: true,
    },
    svelte: {
      prettier: false,
      typescript: false,
    },
    vue3: {
      typescript: true,
    },
  },
  exclude: ['../**/*.css', '../**/main.*', '../**/vite-env.d.ts'],
};
