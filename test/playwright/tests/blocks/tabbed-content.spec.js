import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Tabbed Content';

test.describe(`${BLOCK} block tests`, { tag: ['@webspark', '@desktop', '@block'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;
  let pageUrl;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    // move to global setup
    await drupal.consent(page);
    await drupal.toggleUniversalGTM();
    await drupal.loginAsAdmin(page);
    // stop move to global setup
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
    const add = page.getByRole('button', { name: 'Add Tab Content' });
    await page.getByRole('combobox', { name: 'Background Color' }).selectOption({ label: 'Gray 1' });

    await page.getByRole('textbox', { name: 'Required Tab Title' }).nth(0).fill('Tab 1');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').nth(0).fill('Tab 1 content');
    await add.click();

    await page.getByRole('textbox', { name: 'Required Tab Title' }).nth(1).fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').nth(1).fill('Tab 2 content');
    await add.click();

    await page.getByRole('textbox', { name: 'Required Tab Title' }).nth(2).fill('Tab 3');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').nth(2).fill('Tab 3 content');
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    // Iniital state
    await expect(page.getByRole('tab', { name: 'Tab 1' })).toBeVisible();
    await expect(page.getByText('Tab 1 content')).toBeVisible();
    await expect(page.getByRole('tab', { name: 'Lorem ipsum dolor sit amet,' })).toBeVisible();
    await expect(page.getByText('Tab 2 content')).toBeHidden();
    await expect(page.getByRole('tab', { name: 'Tab 3' })).toBeHidden();
    await expect(page.getByText('Tab 3 content')).toBeHidden();

    // Clicks
    await expect(page.getByRole('button', { name: 'Next' })).toBeVisible();
    await page.getByRole('tab', { name: 'Lorem ipsum dolor sit amet,' }).click();
    await expect(page.getByText('Tab 2 content')).toBeVisible();
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.getByRole('tab', { name: 'Tab 3' })).toBeVisible();
    await expect(page.getByText('Tab 3 content')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Previous' })).toBeVisible();
    await page.getByRole('button', { name: 'Previous' }).click();
    await page.getByRole('tab', { name: 'Tab 1' }).click();
    await expect(page.getByText('Tab 1 content')).toBeVisible();
  });
});
