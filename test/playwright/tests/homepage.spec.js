import { test, expect } from '@playwright/test';

test.describe('Homepage tests', { tag: '@webspark' }, () => {
  test('homepage loads', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#asuHeader')).toBeVisible();
    await expect(page.getByRole('heading')).toContainText('Explore Webspark 2');
    await expect(page.locator('#asu-footer')).toBeVisible();
  });
});
