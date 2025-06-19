import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Card Arrangement';
const TYPE = 'Icon';

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
    await page.getByRole('button', { name: 'Add Card Group with Icon' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Heading' }).fill('Card heading');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').fill('Card content');
    await page.locator('.fip-icon-down-dir').first().click();
    await page.getByTitle('Pyramid,ASUAwesome,Shapes,').first().click();
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const icon = page.getByTestId('card-icon');

    await expect(icon).toBeVisible();
  });
});
