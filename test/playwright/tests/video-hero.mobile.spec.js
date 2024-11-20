import { test, expect } from '@playwright/test';

test.describe('video hero (mobile) tests', { tag: '@webspark' }, () => {
  test.beforeEach('setup', async ({ page }) => {
    await page.goto('/video-hero');
  });

  test('video hero loads', async ({ page }) => {
    await expect(page.locator('.uds-video-hero')).toBeVisible();
    await expect(page.locator('.uds-video-hero .hero')).toBeVisible();
    await expect(page.locator('#media-video')).toBeHidden();
    await expect(page.getByLabel('Pause')).toBeHidden();
    await expect(page.getByText('Nulla a orci eu leo rutrum')).toBeHidden();
  });
});
