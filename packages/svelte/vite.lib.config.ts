import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
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
      external: ['svelte'],
    },
  },
});
