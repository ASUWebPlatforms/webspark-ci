import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const links = [
  { name: 'ASU Home', url: 'https://asu.edu' },
  { name: 'My ASU', url: 'https://my.asu.edu' },
  { name: 'Colleges and Schools', url: 'https://www.asu.edu/academics/colleges-schools' },
  { name: 'Sign In', url: 'https://dev-webspark-release-testing.ws.asu.edu/caslogin?returnto=' },
];

test.describe('header tests', { tag: ['@webspark', '@desktop'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.loginAsAdmin(page);
  });

  test.beforeEach(async () => {
    await page.goto('/');
  });

  test.afterAll('cleanup', async () => {
    await page.close();
  });

  test('verify default', async () => {
    await page.goto('/admin/structure/block/manage/asubrandheader?destination=/admin/structure/block');
    await page.getByRole('textbox', { name: 'Site title *' }).fill('Playwright Test Site');
    await page.getByRole('textbox', { name: 'Site URL' }).fill('https://asu.edu');
    await page.getByRole('textbox', { name: 'Parent unit name' }).fill('Parent Unit');
    await page.getByRole('textbox', { name: 'Parent department URL *' }).fill('https://asu.edu');

    await page.getByRole('button', { name: 'Call To Action buttons' }).click();
    await page.locator('#edit-settings-cta-cta1-asu-brand-header-block-cta1-label').fill('CTA 1');
    await page.getByRole('textbox', { name: 'URL target *' }).fill('https://asu.edu');
    await page.locator('#edit-settings-cta-cta1-asu-brand-header-block-cta1-style').selectOption('maroon');
    await page.locator('#edit-settings-cta-cta2-asu-brand-header-block-cta2-label').fill('CTA 2');
    await page.locator('#edit-settings-cta-cta2-asu-brand-header-block-cta2-url').fill('https://asu.edu');
    await page.getByRole('button', { name: 'Save block' }).click();

    await expect(page.getByRole('link', { name: 'Skip to main content' })).toBeHidden();
    await expect(page.getByRole('link', { name: 'Report an accessibility problem' })).toBeHidden();
    await expect(page.getByRole('link', { name: 'Arizona State University.' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Parent Unit' })).toHaveAttribute('href', 'https://asu.edu');
    await expect(page.getByRole('link', { name: 'Playwright Test Site' })).toHaveAttribute('href', 'https://asu.edu');
    await expect(page.getByRole('link', { name: 'Playwright Test Site home page' })).toHaveAttribute('href', '/');
    await expect(page.locator('.fa-house')).toBeVisible();
    await expect(page.getByRole('link', { name: 'CTA 1' })).toHaveAttribute('href', 'https://asu.edu');
    await expect(page.getByRole('link', { name: 'CTA 1' })).toHaveClass(/button-maroon/);
    await expect(page.getByRole('link', { name: 'CTA 2' })).toHaveAttribute('href', 'https://asu.edu');
    await expect(page.getByRole('link', { name: 'CTA 2' })).toHaveClass(/button-gold/);

    for (const link of links) {
      await expect(page.getByRole('link', { name: link.name, exact: true })).toHaveAttribute('href', link.url);
    }

    await expect(page.getByTestId('search-button')).toBeVisible();
  });

  test('verify partner', async () => {
    await page.goto('/admin/structure/block/manage/asubrandheader?destination=/admin/structure/block');
    await page.getByRole('button', { name: 'ASU Partner Header' }).click();
    await page.getByRole('checkbox', { name: 'Is Partner?' }).check();
    await page.getByRole('textbox', { name: 'Partner URL *' }).fill('https://asu.edu');
    await page.getByRole('textbox', { name: 'Partner Logo URL *' }).fill('https://asu.edu');
    await page.getByRole('textbox', { name: 'Partner Logo Alt *' }).fill('Partner Logo');
    await page.getByRole('button', { name: 'Save block' }).click();

    await expect(page.getByRole('img', { name: 'Partner Logo' })).toBeVisible();
    await expect(page.getByTestId('partner').getByRole('link', { name: 'Partner Logo' })).toHaveAttribute('href', 'https://asu.edu');
  });

  test('verify menu', async () => {
    await page.goto('/admin/structure/menu/manage/main');
    await page.getByRole('link', { name: '+Add link' }).click();
    await page.getByRole('textbox', { name: 'Menu link title *' }).click();
    await page.getByRole('textbox', { name: 'Menu link title *' }).fill('Link');
    await page.getByRole('textbox', { name: 'Link *' }).click();
    await page.getByRole('textbox', { name: 'Link *' }).fill('<nolink>');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('link', { name: '+Add link' }).click();
    await page.getByRole('textbox', { name: 'Menu link title *' }).click();
    await page.getByRole('textbox', { name: 'Menu link title *' }).fill('Link');
    await page.getByRole('textbox', { name: 'Link *' }).click();
    await page.getByRole('textbox', { name: 'Link *' }).fill('<nolink>');
    await page.getByLabel('ASU Brand menu link type').selectOption('heading');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: 'Save' }).click();
  });
});
