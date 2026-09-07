import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.laboratory.management',
  appName: 'Laboratory Management',
  webDir: 'www',

  plugins: {
    GoogleSignIn: {
      webClientId: '302676179340-4e6res67d3sbf7ftg1mr7fqi3i409kt4.apps.googleusercontent.com'
    }
  }
};

export default config;
