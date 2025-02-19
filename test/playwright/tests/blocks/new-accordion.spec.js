import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal.helpers';

const BLOCK = 'Accordion';
const MACHINE_NAME = 'accordion';

test.describe(`${BLOCK} block tests`, { tag: ['@webspark', '@desktop'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.setConfigs();
    await drupal.loginAsAdmin(page);
    await drupal.createPage(page, BLOCK);
  });

  test.afterAll('cleanup', async () => {
    await page.close();
  });

  test('create', async () => {
    // Expect the block to be available
    await page.getByRole('link', { name: 'Layout' }).click();
    await page.getByRole('link', { name: 'Add block in Content, First' }).click();
    await page.getByRole('link', { name: 'Create content block' }).click();
    await expect(page.getByRole('link', { name: BLOCK })).toBeVisible();

    // Add the block
    await page.getByRole('link', { name: BLOCK }).click();
    await page.getByRole('textbox', { name: 'Required Block admin title' }).fill(MACHINE_NAME);
    await page.getByRole('textbox', { name: 'Heading' }).click();
    await page.getByRole('textbox', { name: 'Heading' }).fill('Heading');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').click();
    await page.getByLabel('Rich Text Editor').getByRole('textbox').fill('Content');
    // missing: Add the content
    // await page.getByRole('button', { name: 'Add Accordion Panel' }).click();
    // await page.getByRole('cell', { name: 'Accordion Panel Remove Required Color Options Gold Icon   Heading Formatted' }).getByLabel('Heading', { exact: true }).click();
    // await page.getByRole('cell', { name: 'Accordion Panel Remove Required Color Options Gold Icon   Heading Formatted' }).getByLabel('Heading', { exact: true }).fill('Heading 2');
    // await page.getByRole('cell', { name: 'Accordion Panel Remove Required Color Options Gold Icon   Heading Heading 2' }).getByLabel('Editor editing area: main.').click();
    // missing: Add the content

    // Save
    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('edit', async () => {});
});


// test('test', async ({ page }) => {
//   // create the page



//   await expect(page.getByRole('button', { name: 'Heading', exact: true })).toBeVisible();
//   await expect(page.locator('#accordion-header-353')).toContainText('Heading');
//   await expect(page.getByRole('button', { name: 'Heading 2' })).toBeVisible();
//   await expect(page.locator('#accordion-header-354')).toContainText('Heading 2');
//   await page.getByRole('button', { name: 'Heading 2' }).click();
//   await expect(page.getByText('Content 2')).toBeVisible();
//   await expect(page.locator('#accordion-content-354')).toContainText('Content 2');
//   await page.getByRole('link', { name: 'Layout' }).click();
//   await page.getByRole('button', { name: 'Open configuration options' }).nth(2).click();
//   await page.getByRole('link', { name: 'Configure', exact: true }).click();
//   await page.getByRole('cell', { name: 'Accordion Panel Remove Required Color Options Gold Icon   Heading Heading Formatted Text Rich Text Editor About text formats Text format Basic HTML Initially Expanded', exact: true }).getByLabel('Heading', { exact: true }).click();
//   await page.getByRole('cell', { name: 'Accordion Panel Remove Required Color Options Gold Icon   Heading Heading Formatted Text Rich Text Editor About text formats Text format Basic HTML Initially Expanded', exact: true }).getByLabel('Heading', { exact: true }).press('ArrowLeft');
//   await page.getByRole('cell', { name: 'Accordion Panel Remove Required Color Options Gold Icon   Heading Heading Formatted Text Rich Text Editor About text formats Text format Basic HTML Initially Expanded', exact: true }).getByLabel('Heading', { exact: true }).press('ArrowLeft');
//   await page.getByRole('cell', { name: 'Accordion Panel Remove Required Color Options Gold Icon   Heading Heading Formatted Text Rich Text Editor About text formats Text format Basic HTML Initially Expanded', exact: true }).getByLabel('Heading', { exact: true }).press('ArrowLeft');
//   await page.getByRole('cell', { name: 'Accordion Panel Remove Required Color Options Gold Icon   Heading Heading Formatted Text Rich Text Editor About text formats Text format Basic HTML Initially Expanded', exact: true }).getByLabel('Heading', { exact: true }).press('ArrowLeft');
//   await page.getByRole('cell', { name: 'Accordion Panel Remove Required Color Options Gold Icon   Heading Heading Formatted Text Rich Text Editor About text formats Text format Basic HTML Initially Expanded', exact: true }).getByLabel('Heading', { exact: true }).press('ArrowLeft');
//   await page.getByRole('cell', { name: 'Accordion Panel Remove Required Color Options Gold Icon   Heading Heading Formatted Text Rich Text Editor About text formats Text format Basic HTML Initially Expanded', exact: true }).getByLabel('Heading', { exact: true }).press('ArrowLeft');
//   await page.getByRole('cell', { name: 'Accordion Panel Remove Required Color Options Gold Icon   Heading Heading Formatted Text Rich Text Editor About text formats Text format Basic HTML Initially Expanded', exact: true }).getByLabel('Heading', { exact: true }).press('ArrowLeft');
//   await page.getByRole('cell', { name: 'Accordion Panel Remove Required Color Options Gold Icon   Heading Heading Formatted Text Rich Text Editor About text formats Text format Basic HTML Initially Expanded', exact: true }).getByLabel('Heading', { exact: true }).press('ArrowLeft');
//   await page.getByRole('cell', { name: 'Accordion Panel Remove Required Color Options Gold Icon   Heading Heading Formatted Text Rich Text Editor About text formats Text format Basic HTML Initially Expanded', exact: true }).getByLabel('Heading', { exact: true }).press('ArrowLeft');
//   await page.getByRole('cell', { name: 'Accordion Panel Remove Required Color Options Gold Icon   Heading Heading Formatted Text Rich Text Editor About text formats Text format Basic HTML Initially Expanded', exact: true }).getByLabel('Heading', { exact: true }).press('ArrowLeft');
//   await page.getByRole('cell', { name: 'Accordion Panel Remove Required Color Options Gold Icon   Heading Heading Formatted Text Rich Text Editor About text formats Text format Basic HTML Initially Expanded', exact: true }).getByLabel('Heading', { exact: true }).fill('New Heading');
//   await page.getByRole('cell', { name: 'Accordion Panel Remove Required Color Options Gold Icon   Heading Heading Formatted Text Rich Text Editor About text formats Text format Basic HTML Initially Expanded', exact: true }).getByLabel('Heading', { exact: true }).press('Tab');
//   await page.getByRole('cell', { name: 'Accordion Panel Remove Required Color Options Gold Icon   Heading New Heading' }).getByLabel('Required Color Options').selectOption('accordion-item-maroon');
//   await page.locator('.fip-icon-block').first().click();
//   await page.locator('.fip-icon-down-dir').first().click();
//   await page.locator('#edit-settings-block-form-field-paragraph-0-subform-field-icon-wrapper--9sK-7J3huFY').getByTitle('Cube,ASUAwesome,Shapes,1_cube').locator('svg').click();
//   await page.getByRole('checkbox', { name: 'Initially Expanded' }).check();
//   await page.getByRole('button', { name: 'Update' }).click();
//   await page.getByRole('button', { name: 'Save layout' }).click();
//   await expect(page.getByRole('button', { name: 'New Heading' })).toBeVisible();
//   await expect(page.locator('#accordion-content-353').getByText('Content')).toBeVisible();
//   await page.getByRole('link', { name: 'Layout' }).click();
//   await page.getByRole('button', { name: 'Open configuration options' }).nth(2).click();
//   await page.getByRole('link', { name: 'Configure', exact: true }).click();
//   await page.getByRole('button', { name: 'Appearance Settings' }).click();
//   await page.getByLabel('Spacing top').selectOption('spacing-top-8');
//   await page.getByLabel('Spacing bottom').selectOption('spacing-bottom-8');
//   await page.getByRole('button', { name: 'Update' }).click();
//   await page.getByRole('button', { name: 'Save layout' }).click();
// });
