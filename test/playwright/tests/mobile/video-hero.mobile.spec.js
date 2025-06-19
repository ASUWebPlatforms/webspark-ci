import { test, expect } from '@playwright/test';

test('video hero loads', { tag: ['@webspark', '@mobile', '@blocks'] }, async ({ page }) => {
  await page.goto('/video-hero');
  await expect(page.locator('.uds-video-hero')).toBeVisible();
  await expect(page.locator('.uds-video-hero .hero')).toBeVisible();
  await expect(page.locator('#media-video')).toBeHidden();
  await expect(page.getByLabel('Pause')).toBeHidden();
  await expect(page.getByText('Nulla a orci eu leo rutrum')).toBeHidden();
});
