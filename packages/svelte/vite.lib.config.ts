import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte(), dts()],
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
