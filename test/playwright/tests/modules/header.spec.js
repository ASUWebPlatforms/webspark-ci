// The header and menu should alreayd be setup before running this test
import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const links = [
  { name: 'ASU Home', url: 'https://asu.edu' },
  { name: 'My ASU', url: 'https://my.asu.edu' },
  { name: 'Colleges and Schools', url: 'https://www.asu.edu/academics/colleges-schools' },
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
    await expect(page.getByRole('link', { name: 'Skip to main content' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Report an accessibility problem' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Arizona State University.' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Parent Unit' })).toHaveAttribute('href', 'https://asu.edu');
    await expect(page.getByTestId('title').getByRole('link', { name: 'Playwright Test Site' })).toHaveAttribute('href', 'https://asu.edu');
    await expect(page.getByRole('link', { name: 'Playwright Test Site home page' })).toHaveAttribute('href', '/');
    await expect(page.locator('.fa-house')).toBeVisible();
    await expect(page.getByRole('link', { name: 'CTA 1' })).toHaveAttribute('href', 'https://asu.edu');
    await expect(page.getByRole('link', { name: 'CTA 1' })).toHaveClass(/button-maroon/);

    for (const link of links) {
      await expect(page.getByTestId('universal-navbar').getByRole('link', { name: link.name, exact: true })).toHaveAttribute('href', link.url);
    }
    await expect(page.getByTestId('search-button')).toBeVisible();
  });

  test('verify menu', async () => {
    const standard = page.getByTestId('navigation').getByRole('link', { name: 'Standard' });
    const dropdownButton = page.getByRole('link', { name: 'Drop down', exact: true });
    const megaButton = page.getByRole('link', { name: 'Mega', exact: true });
    const dropdown = page.locator('.dropdown-2');
    const mega = page.locator('.dropdown-3');

    await expect(standard).toBeVisible();
    await expect(standard).toHaveAttribute('href', 'https://asu.edu');
    await expect(dropdown).toBeHidden();
    await expect(mega).toBeHidden();

    await dropdownButton.click();
    await expect(page.getByRole('link', { name: 'First level', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Second level', exact: true })).toBeHidden();

    await megaButton.click();
    await expect(page.getByRole('heading', { name: 'Column 1', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Column 2', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Column 3', exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Stacked Heading', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Link', exact: true })).toHaveCount(5);
    await expect(page.getByRole('link', { name: 'Break', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Button', exact: true })).toHaveClass(/button-dark/);
    await expect(page.getByRole('link', { name: 'Tray Button', exact: true })).toHaveClass(/button-gold/);
  });

  test('verify partner', async () => {
    const link = page.getByTestId('partner').getByRole('link', { name: 'Partner Logo' });
    const img = page.getByTestId('partner').getByRole('img', { name: 'Partner Logo' });

    await page.goto('/admin/structure/block/manage/asubrandheader?destination=/admin/structure/block');
    await page.getByRole('button', { name: 'ASU Partner Header' }).click();
    await page.getByRole('checkbox', { name: 'Is Partner?' }).check();
    await page.getByRole('textbox', { name: 'Partner URL *' }).fill('https://asu.edu');
    await page.getByRole('textbox', { name: 'Partner Logo URL *' }).fill('https://placehold.co/400');
    await page.getByRole('textbox', { name: 'Partner Logo Alt *' }).fill('Partner Logo');
    await page.getByRole('button', { name: 'Save block' }).click();

    await page.goto('/');
    await expect(link).toHaveAttribute('href', 'https://asu.edu');
    await expect(img).toBeVisible();
  });
});
