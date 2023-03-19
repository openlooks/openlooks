const targets = {
  react: 'react-icons',
  solid: 'solid-icons',
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
  },
  exclude: ['../**/*.css', '../**/main.*', '../**/vite-env.d.ts'],
};
