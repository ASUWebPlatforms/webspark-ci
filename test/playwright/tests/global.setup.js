import { test as setup } from '@playwright/test';
import drupal from './helpers/drupal';

setup('setup the site', async ({ page }) => {
  await drupal.loginAsAdmin(page);
  await page.goto('/admin/config/asu_brand/settings');
  await page.getByRole('checkbox', { name: 'Enable ASU Cookie Consent' }).uncheck();
  await page.getByRole('checkbox', { name: 'Enable ASU Universal Google' }).uncheck();
  await page.getByRole('button', { name: 'Save configuration' }).click();
});
