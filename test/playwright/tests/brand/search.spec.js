import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

test.describe('search tests', { tag: ['@webspark', '@desktop', '@brand'] }, () => {
  test('search', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('search-button').click();
    const search = page.getByPlaceholder('Search asu.edu');

    await search.fill('test');
    await search.press('Enter');
    await expect(page.getByRole('heading', { name: 'Search' }).locator('span')).toBeVisible();
    await expect(search).toHaveValue('test');
  });
});
