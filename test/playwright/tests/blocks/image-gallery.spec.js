import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Image Gallery';

test.describe(`${BLOCK} block tests`, { tag: ['@webspark', '@desktop', '@blocks'] }, () => {
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
    const add = page.getByRole('button', { name: 'Add Gallery Image' });

    await page.getByRole('textbox', { name: 'Title' }).nth(0).fill('Block title');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').nth(0).fill('Block content');
    await drupal.addMediaField(page);
    await add.click();

    await page.getByRole('textbox', { name: 'Title' }).nth(1).fill('Block title');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').nth(1).fill('Block content');
    await drupal.addMediaField(page, 1);
    await add.click();

    await page.getByRole('textbox', { name: 'Title' }).nth(2).fill('Block title');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').nth(2).fill('Block content');
    await drupal.addMediaField(page, 2);
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const image = page.getByRole('img', { name: 'sample image' });
    const content = page.getByText('Block content');

    await page.waitForTimeout(300);
    await expect(image.nth(0)).toBeVisible();
    await expect(content.nth(0)).toBeVisible();

    await drupal.testCarousel(page, { role: 'option' });
  });
});
