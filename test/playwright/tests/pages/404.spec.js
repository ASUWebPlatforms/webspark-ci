import { test, expect } from '@playwright/test';

test('404', { tag: '@webspark' }, async ({ page }) => {
  await page.goto('/nonexistent');
  await expect(page.getByRole('heading', { name: 'Hmm, we can\'t find that page' })).toBeVisible();
  await expect(page.locator('h1')).toContainText('Hmm, we can\'t find that page');
});
