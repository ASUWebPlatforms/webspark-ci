import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Hero';

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
    await page.getByRole('combobox', { name: 'Required Hero Size' }).selectOption({ label: 'Small' });
    await page.getByRole('textbox', { name: 'Required Hero Heading', exact: true }).fill('Block heading');
    await page.getByRole('combobox', { name: 'Required Hero Heading Background Color' }).selectOption({ label: 'Gray 7 background' });
    await page.getByRole('textbox', { name: 'Sub Heading', exact: true }).fill('Block sub heading');
    await page.getByRole('combobox', { name: 'Required Sub Heading Background Color' }).selectOption({ label: 'Gray 7 background' });
    await drupal.addMediaField(page);

    await page.locator('[data-drupal-selector^="edit-settings-block-form-field-two-cta-0-subform-field-cta-link-0-uri"]').fill('https://asu.edu');
    await page.locator('[data-drupal-selector^="edit-settings-block-form-field-two-cta-0-subform-field-cta-link-0-title"]').fill('Block CTA');
    await page.locator('[data-drupal-selector^="edit-settings-block-form-field-two-cta-0-subform-field-cta-link-0-options-attributes-target"]').selectOption({ label: 'New window (_blank)' });
    await page.locator('[data-drupal-selector^="edit-settings-block-form-field-two-cta-0-subform-field-cta-link-0-options-attributes-class"]').selectOption({ label: 'Maroon' });
    await page.getByRole('button', { name: 'Add CTA' }).click();

    await page.locator('[data-drupal-selector^="edit-settings-block-form-field-two-cta-1-subform-field-cta-link-0-uri"]').fill('https://asu.edu');
    await page.locator('[data-drupal-selector^="edit-settings-block-form-field-two-cta-1-subform-field-cta-link-0-title"]').fill('Block CTA');
    await page.getByRole('button', { name: 'Add block' }).click();

    // Large variant
    await drupal.addBlock(page, BLOCK);
    await page.getByRole('textbox', { name: 'Required Hero Heading', exact: true }).fill('Block heading');
    await page.getByRole('textbox', { name: 'Hero Text', exact: true }).fill('Block content');
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const subHeading = page.getByText('Block sub heading');
    const heading = page.getByText('Block heading');
    const cta = page.getByRole('link', { name: 'Block CTA' });
    const content = page.getByText('Block content');
    const image = page.getByRole('img', { name: 'sample image' });

    await expect(subHeading).toBeVisible();
    await expect(subHeading).toHaveClass('highlight-black');
    await expect(heading.first()).toBeVisible();
    await expect(heading.first()).toHaveClass('highlight-black');
    await expect(cta.first()).toBeVisible();
    await expect(cta.first()).toHaveClass(/btn-maroon/);
    await expect(cta.first()).toHaveAttribute('href', 'https://asu.edu');
    await expect(cta.first()).toHaveAttribute('target', '_blank');
    await expect(cta.last()).toBeVisible();
    await expect(cta.last()).toHaveClass(/btn-gold/);
    await expect(image).toBeVisible();

    await expect(heading.last()).toBeVisible();
    await expect(heading.last()).toHaveClass('highlight-gold');
    await expect(content).toBeVisible();
  });
});
