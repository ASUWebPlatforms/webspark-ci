import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Web Directory';
const TYPE = 'People in departments';

test.describe(`${BLOCK} (${TYPE}) tests`, { tag: ['@webspark', '@desktop', '@webdirectory'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;
  let pageUrl;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.consent(page);
    await drupal.toggleUniversalGTM();
    await drupal.loginAsAdmin(page);
    pageUrl = await drupal.createPage(page, `${BLOCK} (${TYPE})`);
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
    await page.getByLabel('Required Component type').selectOption({ label: TYPE });
    // await page.getByRole('checkbox', { name: 'Disable alphabetical filter' }).check();
    // await page.getByRole('checkbox', { name: 'Display as grid' }).check();
    // await page.getByRole('checkbox', { name: 'Use page' }).uncheck();
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {

  });
});
