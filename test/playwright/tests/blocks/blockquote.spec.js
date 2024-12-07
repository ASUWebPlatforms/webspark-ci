import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal.helpers';

const BLOCK = 'Blockquote';
const MACHINE_NAME = 'blockquote';

test.describe(`${BLOCK} block tests`, { tag: '@webspark' }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.visitLayoutBuilder(page);
    await drupal.removeElement(page, '.cookie-consent-component');
  });

  test.afterAll('cleanup', async () => {
    await page.getByRole('link', { name: 'Layout' }).first().click();
    await drupal.removeBlock(page);
    await page.close();
  });

  test('create', async () => {
    await drupal.addBlock(page, BLOCK);
    await page.getByRole('textbox', { name: 'Heading' }).click();
    await page.getByRole('textbox', { name: 'Heading' }).fill('Heading');
    await page.getByLabel('Editor editing area: main').click();
    await page.getByLabel('Citation author').click();
    await page.getByLabel('Citation author').fill('Blockquote author');
    await page.getByLabel('Citation Title').click();
    await page.getByLabel('Citation Title').fill('Blockquote author title');
    await page.getByRole('button', { name: 'Add media' }).click();
    await page.locator('article').filter({ hasText: 'Hero-DreamscapeLearn-2022.jpeg' }).getByRole('img').click();
    await page.getByRole('button', { name: 'Insert selected' }).click();
    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click({ force: true });

    // after the redirect to /basic-page
    await expect(page.getByText('Heading')).toBeVisible();
    await expect(page.getByText('Blockquote content')).toBeVisible();
    await expect(page.getByText('Blockquote author', { exact: true })).toBeVisible();
    await expect(page.getByText('Blockquote author title')).toBeVisible();
    await expect(page.getByRole('img', { name: 'test' })).toBeVisible();
  });

  test('edit', async () => {
    await drupal.visitLayoutBuilderForNode(page);
    await page.getByLabel('Required Accent Color').selectOption('accent-gold');
    await page.getByLabel('Required Text Color').selectOption('text-white');
    await page.getByLabel('Heading Highlight').selectOption('highlight-gold');
    await page.locator('#edit-settings-block-form-field-blockquote-0-subform-field-image-position--LV38YQ99hSE').getByText('Right').click();
    await page.getByRole('button', { name: 'Update' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click({ force: true });
    await drupal.checkAppearanceSettings(page, MACHINE_NAME);

    // after the redirect to /basic-page
  });
});
