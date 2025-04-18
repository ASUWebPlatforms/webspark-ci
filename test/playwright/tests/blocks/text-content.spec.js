import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Text Content';

test.describe(`${BLOCK} block tests`, { tag: ['@webspark', '@desktop', '@block'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;
  let pageUrl;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.consent(page);
    await drupal.toggleUniversalGTM();
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
    await drupal.addBlock(page, BLOCK);

    //--- Begin custom test steps
    await page.getByLabel('Rich Text Editor').getByRole('textbox').fill('Block content');
    await page.getByRole('combobox', { name: 'Required Text Color' }).selectOption({ label: 'White' });
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const content = page.getByText('Block content', { exact: true });
    const contentParent = page.locator('.block-inline-blocktext-content').filter({ has: content });

    await expect(content).toBeVisible();
    await expect(contentParent).toHaveClass(/text-white/);
  });
});
