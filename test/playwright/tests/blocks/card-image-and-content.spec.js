import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal.helpers';

const BLOCK = 'Card image and content';
const MACHINE_NAME = 'card-image-and-content';

test.describe(`${BLOCK} block tests`, { tag: ['@webspark', '@desktop'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.visitLayoutBuilder(page);
    await drupal.removeElement(page, '.cookie-consent-component');
  });

  // test.afterAll('cleanup', async () => {
  //   await page.getByRole('link', { name: 'Layout' }).first().click();
  //   await drupal.removeBlock(page);
  //   await page.close();
  // });

  test('create', async () => {
    await drupal.addBlock(page, BLOCK);
    await page.locator('[id^="edit-settings-block-form-field-heading-0-value"]').click();
    await page.locator('[id^="edit-settings-block-form-field-heading-0-value"]').fill(`${BLOCK} heading`);
    await page.getByLabel('Required Heading color').selectOption('default');
    await page.getByRole('button', { name: 'Add media' }).nth(0).click();
    await page.locator('article').filter({ hasText: 'Hero-DreamscapeLearn-2022.jpeg' }).getByRole('img').click();
    await page.getByRole('button', { name: 'Insert selected' }).click();
    await page.locator('[id^="edit-settings-block-form-field-formatted-text-wrapper"]').getByRole('paragraph').click();
    await page.locator('[id^="edit-settings-block-form-field-formatted-text-wrapper"]').getByRole('paragraph').fill(`${BLOCK} content`);
    await page.getByLabel('Required Text Color').selectOption('text-white');
    await page.getByRole('button', { name: 'Add media' }).nth(1).click();
    await page.locator('article').filter({ hasText: 'Hero-DreamscapeLearn-2022.jpeg' }).getByRole('img').click();
    await page.getByRole('button', { name: 'Insert selected' }).click();

    await page.locator('[id^="edit-settings-block-form-field-card-0-subform-field-heading-0-value"]').click();
    await page.locator('[id^="edit-settings-block-form-field-card-0-subform-field-heading-0-value"]').fill('Card heading');
    // await page.getByRole('cell', { name: 'Card Remove Heading card' }).getByRole('paragraph').click();
    // await page.locator('#edit-settings-block-form-field-card-0-subform-field-cta-add-more-add-more-button-cta--DXrLSgPrUYg').click();
    // await page.locator('#edit-settings-block-form-field-card-0-subform-field-cta-0-subform-field-cta-link-0-uri--T4keMXkYS20').click();
    // await page.locator('#edit-settings-block-form-field-card-0-subform-field-cta-0-subform-field-cta-link-0-uri--T4keMXkYS20').fill('https://asu.edu');
    // await page.locator('#edit-settings-block-form-field-card-0-subform-field-cta-0-subform-field-cta-link-0-uri--T4keMXkYS20').press('Tab');
    // await page.locator('#edit-settings-block-form-field-card-0-subform-field-cta-0-subform-field-cta-link-0-title--ZLhhrnuVXRk').press('Tab');
    // await page.locator('#edit-settings-block-form-field-card-0-subform-field-cta-0-subform-field-cta-link-0-title--ZLhhrnuVXRk').click();
    // await page.locator('#edit-settings-block-form-field-card-0-subform-field-cta-0-subform-field-cta-link-0-title--ZLhhrnuVXRk').fill('CTA 1');
    // await page.getByLabel('Required Style').selectOption('btn-default btn-maroon btn');
    // await page.getByRole('button', { name: 'Add CTA' }).click();
    // await page.locator('#edit-settings-block-form-field-card-0-subform-field-cta-secondary-0-subform-field-cta-link-0-uri--eVm7aZQ5wO0').click();
    // await page.locator('#edit-settings-block-form-field-card-0-subform-field-cta-secondary-0-subform-field-cta-link-0-uri--eVm7aZQ5wO0').fill('https://asu.edu');
    // await page.locator('#edit-settings-block-form-field-card-0-subform-field-cta-secondary-0-subform-field-cta-link-0-title--IDHHoK3rzuY').click();
    // await page.locator('#edit-settings-block-form-field-card-0-subform-field-cta-secondary-0-subform-field-cta-link-0-title--IDHHoK3rzuY').fill('CTA 2');
    // await page.getByRole('textbox', { name: 'URL', exact: true }).click();
    // await page.getByRole('textbox', { name: 'URL', exact: true }).fill('https://asu.edu');
    // await page.locator('#edit-settings-block-form-field-card-0-subform-field-link-0-title--pAHnk3bekMQ').click();
    // await page.locator('#edit-settings-block-form-field-card-0-subform-field-link-0-title--pAHnk3bekMQ').fill('ASU');
    // await page.getByText('Show borders').click();
    // await page.getByRole('button', { name: 'Add block' }).click();
    // await expect(page.getByText('Card image and content').first()).toBeVisible();

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click({ force: true });


    // after the redirect to /basic-page

  });

  // test('edit', async () => {
  //   await drupal.visitLayoutBuilderForNode(page);

  //   await drupal.addAppearanceSettings(page, MACHINE_NAME);

  //   // after the redirect to /basic-page
  // });
});
