import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal.helpers';

const BLOCK = '';
const MACHINE_NAME = '';

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

    // example steps
    await page.getByRole('textbox', { name: 'Heading' }).click();
    await page.getByRole('textbox', { name: 'Heading' }).fill('Example heading');
    await page.getByLabel('Rich Text Editor').getByRole('paragraph').click();
    await page.getByLabel('Rich Text Editor').getByRole('paragraph').fill('Example content');
    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click({ force: true });

    // after the redirect to the front end
    await expect(page.getByText('Example heading')).toBeVisible();
    await expect(page.getByText('Example content')).toBeVisible();
  });

  test('edit', async () => {
    await drupal.visitLayoutBuilderForNode(page);
    await drupal.addAppearanceSettings(page, MACHINE_NAME);

    // after the redirect to /basic-page
  });

  test('data layer', async () => {
    // check the data layer object
  });
});
