import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Card Arrangement';
const TYPE = 'Default';

test.describe(`${BLOCK} (${TYPE}) tests`, { tag: ['@webspark', '@desktop', '@cards'] }, () => {
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
    await page.getByRole('button', { name: 'Main Content *' }).click();
    await page.getByRole('textbox', { name: 'Heading', exact: true }).fill('Block heading');
    await page.getByRole('combobox', { name: 'Required Text Color' }).selectOption({ label: 'White' });
    await page.getByRole('textbox', { name: 'URL' }).fill('https://asu.edu');
    await page.getByRole('textbox', { name: 'Link text' }).fill('Block CTA');
    await page.getByRole('combobox', { name: 'Select a target' }).selectOption({ label: 'New window (_blank)' });
    await page.getByRole('combobox', { name: 'Required Style' }).selectOption({ label: 'Maroon' });
    await page.getByLabel('Required Columns to Display').selectOption({ label: 'Two Columns' });

    // Add Cards
    await page.getByRole('button', { name: 'Cards' }).click();
    await page.getByRole('button', { name: 'Add Card Group Default' }).click();
    await page.waitForTimeout(1000);
    await drupal.addMediaField(page);
    await page.getByRole('textbox', { name: 'Heading' }).nth(1).fill('Card heading');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').nth(1).fill('Card content');

    await page.getByRole('button', { name: 'Add CTA' }).nth(0).click();
    await page.waitForTimeout(3000);
    await page.getByRole('group', { name: 'CTA' }).getByLabel('URL').nth(1).fill('https://asu.edu');
    await page.getByRole('group', { name: 'CTA' }).getByLabel('Link text').nth(1).fill('Card CTA');
    await page.getByRole('group', { name: 'CTA' }).getByLabel('Select a target').nth(1).selectOption({ label: 'New window (_blank)' });
    await page.getByRole('group', { name: 'CTA' }).getByLabel('Required Style').nth(1).selectOption({ label: 'Maroon' });

    await page.getByRole('button', { name: 'Add CTA' }).nth(0).click();
    await page.waitForTimeout(1000);
    await page.getByRole('group', { name: 'CTA' }).getByLabel('URL').nth(2).fill('https://asu.edu');
    await page.getByRole('group', { name: 'CTA' }).getByLabel('Link text').nth(2).fill('Card CTA');
    await page.getByRole('group', { name: 'CTA' }).getByLabel('Select a target').nth(2).selectOption({ label: 'New window (_blank)' });

    await page.getByRole('group', { name: 'Link' }).getByLabel('URL').fill('https://asu.edu');
    await page.getByRole('group', { name: 'Link' }).getByLabel('Link text').fill('Card link');
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const div = page.locator('.uds-card-arrangement-content-container');
    const cols = page.locator('.uds-card-arrangement-card-container');
    const blockHeading = page.getByText('Block heading', { exact: true });
    const blockCta = page.getByRole('link', { name: 'Block CTA', exact: true });
    const cardImg = page.getByTestId('card-image');
    const cardHeading = page.getByText('Card heading', { exact: true });
    const cardContent = page.getByText('Card content', { exact: true });
    const cardCta = page.getByRole('link', { name: 'Card CTA', exact: true });
    const cardLink = page.getByRole('link', { name: 'Card link' });

    await expect(div).toHaveClass(/text-white/);
    await expect(cols).toHaveClass(/two-columns/);
    await expect(blockHeading).toBeVisible();
    await expect(blockCta).toHaveClass(/btn-maroon/);
    await expect(blockCta).toHaveAttribute('href', 'https://asu.edu');
    await expect(blockCta).toHaveAttribute('target', '_blank');

    await expect(cardImg).toBeVisible();
    await expect(cardHeading).toBeVisible();
    await expect(cardContent).toBeVisible();
    await expect(cardCta.first()).toBeVisible();
    await expect(cardCta.first()).toHaveClass(/btn-maroon/);
    await expect(cardCta.first()).toHaveAttribute('href', 'https://asu.edu');
    await expect(cardCta.first()).toHaveAttribute('target', '_blank');
    await expect(cardCta.nth(1)).toBeVisible();
    await expect(cardLink).toBeVisible();
    await expect(cardLink).toHaveAttribute('href', 'https://asu.edu');
  });
});
