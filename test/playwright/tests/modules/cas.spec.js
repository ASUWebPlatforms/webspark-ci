import { test, expect } from '@playwright/test';

test.describe('cas tests', { tag: ['@webspark', '@desktop'] }, () => {
  test('verify', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Sign In', exact: true }).click();

    const header = page.getByRole('heading', { name: 'Application Not Authorized to Use CAS', exact: true });
    await expect(header).toBeVisible();
  });
});
