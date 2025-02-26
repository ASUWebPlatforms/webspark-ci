import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

test.describe('maintenance page tests', { tag: ['@webspark', '@desktop'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.toggleMaintenanceMode();
  });

  test.afterAll('cleanup', async () => {
    await drupal.toggleMaintenanceMode(0);
    await page.close();
  });

  test('verify', async () => {
    const response = await page.goto('/');
    const content = page.getByText('Site under maintenance', { exact: true });

    expect(response.status()).toBe(503);
    await expect(content).toBeVisible();
  });
});
