import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal.helpers';

const BLOCK = 'Accordion';
const MACHINE_NAME = 'accordion';

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
    await page.getByRole('textbox', { name: 'Heading' }).fill('Accordion heading');
    await page.getByLabel('Rich Text Editor').getByRole('paragraph').click();
    await page.getByLabel('Rich Text Editor').getByRole('paragraph').fill('Accordion content');
    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click({ force: true });

    // after the redirect to /basic-page
    await expect(page.getByRole('button', { name: 'Accordion heading', exact: true })).toBeVisible();
    await page.getByRole('button', { name: 'Accordion heading', exact: true }).click();
    await expect(page.getByText('Accordion content')).toBeVisible();
  });

  test('edit', async () => {
    await drupal.visitLayoutBuilderForNode(page);
    await page.getByLabel('Required Color Options').selectOption('accordion-item-maroon');
    await page.locator('.fip-icon-down-dir').first().click();
    await page.locator('.field--widget-fontawesome-iconpicker-widget').getByTitle('Arizona,ASUAwesome,D_arizona').first().click();
    await page.getByLabel('Initially Expanded').check();
    await drupal.checkAppearanceSettings(page, MACHINE_NAME);

    // after the redirect to /basic-page
    await expect(page.getByLabel('First region in Top').getByText('Accordion content')).toBeVisible();
    await expect(page.locator('.accordion-item.accordion-item-maroon')).toBeVisible();
    await expect(page.locator('.accordion-item .accordion-icon')).toBeVisible();
  });
});
