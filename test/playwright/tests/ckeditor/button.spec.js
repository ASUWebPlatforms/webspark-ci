import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const PLUGIN = 'Button';

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
    await page.locator('div').filter({ hasText: /^URL$/ }).getByRole('textbox').fill('https://asu.edu');
    await page.locator('div').filter({ hasText: /^StyleButton GoldButton MaroonButton Gray 2Button Gray 7$/ }).getByRole('combobox').selectOption('maroon');
    await page.locator('div').filter({ hasText: /^SizeDefaultMediumSmall$/ }).getByRole('combobox').selectOption('md');
    await page.getByRole('combobox').nth(2).selectOption('_blank');
    await page.getByLabel('Editor toolbar').getByRole('button', { name: 'Save' }).click();
    //--- End custom test steps

    await page.getByRole('button', { name: 'Save' }).click();
  });

  test('verify', async () => {
    const button = page.getByRole('button', { name: 'Button', exact: true });

    await expect(button).toBeVisible();
    await expect(button).toHaveClass(/btn-maroon/);
    await expect(button).toHaveClass(/btn-md/);
    await expect(button).toHaveAttribute('href', 'https://asu.edu');
    await expect(button).toHaveAttribute('target', '_blank');
  });
});
