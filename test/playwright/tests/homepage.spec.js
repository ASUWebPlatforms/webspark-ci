import { test, expect } from '@playwright/test';

test('homepage', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByTestId('logo')).toBeVisible();
  await expect(page.getByRole('heading')).toContainText('Explore Webspark 2');
});
