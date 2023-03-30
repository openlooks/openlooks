import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    lib: {
      entry: 'src/index.ts',
      fileName: 'openlooks-react.mjs',
      formats: ['es'],
    },
    modulePreload: {
      polyfill: false,
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom'],
    },
  },
});
