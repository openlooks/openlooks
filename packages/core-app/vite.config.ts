import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    modulePreload: {
      polyfill: false, // Don't add vite polyfills
    },
  },
  resolve: {
    alias: {
      '@openlooks/core': resolve(__dirname, '../core/src'),
    },
  },
});
