import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.sendero',
  appName: 'sendero',
  webDir: 'dist',
  plugins: {
    Keyboard: {
      resize: 'native', // Asegura que el contenido se ajuste correctamente al teclado
      style: 'dark',
    }
  },
  server: {
    url: 'http://192.168.0.25:8080', // Dirección del backend
  }
};

export default config;
