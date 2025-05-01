// TODO: Move these tests to the Header file
import { test, expect } from '@playwright/test';

test.describe('cas tests', { tag: ['@webspark', '@desktop', '@modules'] }, () => {
  test('verify default', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Sign In', exact: true }).click();

    const header = page.getByRole('heading', { name: 'Application Not Authorized to Use CAS', exact: true });
    await expect(header).toBeVisible();
  });

  // test('verify custom', async ({ page }) => {
  //   // Change the URLs and verify the new links
  //   await page.getByRole('button', { name: 'Login Paths' }).click();
  //   await page.getByRole('textbox', { name: 'Login path *' }).click();
  //   await page.getByRole('button', { name: 'Save block' }).click();
  // });
});
