import { test, expect } from '@playwright/test';

test.describe('home page tests', { tag: ['@webspark', '@desktop'] }, () => {
  test('verify', async ({ page }) => {
    const response = await page.goto('/');
    const header = page.locator('#asuHeader');
    const footer = page.locator('#asu-footer');

    expect(response.status()).toBe(200);
    await expect(header).toBeVisible();
    await expect(footer).toBeVisible();
  });
});
