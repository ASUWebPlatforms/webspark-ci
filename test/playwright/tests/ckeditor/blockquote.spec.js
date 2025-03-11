import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const PLUGIN = 'Blockquote';

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
    await page.getByRole('button', { name: PLUGIN, exact: true }).click();

    //--- Begin custom test steps
    // await page.getByRole('button', { name: 'Show more items' }).click();
    await page.locator('form').filter({ hasText: /^ContentCitation NameCitation DescriptionSaveCancel$/ }).locator('textarea').fill('Blockquote content');
    await page.getByRole('toolbar', { name: 'Dropdown toolbar' }).getByRole('textbox').nth(1).fill('Citation');
    await page.getByRole('toolbar', { name: 'Dropdown toolbar' }).getByRole('textbox').nth(2).fill('Description');
    await page.getByLabel('Dropdown toolbar').getByRole('button', { name: 'Save' }).click();
    //--- End custom test steps

    await page.getByRole('button', { name: 'Save' }).click();
  });

  test('verify', async () => {
    const content = page.getByText('Blockquote content');
    const citation = page.getByText('Citation');
    const description = page.getByText('Description');
    const quote = page.locator('.accent-maroon');

    await expect(content).toBeVisible();
    await expect(citation).toBeVisible();
    await expect(description).toBeVisible();
    await expect(quote).toBeVisible();
  });
});
