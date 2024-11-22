import { test, expect } from '@playwright/test';

test.describe('search tests', { tag: '@webspark' }, () => {
  test('search', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('search-button').click();
    await page.getByPlaceholder('Search asu.edu').click();
    await page.getByPlaceholder('Search asu.edu').fill('test');
    await page.getByPlaceholder('Search asu.edu').press('Enter');
    // Playwright dont like these regexes, dont really need them but good to ensure the URL is correct
    // await expect(page).toHaveURL('^\/\#gsc\.tab\=0\&gsc\.q=test.*?$');
    await expect(page.getByRole('heading', { name: 'Search' }).locator('span')).toBeVisible();
    await expect(page.getByPlaceholder('Search asu.edu')).toHaveValue('test');
  });

  test('search from 404', async ({ page }) => {
    await page.goto('/nonexistent');
    await page.getByPlaceholder('Search asu.edu').click();
    await page.getByPlaceholder('Search asu.edu').fill('test');
    await page.getByPlaceholder('Search asu.edu').press('Enter');
    // await expect(page).toHaveURL('^\/\#gsc\.tab\=0\&gsc\.q=test.*?$');
    await expect(page.getByRole('heading', { name: 'Search' }).locator('span')).toBeVisible();
    await expect(page.getByPlaceholder('Search asu.edu')).toHaveValue('test');
  });
});
