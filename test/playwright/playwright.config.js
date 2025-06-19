// @ts-check
import { defineConfig, devices } from '@playwright/test'
import path from 'path';

export const STORAGE_STATE = path.join(__dirname, '.auth/user.json');

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
  /* Default timeout, can override per test or step */
  timeout: 45000,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://webspark-ci.ddev.site',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    ignoreHTTPSErrors: true,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'setup',
      testMatch: '**/*.setup.js',
    },
    {
      name: 'sample',
      testMatch: '**/404.spec.js',
      dependencies: ['setup'],
      use: { viewport: { width: 1920, height: 1080 }, storageState: STORAGE_STATE, },
    },
    // {
    //   name: 'chrome',
    //   use: { ...devices['Desktop Chrome'], viewport: { width: 1920, height: 1080 }, storageState: STORAGE_STATE, },
    //   testIgnore: /.*mobile.spec.js/,
    //   dependencies: ['setup'],
    // },
    // {
    //   name: 'iphone',
    //   use: {...devices['iPhone 14'], storageState: STORAGE_STATE, },
    //   testMatch: /.*mobile.spec.js/,
    //   dependencies: ['setup'],
    // },
  ],
})
