import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Card Arrangement';
const TYPE = 'Ranking';

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
    await page.getByLabel('Required Columns to Display').selectOption({ label: 'Two Columns' });
    await page.getByRole('button', { name: 'Cards' }).click();

    // Add Cards
    await page.getByRole('button', { name: 'Add Card Group Ranking' }).click();
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Required Heading' }).fill('Card heading');
    await page.getByRole('combobox', { name: 'Required Card Ranking Image Size' }).selectOption({ label: 'Small' });
    await drupal.addMediaField(page);
    await page.getByRole('textbox', { name: 'Citation' }).fill('Card citation');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').fill('Card content');
    await page.getByRole('textbox', { name: 'Link' }).fill('https://asu.edu');

    await page.getByRole('button', { name: 'Add Card Ranking' }).click();
    await page.getByRole('textbox', { name: 'Required Heading' }).nth(1).fill('Card heading 2');
    await page.getByRole('combobox', { name: 'Required Card Ranking Image Size' }).nth(1).selectOption({ label: 'Large' });
    await drupal.addMediaField(page, 1);
    await page.getByLabel('Rich Text Editor').getByRole('textbox').nth(1).fill('Card content 2');
    await page.getByRole('textbox', { name: 'Link' }).nth(1).fill('https://asu.edu');
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const cards = page.locator('.card-ranking');
    const imgs = page.locator('.uds-img');
    const heading = page.getByRole('heading', { name: 'Card heading', exact: true });
    const btn = page.getByRole('button', { name: 'Card heading', exact: true });
    const heading2 = page.getByRole('button', { name: 'Card heading 2', exact: true });
    const citation = page.getByText('Card citation');
    const content = page.getByText('Card content', { exact: true });
    const content2 = page.getByText('Card content 2', { exact: true });
    const link = page.getByRole('link', { name: 'Read more Card heading', exact: true });

    await expect(cards.nth(0)).toHaveClass(/small-image/);
    await expect(cards.nth(1)).toHaveClass(/large-image/);
    await expect(imgs).toHaveCount(2);
    await expect(heading).toBeVisible();
    await expect(heading2).toBeVisible();
    await expect(citation).toBeVisible();
    await expect(content).toBeVisible();
    await expect(content2).toBeHidden();

    // Interactions
    await expect(link).toBeHidden();
    await btn.click();
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', 'https://asu.edu');
    await heading2.click();
    await expect(content2).toBeVisible();
  });
});
