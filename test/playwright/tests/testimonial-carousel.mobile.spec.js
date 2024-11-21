import { test, expect } from '@playwright/test';

test.describe('testimonial carousel (mobile) tests', { tag: '@webspark' }, () => {
  test.beforeEach('setup', async ({ page }) => {
    await page.goto('/testimonial-carousel');
  });

  test('carousel functionality', async ({ page }) => {
    // check arrows visibility
    // check buttons NOT visiblew
    // click arrow, check next slide
    // swipe to next slide
  });
});
