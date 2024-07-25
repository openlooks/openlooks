import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    modulePreload: {
      polyfill: false, // Don't add vite polyfills
    },
  },
});
