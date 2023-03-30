import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solid()],
  build: {
    outDir: './dist/site',
    target: 'esnext',
    modulePreload: {
      polyfill: false,
    },
  },
});
