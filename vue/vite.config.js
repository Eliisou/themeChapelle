import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  build: {
    rollupOptions: {
      output: {
        name: 'vue-spa-wordpress',
        chunkFileNames: 'assets/js/[name].js',
        entryFileNames: 'assets/js/[name].js',
        assetFileNames: ({ name }) => {
          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name][extname]';
          }

          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return 'assets/[name][extname]';
        },
      },
    },
    outDir: '../dist',
  },
  preview: {
    port: 8080,
  },

  server:{
    port: 3001,
  }
})
