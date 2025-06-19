import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Events';

test.describe(`${BLOCK} block tests`, { tag: ['@webspark', '@desktop', '@blocks'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;
  let pageUrl;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.consent(page);
    await drupal.toggleUniversalGTM();
    await drupal.loginAsAdmin(page);
    pageUrl = await drupal.createPage(page, BLOCK);
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
    // Don't really have a concrete way to test the taxonomy and filter yet, as those are very dynanic
    await page.getByRole('combobox', { name: 'Required Items to Display' }).selectOption({ label: 'Three' });
    await page.getByRole('textbox', { name: 'Heading', exact: true }).fill('Block heading');
    await page.getByRole('combobox', { name: 'Header Text Color' }).selectOption({ label: 'White' });
    await page.getByRole('textbox', { name: 'URL' }).fill('https://asu.edu');
    await page.getByRole('textbox', { name: 'Link text' }).fill('Block CTA');
    await page.getByRole('combobox', { name: 'Required Header CTA color' }).selectOption({ label: 'Maroon' });
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const heading = page.getByText('Block heading', { exact: true });
    const cta = page.getByRole('link', { name: 'Block CTA', exact: true });
    const events = page.getByTestId('list-view-container').getByRole('listitem');

    await expect(heading).toBeVisible();
    await expect(heading).toHaveClass('text-white');
    await expect(cta).toHaveClass(/btn-maroon/);
    await expect(cta).toHaveAttribute('href', 'https://asu.edu');
    await expect(events).toHaveCount(3);
  });
});
