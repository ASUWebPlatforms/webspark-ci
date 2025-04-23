import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Video';

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
    await drupal.addMediaField(page);
    await page.getByRole('textbox', { name: 'Video Caption' }).fill('Block content');
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const video = page.locator('iframe[title="We build our future"]').contentFrame().locator('iframe[title="We build our future"]').contentFrame().locator('.ytp-cued-thumbnail-overlay-image');
    const caption = page.locator('figcaption');
    const play = page.locator('iframe[title="We build our future"]').contentFrame().locator('iframe[title="We build our future"]').contentFrame().getByLabel('Play', { exact: true });
    const pause = page.locator('iframe[title="We build our future"]').contentFrame().locator('iframe[title="We build our future"]').contentFrame().getByRole('button', { name: 'Pause keyboard shortcut k' });

    await expect(video).toBeVisible();
    await expect(caption).toContainText('Block content');
    await play.click();
    await expect(pause).toBeVisible();
  });
});
