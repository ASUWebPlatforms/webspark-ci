import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Notification Banner';

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
    await page.getByRole('textbox', { name: 'Required Heading' }).fill('Block heading');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').fill('Block content');
    await page.getByRole('radio', { name: 'Blue' }).setChecked(true);
    await page.locator('.fip-icon-down-dir').first().click();
    await page.getByTitle('Pyramid,ASUAwesome,Shapes,').first().click();
    await page.locator('[data-drupal-selector^="edit-settings-block-form-field-ctas-0-subform-field-cta-link-0-uri"]').first().fill('https://asu.edu');
    await page.locator('[data-drupal-selector^="edit-settings-block-form-field-ctas-0-subform-field-cta-link-0-title"]').first().fill('Block CTA');
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const block = page.locator('.block-inline-blockbanner');
    const color = page.locator('.banner-blue');
    const icon = page.locator('.banner-icon');
    const heading = page.getByText('Block heading', { exact: true });
    const content = page.getByText('Block content', { exact: true });
    const cta = page.getByRole('link', { name: 'Block CTA' });
    const close = page.getByRole('button', { name: 'Close' });

    await expect(block).toBeVisible();
    await expect(color).toHaveCount(1);
    await expect(icon).toBeVisible();
    await expect(heading).toBeVisible();
    await expect(content).toBeVisible();
    await expect(cta).toBeVisible();
    await expect(cta).toHaveClass(/btn-dark/);
    await expect(cta).toHaveAttribute('href', 'https://asu.edu');
    await expect(close).toBeVisible();
    await close.click();
    await expect(block).toBeHidden();
  });
});
