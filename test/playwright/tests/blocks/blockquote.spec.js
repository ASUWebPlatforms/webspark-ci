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
    await page.getByLabel('Required Accent Color').selectOption('accent-gold');
    await page.getByLabel('Rich Text Editor').getByRole('paragraph').click();
    await page.getByLabel('Rich Text Editor').getByRole('paragraph').fill('Blockquote content');
    await page.getByLabel('Citation author').click();
    await page.getByLabel('Citation author').fill('Blockquote author');
    await page.getByLabel('Citation Title').click();
    await page.getByLabel('Citation Title').fill('Blockquote author title');
    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click({ force: true });

    // after the redirect to /basic-page
    await expect(page.locator('.uds-blockquote')).toHaveClass(/accent-gold/);
    await expect(page.getByText('Blockquote content')).toBeVisible();
    await expect(page.getByText('Blockquote author', { exact: true })).toBeVisible();
    await expect(page.getByText('Blockquote author title')).toBeVisible();
  });

  test('edit', async () => {
    await drupal.visitLayoutBuilderForNode(page);
    await page.getByRole('textbox', { name: 'Heading' }).click();
    await page.getByRole('textbox', { name: 'Heading' }).fill('Blockquote heading');
    await page.getByLabel('Required Text Color').selectOption('text-white');
    await page.getByLabel('Heading Highlight').selectOption('highlight-gold');
    await page.locator('.form-item-settings-block-form-field-blockquote-0-subform-field-image-position > .form-check-label').getByText('Right').click();
    await page.getByRole('button', { name: 'Add media' }).click();
    await page.locator('article').filter({ hasText: 'Hero-DreamscapeLearn-2022.jpeg' }).getByRole('img').click();
    await page.getByRole('button', { name: 'Insert selected' }).click();
    await page.getByLabel('Citation Style').selectOption('alt-citation');
    await drupal.checkAppearanceSettings(page, MACHINE_NAME);

    // after the redirect to /basic-page
    await expect(page.locator('.uds-blockquote')).toHaveClass(/text-white reversed/);
    await expect(page.getByText('Blockquote heading')).toHaveClass('highlight-gold');
    await expect(page.getByText('Blockquote heading')).toBeVisible();
    await expect(page.getByRole('img', { name: 'test' })).toBeVisible();
    await expect(page.locator('.uds-blockquote .citation')).toBeVisible();
  });
});
