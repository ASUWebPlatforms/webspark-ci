import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'News';

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
    await page.getByRole('textbox', { name: 'Feed taxonomy term', exact: true }).fill('biodesign_center_for_bioenergetics');
    // Will write a test for this when I figure out how this filter works
    // await page.getByRole('textbox', { name: 'Feed Filter', exact: true }).fill('');
    await page.getByRole('textbox', { name: 'Heading', exact: true }).fill('Block heading');
    await page.getByRole('combobox', { name: 'Required Heading Text Color' }).selectOption({ label: 'White' });
    await page.getByRole('textbox', { name: 'URL' }).fill('https://asu.edu');
    await page.getByRole('textbox', { name: 'Link text' }).fill('Block CTA');
    // This will have no effect if using the CTA instead, this is the default CTA
    await page.getByRole('combobox', { name: 'Required Heading CTA Color' }).selectOption({ label: 'Maroon' });
    await page.getByRole('combobox', { name: 'Required Card CTA Color' }).selectOption({ label: 'Gold' });
    await page.getByRole('combobox', { name: 'Required Display' }).selectOption({ label: 'Horizontal' });
    await page.getByRole('spinbutton', { name: 'Items to Display' }).fill('8');
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const heading = page.getByText('Block heading', { exact: true });
    const cta = page.getByRole('link', { name: 'Block CTA', exact: true });
    const news = page.getByTestId('list-view-container').locator('.card.card-hover');

    await expect(heading).toBeVisible();
    await expect(heading).toHaveClass('text-white');
    await expect(cta).toHaveClass(/btn-maroon/);
    await expect(cta).toHaveAttribute('href', 'https://asu.edu');
    await expect(news).toHaveCount(8);
    await expect(news.first()).toHaveClass(/card/);
    await expect(news.first()).toHaveClass(/card-hover/);
  });
});
