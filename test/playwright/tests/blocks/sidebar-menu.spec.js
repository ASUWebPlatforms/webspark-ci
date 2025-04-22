import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Sidebar Menu';

test.describe(`${BLOCK} block tests`, { tag: ['@webspark', '@desktop', '@block'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;
  let pageUrl;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.consent(page);
    await drupal.toggleUniversalGTM();
    await drupal.loginAsAdmin(page);
    pageUrl = await drupal.createPage(page, BLOCK);

    // Create the menu
    await page.goto('/admin/structure/menu/add');
    await page.getByRole('textbox', { name: 'Title *' }).fill('PW Sidebar Menu');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.goto('/admin/structure/menu/manage/pw-sidebar-menu/add');
    await page.getByRole('textbox', { name: 'Menu link title *' }).fill('Home');
    await page.getByRole('textbox', { name: 'Link *' }).fill('<front>');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.goto('/admin/structure/menu/manage/pw-sidebar-menu/add');
    await page.getByRole('textbox', { name: 'Menu link title *' }).fill('PW Sidebar Menu');
    await page.getByRole('textbox', { name: 'Link *' }).fill('/playwright-sidebar-menu');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.goto('/admin/structure/menu/manage/pw-sidebar-menu/add');
    await page.getByRole('textbox', { name: 'Menu link title *' }).fill('Link');
    await page.getByRole('textbox', { name: 'Link *' }).fill('<nolink>');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.goto('/admin/structure/menu/manage/pw-sidebar-menu/add');
    await page.getByRole('textbox', { name: 'Menu link title *' }).fill('Sublink');
    await page.getByRole('textbox', { name: 'Link *' }).fill('<nolink>');
    await page.getByLabel('Parent link').selectOption({ label: '-- Link' });
    await page.getByRole('button', { name: 'Save' }).click();
    // Save the menu itself
    await page.getByRole('button', { name: 'Save' }).click();
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
    await page.getByRole('textbox', { name: 'Title', exact: true }).fill('Block heading');
    await page.getByRole('combobox', { name: 'Root' }).selectOption({ label: '<PW Sidebar Menu>' });
    await page.getByRole('checkbox', { name: 'Include root?' }).check();
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {

  });
});
