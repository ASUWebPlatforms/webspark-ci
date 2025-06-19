import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Card image and content';

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
    await page.getByRole('textbox', { name: 'Heading' }).first().fill('Block heading');
    await page.getByRole('combobox', { name: 'Required Heading color' }).selectOption({ label: 'Gray 7' });
    await drupal.addMediaField(page);
    await page.getByLabel('Rich Text Editor').getByRole('textbox').first().fill('Block content');
    await page.getByRole('combobox', { name: 'Required Text Color' }).selectOption({ label: 'White' });
    await page.locator('[data-drupal-selector^="edit-settings-block-form-field-card-0-subform-field-media-open-button"]').click();
    await page.getByRole('checkbox', { name: 'Select sample', exact: true }).check();
    await page.getByRole('button', { name: 'Insert selected' }).click();
    await page.getByRole('textbox', { name: 'Heading' }).last().fill('Block heading');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').last().fill('Block content');
    await page.getByRole('button', { name: 'Add CTA' }).first().click();
    await page.locator('[data-drupal-selector^="edit-settings-block-form-field-card-0-subform-field-cta-0-subform-field-cta-link-0-uri"]').first().fill('https://asu.edu');
    await page.locator('[data-drupal-selector^="edit-settings-block-form-field-card-0-subform-field-cta-0-subform-field-cta-link-0-title"]').first().fill('Block CTA');
    await page.getByRole('combobox', { name: 'Select a target' }).first().selectOption({ label: 'New window (_blank)' });
    await page.getByRole('combobox', { name: 'Required Style' }).first().selectOption({ label: 'Maroon' });
    await page.getByRole('button', { name: 'Add CTA' }).last().click();
    await page.locator('[data-drupal-selector^="edit-settings-block-form-field-card-0-subform-field-cta-secondary-0-subform-field-cta-link-0-uri"]').last().fill('https://asu.edu');
    await page.locator('[data-drupal-selector^="edit-settings-block-form-field-card-0-subform-field-cta-secondary-0-subform-field-cta-link-0-title"]').last().fill('Block CTA');
    await page.getByRole('textbox', { name: 'URL' }).last().fill('https://asu.edu');
    await page.getByRole('textbox', { name: 'Link text' }).last().fill('Block CTA');
    await page.getByRole('checkbox', { name: 'Show borders' }).setChecked(true);
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const div = page.locator('.uds-card-image-and-content-image-container');
    const heading = page.getByText('Block heading', { exact: true });
    const content = page.getByText('Block content', { exact: true });
    const contentParent = page.locator('.content').filter({ has: content });
    const cta = page.getByRole('link', { name: 'Block CTA', exact: true });
    const image = page.getByRole('img', { name: 'sample image' });

    await expect(div).toHaveCSS('background-image', /.*sample.*/);
    await expect(heading.first()).toBeVisible();
    await expect(content.first()).toBeVisible();
    await expect(contentParent).toHaveClass(/text-white/);
    await expect(image).toBeVisible();
    await expect(heading.last()).toBeVisible();
    await expect(content.last()).toBeVisible();
    await expect(cta.nth(0)).toBeVisible();
    await expect(cta.nth(0)).toHaveClass(/btn-maroon/);
    await expect(cta.nth(0)).toHaveAttribute('href', 'https://asu.edu');
    await expect(cta.nth(0)).toHaveAttribute('target', '_blank');
    await expect(cta.nth(1)).toBeVisible();
    await expect(cta.nth(1)).toHaveClass(/btn-gold/);
    await expect(cta.nth(1)).toHaveClass(/btn-md/);
    await expect(cta.nth(2)).toBeVisible();
  });
});
