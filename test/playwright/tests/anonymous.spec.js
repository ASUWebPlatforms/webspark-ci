import { test, expect } from '@playwright/test';

test.describe('anonymous tests', { tag: '@webspark' }, () => {
  test('cas', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Sign In' }).click();
    await expect(page.getByRole('heading', { name: 'Application Not Authorized to' })).toBeVisible();
    await expect(page.locator('h2')).toContainText('Application Not Authorized to Use CAS');
  });

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

  test('404', async ({ page }) => {
    await page.goto('/nonexistent');
    await expect(page.getByRole('heading', { name: 'Hmm, we can\'t find that page' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Hmm, we can\'t find that page');
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
