import type { CapacitorConfig } from '@capacitor/cli';

const slims_config: CapacitorConfig = {
  appId: 'com.app.sufalam.patient_app_slims',
  appName: 'Slims Connect',
  webDir: 'www/browser',
  ios :{
    scheme : 'App slims'
  },
  android :{
    flavor : 'slims'
  }
};

const lifecare_config: CapacitorConfig = {
  appId: 'com.app.sufalam.patient_app_lifecare',
  appName: 'Lifecare Connect',
  webDir: 'www/browser',
  ios :{
    scheme : 'App lifecare'
  },
  android :{
    flavor : 'lifecare'
  }
};

const getAppConfig = (): CapacitorConfig => {
  // 1. Define the Standard Base Config
  const baseConfig: CapacitorConfig = {
    appId: 'com.app.sufalam.patient_app',
    appName: 'Slims Connect',
    webDir: 'www/browser', 
  };

  switch (process.env['NODE_ENV']) {
    case 'lifecare':
      return lifecare_config;

    case 'slims':
      return slims_config;

    default:
      return slims_config;
  }
};

const config = getAppConfig();

console.log('Current webDir:', config.webDir);
console.log('Current NODE_ENV:', process.env['NODE_ENV']);

export default config;