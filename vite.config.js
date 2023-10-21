import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import env from 'vite-plugin-env';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), env],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      entryFileNames: '[name].js',
      chunckFileNames: '[name].js',
      assetFileNames: '[name].[ext]',
      manualChunks(id) {
        if (id.includes('/src/views/')) {
          return id.split('/src/views/')[1].split('.vue')[0];
        }
      },
    },
  },
});
