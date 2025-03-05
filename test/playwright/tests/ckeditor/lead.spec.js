import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const PLUGIN = 'Lead';

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

    //--- Begin custom test steps
    await page.getByRole('toolbar', { name: 'Editor toolbar' }).getByRole('textbox').fill('Lead');
    await page.getByLabel('Editor toolbar').getByRole('button', { name: 'Save' }).click();
    //--- End custom test steps

    await page.getByRole('button', { name: 'Save' }).click();
  });

  test('verify', async () => {
    const lead = page.getByText('Lead', { exact: true });

    await expect(lead).toHaveClass('lead');
  });
});
