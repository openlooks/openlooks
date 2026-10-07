import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './dist/site',
    target: 'esnext',
    minify: false,
    modulePreload: {
      polyfill: false,
    },
  },
  resolve: {
    alias: {
      '@openlooks/react': resolve(import.meta.dirname, '../react/src'),
    },
  },
});
