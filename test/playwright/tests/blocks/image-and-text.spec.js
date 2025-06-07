import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Image And Text Block';

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
    await page.getByRole('textbox', { name: 'Heading', exact: true }).fill('Block heading');
    await page.getByRole('textbox', { name: 'Sub Heading', exact: true }).fill('Block sub heading');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').fill('Block content');
    await drupal.addMediaField(page);
    await page.getByRole('combobox', { name: 'Required Background Color' }).selectOption({ label: 'Gray 1' });

    await page.locator('[data-drupal-selector^="edit-settings-block-form-field-two-cta-0-subform-field-cta-link-0-uri"]').fill('https://asu.edu');
    await page.locator('[data-drupal-selector^="edit-settings-block-form-field-two-cta-0-subform-field-cta-link-0-title"]').fill('Block CTA');
    await page.locator('[data-drupal-selector^="edit-settings-block-form-field-two-cta-0-subform-field-cta-link-0-options-attributes-target"]').selectOption({ label: 'New window (_blank)' });
    await page.locator('[data-drupal-selector^="edit-settings-block-form-field-two-cta-0-subform-field-cta-link-0-options-attributes-class"]').selectOption({ label: 'Maroon' });
    await page.getByRole('button', { name: 'Add CTA' }).click();

    await page.locator('[data-drupal-selector^="edit-settings-block-form-field-two-cta-1-subform-field-cta-link-0-uri"]').fill('https://asu.edu');
    await page.locator('[data-drupal-selector^="edit-settings-block-form-field-two-cta-1-subform-field-cta-link-0-title"]').fill('Block CTA');
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const block = page.locator('.uds-image-text-block-text-container');
    const heading = page.getByText('Block heading');
    const subHeading = page.getByText('Block sub heading');
    const cta = page.getByRole('link', { name: 'Block CTA' });
    const content = page.getByText('Block content');
    const image = page.getByRole('img', { name: 'sample image' });

    await expect(block).toHaveClass(/gray-1-bg/);
    await expect(heading).toBeVisible();
    await expect(subHeading).toBeVisible();
    await expect(content).toBeVisible();
    await expect(cta.first()).toBeVisible();
    await expect(cta.first()).toHaveClass(/btn-maroon/);
    await expect(cta.first()).toHaveAttribute('href', 'https://asu.edu');
    await expect(cta.first()).toHaveAttribute('target', '_blank');
    await expect(cta.last()).toBeVisible();
    await expect(cta.last()).toHaveClass(/btn-gold/);
    await expect(image).toBeVisible();
  });
});
