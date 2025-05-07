import { test, expect } from '@playwright/test';

test.describe('404 page tests', { tag: ['@webspark', '@desktop', '@pages'] }, () => {
  test('verify', async ({ page }) => {
    const response = await page.goto('/foo-bar');
    const content = page.getByRole('heading', { name: 'Hmm, we can\'t find that page' });
    const title = page.getByRole('heading', { name: 'Search all of ASU' });
    const input = page.getByRole('textbox', { name: 'Search asu.edu' });

    expect(response.status()).toBe(404);
    await expect(content).toBeVisible();
    await expect(title).toBeVisible();

    // This test is a more detailed search test
    await input.fill('sparky');
    await page.evaluate(() => {
      document.getElementById('webspark-blocks-asu-search-form').submit();
    });
    await page.waitForURL('https://search.asu.edu/**');

    const finalUrl = page.url();
    expect(finalUrl).toContain('https://search.asu.edu/');
    expect(finalUrl).toContain('q=sparky');
  });
});
