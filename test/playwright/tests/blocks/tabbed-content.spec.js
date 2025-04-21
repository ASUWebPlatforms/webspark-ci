import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Tabbed Content';

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
    const add = page.getByRole('button', { name: 'Add Tab Content' });
    await page.getByRole('combobox', { name: 'Background Color' }).selectOption({ label: 'Gray 1' });

    await page.getByRole('textbox', { name: 'Required Tab Title' }).nth(0).fill('Tab 1');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').nth(0).fill('Tab 1 content');
    await add.click();

    await page.getByRole('textbox', { name: 'Required Tab Title' }).nth(1).fill('Tab 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').nth(1).fill('Tab 2 content');
    await add.click();

    await page.getByRole('textbox', { name: 'Required Tab Title' }).nth(2).fill('Tab 3');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').nth(2).fill('Tab 3 content');
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const tabs = Array.from({length: 3}, (_, i) =>
      page.getByRole('tab', { name: `Tab ${i+1}` })
    );
    const content = Array.from({length: 3}, (_, i) =>
      page.getByText(`Tab ${i+1} content`)
    );
    const next = page.getByRole('button', { name: 'Next' });
    const prev = page.getByRole('button', { name: 'Previous' });
    const bg = page.locator('.bg-gray-1');

    // Iniital state
    await expect(bg).toHaveClass('bg-gray-1');
    await expect(prev).toBeHidden();
    await expect(next).toBeVisible();
    await expect(tabs[0]).toBeVisible();
    await expect(tabs[1]).toBeVisible();
    await expect(tabs[2]).toBeVisible();
    await expect(content[0]).toBeVisible();
    await expect(content[1]).toBeHidden();
    await expect(content[2]).toBeHidden();

    // Clicks
    await tabs[1].click();
    await expect(content[1]).toBeVisible();
    await expect(content[0]).toBeHidden();
    await next.click();
    await next.click();
    await expect(prev).toBeVisible();
    await expect(next).toBeHidden();
    await tabs[2].click();
    await expect(content[2]).toBeVisible();
  });
});
