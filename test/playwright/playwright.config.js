// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Fail fast */
  maxFailures: process.env.CI ? 5 : undefined,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://webspark-ci.ddev.site',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    ignoreHTTPSErrors: true,
    storageState: 'auth.json'
  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'firefox',
    //   use: {
    //      ...devices['Desktop Firefox'],
    //      viewport: { width: 1920, height: 1080 },
    //   },
    //   testIgnore: /.*mobile.spec.js/,
    // },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
       },
       testIgnore: /.*mobile.spec.js/,
    },
    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //     viewport: { width: 1920, height: 1080 },
    //   },
    //   testIgnore: /.*mobile.spec.js/,
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    //   testMatch: /.*mobile.spec.js/,
    // },
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    //   testMatch: /.*mobile.spec.js/,
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     ...devices['Desktop Edge'],
    //     channel: 'msedge',
    //     viewport: { width: 1920, height: 1080 },
    //   },
    //   testIgnore: /.*mobile.spec.js/,
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //      ...devices['Desktop Chrome'],
    //      channel: 'chrome',
    //      viewport: { width: 1920, height: 1080 },
    //     },
    //     testIgnore: /.*mobile.spec.js/,
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
