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
    await page.getByRole('toolbar', { name: 'Dropdown toolbar' }).getByRole('textbox').first().fill('2');
    await page.getByRole('toolbar', { name: 'Dropdown toolbar' }).getByRole('textbox').nth(1).fill('3');
    await page.getByRole('combobox').first().selectOption('row');
    await page.getByRole('combobox').nth(1).selectOption('fixed');
    await page.getByRole('toolbar', { name: 'Dropdown toolbar' }).getByRole('textbox').nth(2).fill('Caption');
    await page.getByLabel('Dropdown toolbar').getByRole('button', { name: 'Save' }).click();
    await page.getByLabel('Editor editing area: main.').locator('thead span').first().click();
    await page.getByRole('row', { name: '1' }).locator('span').nth(1).click();
    await page.getByLabel('Editor editing area: main.').locator('thead').getByRole('textbox').filter({ hasText: /^$/ }).locator('span').click();
    await page.getByLabel('Editor editing area: main.').locator('tbody span').first().click();
    await page.getByRole('row', { name: '4' }).locator('span').nth(1).click();
    await page.getByLabel('Editor editing area: main.').getByRole('textbox').filter({ hasText: /^$/ }).locator('span').click();
    //--- End custom test steps

    await page.getByRole('button', { name: 'Save' }).click();
  });

  test('verify', async () => {
    await expect(page.getByText('Caption', { exact: true })).toBeVisible();
    await expect(page.getByRole('cell', { name: '1' })).toBeVisible();
    await expect(page.getByRole('cell', { name: '4' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Previous' }).nth(3)).toBeVisible();
    await expect(page.getByRole('button', { name: 'Next' }).nth(3)).toBeVisible();
  });
});
