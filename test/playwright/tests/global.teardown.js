import { test as teardown } from '@playwright/test';
import drupal from './helpers/drupal';

teardown('teardown the site', async ({ page }) => {
  await drupal.loginAsAdmin(page);
  await page.goto('/admin/config/asu_brand/settings');
  await page.getByRole('checkbox', { name: 'Enable ASU Universal Google' }).check();
  await page.getByRole('button', { name: 'Save configuration' }).click();
});
