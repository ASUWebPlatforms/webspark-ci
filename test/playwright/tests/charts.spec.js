import { test, expect } from '@playwright/test';

test.describe('Chart tests', { tag: '@webspark' }, () => {
  test('chart loads', async ({ page }) => {
    await page.goto('/donut-chart');
    await expect(page.locator('#uds-donut').first()).toBeVisible();
    await expect(page.locator('#uds-donut').first()).toHaveCSS('height', '350px');
    await expect(page.locator('#percentage-display').first()).toContainText('100%');
  });
});