import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    target: 'esnext',
    modulePreload: {
      polyfill: false,
    },
  },
});
