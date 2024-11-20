import { test, expect } from '@playwright/test';
import drupal from './helpers/drupal.helpers';

test('can login as admin user', async ({ page }) => {
  // Login using drush uli
  await drupal.loginAsAdmin(page);

  // Verify we're logged in
  await page.goto('/admin/content');
  await expect(page.getByRole('link', { name: 'Back to site' })).toBeVisible();
  await expect(page.locator('h1')).toContainText('Content');
});
