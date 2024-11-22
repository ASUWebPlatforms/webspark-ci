import { test, expect } from '@playwright/test';

test('cas', { tag: '@webspark' }, async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await expect(page.getByRole('heading', { name: 'Application Not Authorized to' })).toBeVisible();
  await expect(page.locator('h2')).toContainText('Application Not Authorized to Use CAS');
});
