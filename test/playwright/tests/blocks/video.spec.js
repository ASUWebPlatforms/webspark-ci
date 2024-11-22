import { test, expect } from '@playwright/test';

test.describe('video tests', { tag: '@webspark' }, () => {
  test.beforeEach('setup', async ({ page }) => {
    await page.goto('/video');
  });

  test('video loads', async ({ page }) => {
    await expect(page.locator('iframe[title="🌴 Tropical Beach Ambience on a Island in Thailand with Ocean Sounds For Relaxation \\& Holiday Feeling"]').contentFrame().locator('iframe[title="🌴 Tropical Beach Ambience on a Island in Thailand with Ocean Sounds For Relaxation \\& Holiday Feeling"]').contentFrame().locator('.ytp-cued-thumbnail-overlay-image')).toBeVisible();
  });

  test('video plays', async ({ page }) => {
    await page.locator('iframe[title="🌴 Tropical Beach Ambience on a Island in Thailand with Ocean Sounds For Relaxation \\& Holiday Feeling"]').contentFrame().locator('iframe[title="🌴 Tropical Beach Ambience on a Island in Thailand with Ocean Sounds For Relaxation \\& Holiday Feeling"]').contentFrame().getByLabel('Play', { exact: true }).click();
  });
});
