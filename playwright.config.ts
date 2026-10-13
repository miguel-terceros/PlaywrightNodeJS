import { defineConfig, devices } from '@playwright/test';


export default defineConfig({

  // test suite level
  testDir: './tests',
  reporter: 'html',
  fullyParallel: true,          // if you want to run in parallel enable this

  // nested
  expect: {
    timeout: 3000
  },

  
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

  /**
   * npx playwright test /tests/{path}/{test}.test.ts --project name
   */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },

    {
      name: 'safari',
      use: { ...devices['Desktop Safari'] }
    },

    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
      testDir: './tests/mobile'
    },

    // by purpose
    {
      name: 'Smoke',
      testMatch: /.*smoke.test.ts/,
      retries: 0
    },

    {
      name: 'Regular',
      testIgnore: /.*smoke.test.ts/,
      retries: 2,
      use: {
        // ...
      }
    },

    {
      name: 'setup-cleanup-demo',
      testMatch: '_4global_config.test.ts',
      dependencies: ['setup', 'admin-auth', 'populate-db']
    },

    {
      name: 'cleanup',
      testMatch: '**/global.teardown.ts'
    },

    {
      name: 'setup',
      testMatch: '**/global.setup.ts',
      teardown: 'cleanup'
    },

    {
      name: 'admin-auth',
      testMatch: '**/admin-auth.setup.ts'
    },

    {
      name: 'populate-db',
      testMatch: '**/populate-db.setup.ts'
    },
  ]
});
