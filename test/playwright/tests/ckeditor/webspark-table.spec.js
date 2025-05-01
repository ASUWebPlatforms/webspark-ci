import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const PLUGIN = 'Webspark table';

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
    await page.getByRole('combobox').nth(0).selectOption('row');
    await page.getByRole('combobox').nth(1).selectOption('fixed');
    await page.getByRole('toolbar', { name: 'Editor toolbar' }).getByRole('textbox').nth(2).fill('Caption');
    await page.getByLabel('Editor toolbar').getByRole('button', { name: 'Save' }).click();
    await page.getByLabel('Editor editing area: main.').locator('thead span').nth(0).fill('Header 1');
    await page.getByLabel('Editor editing area: main.').locator('thead span').nth(1).fill('Header 2');
    await page.getByLabel('Editor editing area: main.').locator('tbody span').nth(0).fill('1');
    await page.getByLabel('Editor editing area: main.').locator('tbody span').nth(1).fill('2');
    await page.getByLabel('Editor editing area: main.').locator('tbody span').nth(2).fill('3');
    await page.getByLabel('Editor editing area: main.').locator('tbody span').nth(3).fill('4');
    //--- End custom test steps

    await page.locator('#edit-submit').click();
  });

  test('verify', async () => {
    await expect(page.locator('.uds-table')).toHaveClass(/uds-table-fixed/);
    await expect(page.getByText('Caption', { exact: true })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Header 1', exact: true })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Header 2', exact: true })).toBeVisible();
    await expect(page.getByRole('cell', { name: '1', exact: true })).toBeVisible();
    await expect(page.getByRole('cell', { name: '2', exact: true })).toBeVisible();
    await expect(page.getByRole('cell', { name: '3', exact: true })).toBeVisible();
    await expect(page.getByRole('cell', { name: '4', exact: true })).toBeVisible();
  });
});
