import { test, expect } from '@playwright/test';
import drush from '../../helpers/drush'

/** @type {import('@playwright/test').Page} */
let page
const title = 'Maintenance Page'

// Reset storage state for this file to avoid being authenticated
test.use({ storageState: { cookies: [], origins: [] } })

test.describe(title, { tag: ['@webspark', '@pages'] }, () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    await drush.enableMaintenanceMode()
  })

  test.afterAll(async () => {
    await drush.disableMaintenanceMode()
    await page.close()
  })

  test('verify', async () => {
    const response = await page.goto('/');
    const content = page.getByText('Site under maintenance', { exact: true });

    expect(response.status()).toBe(503);
    await expect(content).toBeVisible();
  })
})
