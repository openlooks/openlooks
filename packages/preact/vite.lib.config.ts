import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact()],
  build: {
    target: 'esnext',
    modulePreload: {
      polyfill: false,
    },
    copyPublicDir: false,
    lib: {
      entry: 'src/index.ts',
      fileName: () => 'index.mjs',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['preact'],
    },
  },
});
