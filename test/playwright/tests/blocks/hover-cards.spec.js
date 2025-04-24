import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Hover Cards';

test.describe(`${BLOCK} block tests`, { tag: ['@webspark', '@desktop', '@blocks'] }, () => {
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
    await drupal.addMediaField(page);
    await page.getByRole('textbox', { name: 'Required Heading' }).fill('Block heading');
    await page.getByRole('textbox', { name: 'Required Body' }).fill('Block content');
    await page.getByRole('textbox', { name: 'URL' }).fill('https://asu.edu');
    await page.getByRole('textbox', { name: 'Link Text' }).fill('Block CTA');
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const card = page.locator('.block-inline-blockhover-cards .content-section');
    const image = page.getByRole('img', { name: 'sample image' });
    const heading = page.getByText('Block heading', { exact: true });
    const content = page.getByText('Block content', { exact: true });
    const cta = page.getByRole('link', { name: 'Block CTA', exact: true });

    await expect(image).toBeVisible();
    await expect(heading).toBeVisible();
    await card.hover();
    await expect(content).toBeVisible();
    await expect(cta).toBeVisible();
    await expect(cta).toHaveAttribute('href', 'https://asu.edu');
  });
});
