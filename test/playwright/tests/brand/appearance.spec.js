import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

test.describe('appearance tests', { tag: ['@webspark', '@desktop', '@brand'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;
  let pageUrl;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.consent(page);
    await drupal.toggleUniversalGTM();
    await drupal.loginAsAdmin(page);
    pageUrl = await drupal.createPage(page, 'Appearance');
  });

  test.beforeEach(async () => {
    await page.goto(pageUrl);
  });

  test.afterAll('cleanup', async () => {
    await page.close();
  });

  test('create', async () => {
    await page.getByRole('link', { name: 'Layout' }).click();
    await page.waitForTimeout(1000);
    await drupal.addBlock(page, 'Text Content');

    //--- Begin custom test steps
    await page.getByRole('button', { name: 'Appearance Settings' }).click();
    await page.getByLabel('Spacing top').selectOption({ label: '8px' });
    await page.getByLabel('Spacing bottom').selectOption({ label: '8px' });
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const block = page.locator('.spacing-top-8.spacing-bottom-8')

    await expect(block).toBeVisible();
  });
});
