import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Card Arrangement';
const TYPE = 'Image';

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
    await page.getByRole('button', { name: 'Add Image based cards' }).click();
    await page.waitForTimeout(1000);
    await drupal.addMediaField(page);
    await page.getByRole('textbox', { name: 'URL', exact: true }).fill('https://asu.edu');
    await page.getByRole('textbox', { name: 'Link text', exact: true }).fill('Card link');
    await page.getByRole('combobox', { name: 'Required Loading', exact: true }).selectOption({ label: 'Eager' });
    await page.getByLabel('Rich Text Editor').getByRole('textbox').fill('Card content');
    await page.getByRole('textbox', { name: 'Caption title', exact: true }).fill('Card caption');
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const link = page.getByRole('link', { name: 'sample image Card link' });
    const img = page.locator('.ws2-img');
    const caption = page.getByText('Card caption', { exact: true });
    const content = page.getByText('Card content', { exact: true });

    await expect(link).toHaveAttribute('href', 'https://asu.edu');
    await expect(img).toBeVisible();
    await expect(img).toHaveAttribute('loading', 'eager');
    await expect(caption).toBeVisible();
    await expect(content).toBeVisible();
  });
});
