import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './dist/site',
    target: 'esnext',
    modulePreload: {
      polyfill: false,
    },
  },
  resolve: {
    alias: {
      '@openlooks/core': resolve(__dirname, '../core/src'),
      '@openlooks/react': resolve(__dirname, '../react/src'),
    },
  },
});
