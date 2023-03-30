import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
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
      external: ['solid-js', 'solid-js/web'],
    },
  },
});
