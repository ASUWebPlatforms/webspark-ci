import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Card Arrangement';

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
    await page.getByRole('button', { name: 'Main Content *' }).click();
    await page.getByRole('textbox', { name: 'Heading', exact: true }).fill('Block heading');
    await page.getByRole('combobox', { name: 'Required Text Color' }).selectOption({ label: 'White' });
    await page.getByRole('textbox', { name: 'URL' }).fill('https://asu.edu');
    await page.getByRole('textbox', { name: 'Link text' }).fill('Block CTA');
    await page.getByRole('combobox', { name: 'Select a target' }).selectOption({ label: 'New window (_blank)' });
    await page.getByRole('combobox', { name: 'Required Style' }).selectOption({ label: 'Maroon' });
    // Not testing for this as it is currently buggy
    // await page.getByLabel('Rich Text Editor').getByRole('textbox').fill('Block content');

    // Timeout is needed because of
    // webspark_blocks/js/card-arrangement.js
    // Just do it the normal way, I think this is the cause of the aformentioned bug.
    await page.waitForTimeout(4000);
    await page.getByLabel('Required Columns to Display').selectOption({ label: 'Two Columns' });
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const div = page.locator('.uds-card-arrangement-content-container');
    const heading = page.getByText('Block heading', { exact: true });
    const cta = page.getByRole('link', { name: 'Block CTA', exact: true });

    await expect(div).toHaveClass(/text-white/);
    await expect(heading).toBeVisible();
    await expect(cta).toHaveClass(/btn-maroon/);
    await expect(cta).toHaveAttribute('href', 'https://asu.edu');
    await expect(cta).toHaveAttribute('target', '_blank');
  });
});
