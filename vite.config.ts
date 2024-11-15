import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), dts({
    outDir: 'dist/types',  // Asegúrate de que el plugin genere los tipos en esta carpeta
  })],

  // aliases
  resolve: {
    alias: {
      '@': '/src',
    },
  },

  // librarie config
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'jps-components',
      fileName: (format) => `jps-components.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
