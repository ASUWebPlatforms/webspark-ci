import { test, expect } from '@playwright/test';

test.describe('testimonial carousel tests', { tag: '@webspark' }, () => {
  test.beforeEach('setup', async ({ page }) => {
    await page.goto('/testimonial-carousel');
  });

  test('testimonial carousel loads', async ({ page }) => {
    await expect(page.locator('li').filter({ hasText: 'HeadingNulla a orci eu leo' }).getByTestId('testimonial-image')).toBeVisible();
    // TODO: Ensure the markup for this component uses relative paths for images
    await expect(page.locator('li').filter({ hasText: 'HeadingNulla a orci eu leo' }).getByTestId('testimonial-image')).toHaveAttribute('src', 'https://webspark-ci.ddev.site/sites/default/files/2022-11/sample-5.jpg');
    await expect(page.getByText('Heading', { exact: true })).toBeVisible();
    await expect(page.getByText('John Doe')).toBeVisible();
    await expect(page.getByText('Author')).toBeVisible();
    await expect(page.getByRole('blockquote').getByTestId('testimonial-content')).toBeVisible();
    await expect(page.getByLabel('Slide view 1')).toBeVisible();
    await expect(page.getByLabel('Next slide')).toBeVisible();
  });

  test('testimonial carousel functionality', async ({ page }) => {
    await page.getByLabel('Slide view 2').click();
    await page.getByLabel('Slide view 3').click();
    // Slide 3
    await expect(page.locator('.glide__slide').nth(2)).toBeVisible();
    await page.getByLabel('Previous slide').click({ clickCount: 2 });
    // Slide 1
    await expect(page.locator('.glide__slide').nth(0)).toBeVisible();
    await page.getByLabel('Next slide').click();
    // Slide 2
    await expect(page.locator('.glide__slide').nth(1)).toBeVisible();
  });
});
