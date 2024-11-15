import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ['src/components'], // Ajusta la ruta a tus componentes
      dts: 'src/components/types/components.d.ts', // Genera el archivo d.ts en la ruta indicada
    }),
    dts({
      outDir: 'dist/types', // Directorio de salida para los tipos
      tsconfigPath: './tsconfig.json', // Usar el tsconfig correcto
      staticImport: true,
      insertTypesEntry: true, // Inserta automáticamente la entrada `types` en package.json
      rollupTypes: true
    }),
  ],

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
