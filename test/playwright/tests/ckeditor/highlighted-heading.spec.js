import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const PLUGIN = 'Highlighted Heading';

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
    await page.getByRole('toolbar', { name: 'Editor toolbar' }).getByRole('textbox').fill('Heading');
    await page.locator('div').filter({ hasText: /^StyleGold HighlightGray 7 HighlightWhite Highlight$/ }).getByRole('combobox').selectOption('black');
    await page.locator('div').filter({ hasText: /^HeadingH2H3H4$/ }).getByRole('combobox').selectOption('h3');
    await page.getByLabel('Editor toolbar').getByRole('button', { name: 'Save' }).click();
    //--- End custom test steps

    await page.getByRole('button', { name: 'Save' }).click();
  });

  test('verify', async () => {
    const h3 = page.locator('.uds-highlighted-heading > h3');
    const heading = page.getByText('Heading', { exact: true });

    await expect(h3).toBeVisible();
    await expect(heading).toHaveClass('highlight-black');
  });
});
