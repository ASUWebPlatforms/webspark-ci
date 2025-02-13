import { test, expect } from '@playwright/test';

test('homepage', { tag: ['@webspark', '@desktop'] }, async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#asuHeader')).toBeVisible();
  await expect(page.getByRole('heading')).toContainText('Explore Webspark 2');
  await expect(page.locator('#asu-footer')).toBeVisible();
});
