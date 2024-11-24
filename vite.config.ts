/// <reference types="vitest" />

import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11'], // Compatibilidad para navegadores antiguos
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
    port: 3000, // Puerto del servidor de desarrollo
  },
  test: {
    globals: true,
    environment: 'jsdom', // Configuración de entorno para pruebas con Vitest
  },
  json: {
    namedExports: true, // Permitir exportaciones nombradas en archivos JSON
    stringify: false,   // Deshabilitar la serialización automática de JSON
  },
});
