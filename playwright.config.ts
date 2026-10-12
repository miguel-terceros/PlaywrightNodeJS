import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  fullyParallel: true,          // if you want to run in parallel enable this
  reporter: 'html',
  
  use: {
    baseURL: 'http://localhost:3000',
    screenshot: 'only-on-failure',          // this will apply for all tests
    trace: 'on-first-retry',
    // headless: false,
    launchOptions: { slowMo: 1000 },
  },

  webServer: {
    command: 'npm start',
    url: 'http://localhost:3000',
  },
});
