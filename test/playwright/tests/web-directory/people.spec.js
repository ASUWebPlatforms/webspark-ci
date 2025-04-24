import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Web Directory';
const TYPE = 'People';

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
    await page.getByRole('textbox', { name: 'Search' }).fill('Alexander Persky');
    await page.getByRole('textbox', { name: 'Search' }).press('Enter');
    await page.waitForTimeout(3000);
    await page.locator('#apersky i').click();
    await page.getByRole('treeitem', { name: 'Web Platforms Engineer' }).click();
    await page.waitForTimeout(3000);

    await page.getByRole('textbox', { name: 'Search' }).fill('Itzel Morales');
    await page.getByRole('textbox', { name: 'Search' }).press('Enter');
    await page.waitForTimeout(3000);
    await page.locator('#imorale2 i').click();
    await page.getByRole('treeitem', { name: 'Director, Web & User' }).click();
    await page.waitForTimeout(3000);

    await page.getByRole('textbox', { name: 'Search' }).fill('Michael Crow');
    await page.getByRole('textbox', { name: 'Search' }).press('Enter');
    await page.waitForTimeout(3000);
    await page.locator('#mcrow i').click();
    await page.getByRole('treeitem', { name: 'President & Professor, Office' }).click();
    await page.waitForTimeout(3000);

    await page.getByLabel('Required Default sort').selectOption({ label: 'Sort by order people added' });
    await page.getByRole('spinbutton', { name: 'Profiles per page' }).fill('1');
    await page.getByRole('textbox', { name: 'Don\'t display profiles' }).fill('apersky');
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const gridView = page.getByRole('button', { name: 'Grid view' });
    const listView = page.getByRole('button', { name: 'List view' });
    const sortText = page.getByText('Sort by');
    const filterText = page.getByText('Filter By Last Initial');
    const filter = page.getByRole('radio', { name: 'Filter by A' });
    const filterReset = page.getByRole('radio', { name: 'Reset Filter By Last Initial' });
    const next = page.getByRole('button', { name: 'Next Page' });
    const prev = page.getByRole('button', { name: 'Previous Page' });
    const page2 = page.getByRole('button', { name: 'Page 2 of' });
    const profile = page.locator('.uds-person-profile');
    const itzelLink = page.getByRole('link', { name: 'Itzel Morales Lizarraga' }).first();
    const itzel = page.getByText('Itzel Morales Lizarraga');
    const role = page.getByRole('heading', { name: 'Director, Web & User' });
    const department = page.getByText('Enterprise Technology');
    const email = page.getByRole('link', { name: 'Mail to :Itzel.Morales@asu.edu' });
    const building = page.getByText('USB');
    const location = page.getByText('Tempe AZ');
    const social = page.getByRole('link', { name: 'Go to user Linkedin profile' });
    const envelope = page.locator('.fa-envelope');
    const crow = page.getByText('Michael Crow');

    // Elements
    await expect(gridView).toBeVisible();
    await expect(listView).toBeVisible();
    await expect(sortText).toBeVisible();
    await expect(filterText).toBeVisible();
    await expect(page2).toBeVisible();
    await expect(profile).not.toHaveClass(/uds-grid-profile/);

    // Profile
    await expect(itzelLink).toBeVisible();
    await expect(role).toBeVisible();
    await expect(department).toBeVisible();
    await expect(email).toBeVisible();
    await expect(building).toBeVisible();
    await expect(location).toBeVisible();
    await expect(social).toBeVisible();

    // Interactions
    await next.click();
    await expect(crow).toBeVisible();
    await prev.click();
    await expect(itzel).toBeVisible();
    await filter.click();
    await expect(itzel).toBeHidden();
    await filterReset.click();
    await expect(itzel).toBeVisible();

    // Grid view
    await gridView.click();
    await expect(profile).toHaveClass(/uds-grid-profile/);
    await expect(social).toBeHidden();
    await expect(building).toBeHidden();
    await expect(location).toBeHidden();
    await expect(envelope).toBeVisible();
  });
});
