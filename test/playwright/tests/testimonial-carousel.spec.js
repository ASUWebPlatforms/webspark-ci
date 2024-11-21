import { test, expect } from '@playwright/test';

test.describe('testimonial carousel tests', { tag: '@webspark' }, () => {
  test.beforeEach('setup', async ({ page }) => {
    await page.goto('/testimonial-carousel');
  });

  test('carousel loads', async ({ page }) => {
    await expect(page.locator('li').filter({ hasText: 'HeadingNulla a orci eu leo' }).getByTestId('testimonial-image')).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'HeadingNulla a orci eu leo' }).getByTestId('testimonial-image')).toHaveAttribute('src', 'https://webspark-ci.ddev.site/sites/default/files/2022-11/sample-5.jpg');
    await expect(page.getByText('Heading', { exact: true })).toBeVisible();
    await expect(page.getByText('John Doe')).toBeVisible();
    await expect(page.getByText('Author')).toBeVisible();
    await expect(page.getByRole('blockquote').getByTestId('testimonial-content')).toBeVisible();
    await expect(page.getByLabel('Slide view 1')).toBeVisible();
    await expect(page.getByLabel('Next slide')).toBeVisible();
  });
});
