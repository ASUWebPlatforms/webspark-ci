import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Content image overlap';
const MACHINE_NAME = 'content-image-overlap';

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
    await drupal.addMediaField(page);
    await page.getByRole('textbox', { name: 'Heading' }).fill('Block heading');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').fill('Block content');
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const block = page.locator('.uds-image-overlap');
    const heading = page.getByText('Block heading', { exact: true });
    const content = page.getByText('Block content', { exact: true });
    const image = page.getByRole('img', { name: 'sample image' });

    await expect(block).toHaveClass(/content-left/);
    await expect(heading).toBeVisible();
    await expect(heading).toHaveClass('highlight-gold');
    await expect(content).toBeVisible();
    await expect(image).toBeVisible();
  });
});
