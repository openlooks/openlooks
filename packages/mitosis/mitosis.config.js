module.exports = {
  files: 'src/**',
  dest: '..',
  targets: ['react', 'solid', 'svelte', 'vue3'],
  options: {
    react: {
      typescript: true,
    },
    solid: {
      typescript: true,
    },
    svelte: {
      typescript: true,
    },
    vue3: {
      typescript: true,
    },
  },
};
