import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const PLUGIN = 'Horizontal line';

test.describe(`CKEditor ${PLUGIN} tests`, { tag: ['@webspark', '@desktop', '@ckeditor'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;
  let pageUrl;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.loginAsAdmin(page);
    pageUrl = await drupal.createPage(page, PLUGIN);
  });

  test.beforeEach(async () => {
    await page.goto(pageUrl);
  });

  test.afterAll('cleanup', async () => {
    await page.close();
  });

  test('create', async () => {
    await page.getByRole('link', { name: 'Edit' }).click();
    await page.getByRole('button', { name: PLUGIN }).click();
    await page.getByRole('button', { name: 'Save' }).click();
  });

  test('verify', async () => {
    const hr = page.getByRole('separator');

    await expect(hr).toBeVisible();
  });
});
