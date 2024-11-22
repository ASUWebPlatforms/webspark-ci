import { test, expect } from '@playwright/test';

test('testimonial carousel functionality', { tag: '@webspark' }, async ({ page }) => {
  await page.goto('/testimonial-carousel');
  await expect(page.getByLabel('Slide view 1')).toBeHidden();
  await expect(page.getByLabel('Next slide')).toBeVisible();
  // Best we have for now until native swipe is implemented in Playwright
  await page.getByLabel('Next slide').tap();
  await expect(page.locator('.glide__slide').nth(1)).toBeVisible();
});
