import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal.helpers';

test.describe('accordion block tests', { tag: '@webspark' }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;

  test.beforeAll(async ({ browser }) => {
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
    await page.getByRole('link', { name: 'Add block in Top, First region' }).click();
    await page.getByRole('link', { name: 'Create content block' }).click();
    await page.getByRole('link', { name: 'Accordion', exact: true }).click();
    await page.getByLabel('Required Block admin title').click();
    await page.getByLabel('Required Block admin title').fill('Accordion');
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
    await page.getByRole('link', { name: 'Layout' }).first().click();
    await page.getByLabel('First region in Top').getByRole('button', { name: 'Open configuration options' }).click({ force: true });
    await page.getByRole('link', { name: 'Configure', exact: true }).click();
    await page.getByLabel('Required Color Options').selectOption('accordion-item-maroon');
    await page.locator('.fip-icon-down-dir').first().click();
    await page.locator('.field--widget-fontawesome-iconpicker-widget').getByTitle('Arizona,ASUAwesome,D_arizona').first().click();
    await page.getByLabel('Initially Expanded').check();
    await page.getByRole('button', { name: 'Appearance Settings' }).click();
    await page.getByLabel('Anchor menu title').click();
    await page.getByLabel('Anchor menu title').fill('Anchor accordion');
    await page.getByLabel('Spacing top').selectOption('spacing-top-8');
    await page.getByLabel('Spacing bottom').selectOption('spacing-bottom-16');
    await page.getByRole('button', { name: 'Update' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click({ force: true });

    // after the redirect to /basic-page
    await expect(page.getByLabel('First region in Top').getByText('Accordion content')).toBeVisible();
    await expect(page.locator('.accordion-item.accordion-item-maroon')).toBeVisible();
    await expect(page.locator('.accordion-item .accordion-icon')).toBeVisible();
    await expect(page.locator('.spacing-top-8.spacing-bottom-16.block-inline-blockaccordion')).toHaveCount(1);
    await expect(page.locator('.webspark-anchor-link-data')).toHaveAttribute('data-title', 'Anchor accordion');
  });
});
