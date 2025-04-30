import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Card Arrangement';
const TYPE = 'Degree';

test.describe(`${BLOCK} (${TYPE}) tests`, { tag: ['@webspark', '@desktop', '@cards'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;
  let pageUrl;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.consent(page);
    await drupal.toggleUniversalGTM();
    await drupal.loginAsAdmin(page);
    pageUrl = await drupal.createPage(page, `${BLOCK} (${TYPE})`);
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
    await page.getByLabel('Required Columns to Display').selectOption({ label: 'Two Columns' });
    await page.getByRole('button', { name: 'Cards' }).click();

    // Add Cards
    // This is the same as the default card with only a new class name, so can keep it simple
    await page.getByRole('button', { name: 'Add Card Group Degree' }).click();
    await page.waitForTimeout(1000);
    await drupal.addMediaField(page);
    await page.getByRole('textbox', { name: 'Heading' }).fill('Card heading');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').fill('Card content');
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const card = page.locator('.card');

    await expect(card).toHaveClass(/card-degree/);
  });
});
