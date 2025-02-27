import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Image Background With Call To Action';

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
    await drupal.addBlock(page, BLOCK);

    //--- Begin custom test steps
    await page.getByRole('textbox', { name: 'Heading' }).fill('Block heading');
    await drupal.addMediaField(page);
    await page.getByRole('button', { name: 'Add CTA' }).click();
    await drupal.addCTAField(page);
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const block = page.locator('.uds-image-background-with-cta');
    const heading = page.getByText('Block heading');
    const cta = page.getByRole('link', { name: 'Block CTA' });

    await expect(block).toHaveCSS('background-image', /.*sample.*/);
    await expect(heading).toBeVisible();
    await expect(cta).toBeVisible();
    await expect(cta).toHaveClass(/btn-maroon/);
    await expect(cta).toHaveAttribute('href', 'https://asu.edu');
    await expect(cta).toHaveAttribute('target', '_blank');
  });
});
