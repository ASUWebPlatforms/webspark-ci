import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Web Directory';
const TYPE = 'Departments';

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
    await page.waitForTimeout(1000);
    await page.locator('[id="\\31 342"] i').first().click();
    await page.waitForTimeout(3000);
    await page.getByRole('treeitem', { name: 'Office of University Provost' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Filter by campus' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('treeitem', { name: 'ASU at Tempe : TEMPE' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Filter by expertise areas' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('treeitem', { name: 'Biochemistry', exact: true }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Filter by employee type' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('treeitem', { name: 'Faculty', exact: true }).click();
    await page.waitForTimeout(1000);
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const person = page.getByText('Anne Jones');

    await expect(person).toBeVisible();
  });
});
