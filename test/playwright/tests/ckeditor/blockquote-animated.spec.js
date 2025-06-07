import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const PLUGIN = 'Blockquote Animated';

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
    await page.getByRole('toolbar', { name: 'Editor toolbar' }).getByRole('textbox').first().fill('Title');
    await page.getByLabel('Editor toolbar').locator('form').filter({ hasText: 'Animated quotes only support' }).locator('textarea').fill('Content');
    await page.getByRole('toolbar', { name: 'Editor toolbar' }).getByRole('textbox').nth(2).fill('Name');
    await page.getByRole('toolbar', { name: 'Editor toolbar' }).getByRole('textbox').nth(3).fill('Description');
    await page.getByLabel('Editor toolbar').getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: 'Highlight' }).nth(1).click();
    //--- End custom test steps

    await page.locator('#edit-submit').click();
  });

  test('verify', async () => {
    const title = page.getByRole('heading', { name: 'Title' });
    const content = page.getByRole('mark');
    const name = page.getByText('Name', { exact: true });
    const description = page.getByText('Description', { exact: true });

    await expect(title).toBeVisible();
    await expect(content).toBeVisible();
    await expect(content).toHaveClass(/pen-yellow/);
    await expect(content).toHaveClass(/animate-bg-in-scroll/);
    await expect(name).toBeVisible();
    await expect(description).toBeVisible();
  });
});
