import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Card Arrangement';
const CARD = 'Ranking';

test.describe(`${CARD} card tests`, { tag: ['@webspark', '@desktop', '@card'] }, () => {
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
    // await page.getByRole('button', { name: 'Cards' }).click();
    // await page.getByRole('button', { name: 'Add Card Group Ranking' }).click();
    // await page.getByRole('textbox', { name: 'Required Heading' }).click();
    // await page.getByRole('textbox', { name: 'Required Heading' }).fill('Card headihng');
    // await page.getByLabel('Required Card Ranking Image').selectOption('small');
    // await page.getByRole('button', { name: 'Add media' }).click();
    // await page.getByRole('checkbox', { name: 'Select Hero-DreamscapeLearn-' }).check();
    // await page.getByRole('button', { name: 'Insert selected' }).click();
    // await page.getByRole('textbox', { name: 'Citation' }).click();
    // await page.getByRole('textbox', { name: 'Citation' }).fill('Card citation');
    // await page.getByRole('textbox', { name: 'Editor editing area: main.' }).getByRole('paragraph').click();
    // await page.getByRole('textbox', { name: 'Link' }).click();
    // await page.getByRole('textbox', { name: 'Link' }).fill('https://asu.edu');
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    // .card-ranking to have count 1
    // await expect(page.getByRole('img', { name: 'test' })).toBeVisible();
    // await expect(page.getByRole('heading', { name: 'Card headihng' })).toBeVisible();
    // await expect(page.getByText('— Card citation')).toBeVisible();
    // await expect(page.getByText('Card content')).toBeVisible();
    // await expect(page.getByRole('button', { name: 'Card headihng' })).toBeVisible();
    // .card-ranking .info-layer to have css 'border-top: 0.5rem solid #ffc627'
    // await expect(page.getByRole('link', { name: 'Read more Card headihng' })).toBeHidden();
    // await page.getByRole('button', { name: 'Card headihng' }).click();
    // await expect(page.getByRole('link', { name: 'Read more Card headihng' })).toBeVisible();
  });
});
