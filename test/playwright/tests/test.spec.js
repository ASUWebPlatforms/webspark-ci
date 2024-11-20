/**
 * This test file only exists to test the functionality
 * of Drupal helpers.
 */

import { test, expect } from '@playwright/test';
import drupal from './helpers/drupal.helpers';

test('login as admin', async ({ page }) => {
  await drupal.loginAsAdmin(page);
  await page.goto('/admin/content');
  await expect(page.getByRole('link', { name: 'Back to site' })).toBeVisible();
  await expect(page.locator('h1')).toContainText('Content');
});
