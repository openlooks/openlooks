const targets = {
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
    react: {
      typescript: true,
    },
    solid: {
      typescript: true,
    },
    svelte: {
      prettier: false,
      typescript: true,
    },
    vue3: {
      typescript: true,
    },
  },
  exclude: ['../**/*.css', '../**/main.*', '../**/vite-env.d.ts'],
};
