import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.sendero',
  appName: 'sendero',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    Keyboard: {
      resize: 'native', // Asegura que el contenido se ajuste correctamente al teclado
      style: 'dark',
    }
  }
};

export default config;

