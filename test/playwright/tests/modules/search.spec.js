import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

test.describe('search tests', { tag: ['@webspark', '@desktop'] }, () => {
  test('search', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('search-button').click();
    await drupal.testSearch(page);
  });

  test('search from 404', async ({ page }) => {
    await page.goto('/nonexistent');
    await drupal.testSearch(page);
  });
});
