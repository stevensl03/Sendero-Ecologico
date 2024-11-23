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
  }
};

export default config;

