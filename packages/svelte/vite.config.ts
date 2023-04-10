import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: './dist/site',
    target: 'esnext',
    modulePreload: {
      polyfill: false,
    },
  },
});
