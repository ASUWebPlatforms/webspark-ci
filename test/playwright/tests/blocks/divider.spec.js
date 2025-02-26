import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Divider';
const MACHINE_NAME = 'divider';

test.describe(`${BLOCK} block tests`, { tag: ['@webspark', '@desktop', '@block'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;
  let pageUrl;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.consent(page);
    await drupal.toggleCookieConsent();
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
    await page.getByRole('link', { name: 'Add block in Content, First region' }).click();
    await page.getByRole('link', { name: 'Create content block' }).click();
    await page.getByRole('link', { name: BLOCK, exact: true }).click();
    await page.getByRole('textbox', { name: 'Required Block admin title' }).fill(MACHINE_NAME);

    //--- Begin custom test steps
    await page.getByRole('button', { name: 'Add block' }).click();

    // Alternate
    await page.getByRole('link', { name: 'Add block in Content, First region' }).click();
    await page.getByRole('link', { name: 'Create content block' }).click();
    await page.getByRole('link', { name: BLOCK, exact: true }).click();
    await page.getByRole('textbox', { name: 'Required Block admin title' }).fill(MACHINE_NAME);
    await page.getByRole('combobox', { name: 'Required Divider type' }).selectOption({ label: 'Gold body copy divider' });
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const divider = page.getByRole('separator');

    await expect(divider.first()).toBeVisible();
    await expect(divider.first()).toHaveClass('margin-width-divider');
    await expect(divider.last()).toBeVisible();
    await expect(divider.last()).toHaveClass('copy-divider');
  });
});
