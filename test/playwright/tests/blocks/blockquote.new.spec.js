import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal.helpers';

const BLOCK = 'Blockquote';
const MACHINE_NAME = 'blockquote';

test.describe(`${BLOCK} block tests`, { tag: ['@webspark', '@desktop', '@block'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;
  let pageUrl;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.consent(page);
    await drupal.setConfigs();
    await drupal.loginAsAdmin(page);
    pageUrl = await drupal.createPage(page, BLOCK);
  });

  test.beforeEach(async () => {
    await page.goto(pageUrl);
  });

  test.afterAll('cleanup', async () => {
    await page.close();
  });

  test('create', async () => {
    await page.getByRole('link', { name: 'Layout' }).click();
    await page.getByRole('link', { name: 'Add block in Content, First region' }).click();
    await page.getByRole('link', { name: 'Create content block' }).click();
    await expect(page.getByRole('link', { name: BLOCK })).toBeVisible();
    await page.getByRole('link', { name: BLOCK }).click();
    await page.getByRole('textbox', { name: 'Required Block admin title' }).fill(MACHINE_NAME);

    //--- Begin custom test steps
    // ...
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    // ...
  });
});
