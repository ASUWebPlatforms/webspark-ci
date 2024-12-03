import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal.helpers';

test.describe('', { tag: '@webspark' }, () => {
  test.beforeEach('setup', async ({ page }) => {
    await drupal.visitLayoutBuilder(page);
  });

  test('create', async ({ page }) => {
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
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify create', async ({ page }) => {
    // visit the page where i just created the block
    await expect(page.getByRole('button', { name: 'Accordion heading', exact: true })).toBeVisible();
    await page.getByRole('button', { name: 'Accordion heading', exact: true }).click();
    await expect(page.getByText('Accordion content')).toBeVisible();
  });

  test('edit', async ({ page }) => {
    // select the block you just created
    // edit the block
    // save
    // ensure block is visible
    // drag and drop it to a new location on the page
  });

  test('delete', async ({ page }) => {
    // select the block you just created
    // delete the block
    // ensure block is not visible
  });

  test('anchor menu', async ({ page }) => {
    // add the anchor menu options
    // save
    // ensure the adequate markup is present
    // note, it is not the responsibility of the test to validate the anchor menu functionality here
    // only that the block itself provides the data to the anchor menu
  });
});
