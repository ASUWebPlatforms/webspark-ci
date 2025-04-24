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
    await page.waitForTimeout(3000);
    await page.locator('[id="\\31 342"] i').first().click();
    await page.waitForTimeout(3000);
    await page.locator('[id="\\31 352"] i').first().click();
    await page.waitForTimeout(3000);
    await page.getByRole('treeitem', { name: 'SDA Operations And Facilities' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('treeitem', { name: 'Nicolas Camillo, ncamillo,' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('treeitem', { name: 'Kim Edwards, kedward2, SDA' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('treeitem', { name: 'Rick Irwin, rirwin2, SDA' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('treeitem', { name: 'Jumaane Parnell, jparnell,' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('treeitem', { name: 'Deborah Thayer, dfarren, SDA' }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('checkbox', { name: 'Disable alphabetical filter' }).check();
    await page.getByRole('checkbox', { name: 'Display as grid' }).check();
    await page.getByRole('checkbox', { name: 'Use pager' }).uncheck();
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const listView = page.getByRole('button', { name: 'List view' });
    const profile = page.locator('.uds-person-profile').first();
    const person = page.locator('.person-name').first();

    await expect(profile).toHaveClass(/uds-grid-profile/);
    await expect(person).toContainText('Nicolas Camillo');
    await listView.click();
    await page.getByLabel('Sort by').selectOption({ label: 'Last Name (descending)' });
    await page.waitForTimeout(3000);
    await expect(profile).not.toHaveClass(/uds-grid-profile/);
    await expect(person).toContainText('Deborah Thayer');
  });
});
