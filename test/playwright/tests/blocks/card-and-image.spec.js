import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal.helpers';

const BLOCK = 'Card and Image';
const MACHINE_NAME = 'card-and-image';

test.describe(`${BLOCK} block tests`, { tag: ['@webspark', '@desktop', '@block'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;
  let pageUrl;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.consent(page);
    await drupal.setConfigs();
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
    await page.getByRole('link', { name: 'Add block in Content, First region' }).click();
    await page.getByRole('link', { name: 'Create content block' }).click();
    await page.getByRole('link', { name: BLOCK, exact: true }).click();
    await page.getByRole('textbox', { name: 'Required Block admin title' }).fill(MACHINE_NAME);

    //--- Begin custom test steps
    await drupal.addMediaField(page);
    await page.getByRole('textbox', { name: 'Heading' }).fill('Block heading');
    await page.getByLabel('Rich Text Editor').getByRole('textbox').fill('Block content');
    await page.getByRole('button', { name: 'Add CTA' }).click();
    await page.getByRole('textbox', { name: 'URL' }).fill('https://asu.edu');
    await page.getByRole('textbox', { name: 'Link text' }).fill('Block CTA');
    await page.getByRole('combobox', { name: 'Select a target' }).selectOption({ label: 'New window (_blank)' });
    await page.getByRole('combobox', { name: 'Required Style' }).selectOption({ label: 'Maroon' });
    await page.getByRole('checkbox', { name: 'Show borders' }).setChecked(true);
    await page.locator('.fip-icon-down-dir').first().click();
    await page.getByTitle('Pyramid,ASUAwesome,Shapes,').first().click();
    await page.getByRole('combobox', { name: 'Required Content Position' }).selectOption({ label: 'Right' });
    await page.getByRole('button', { name: 'Add block' }).click();

    // Parallax variant
    await page.getByRole('link', { name: 'Add block in Content, First region' }).click();
    await page.getByRole('link', { name: 'Create content block' }).click();
    await page.getByRole('link', { name: BLOCK, exact: true }).click();
    await page.getByRole('textbox', { name: 'Required Block admin title' }).fill(MACHINE_NAME);
    await drupal.addMediaField(page);
    await page.getByRole('checkbox', { name: 'Parallax' }).setChecked(true);
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const block = page.locator('.uds-card-and-image');
    const icon = page.getByTestId('card-icon');
    const heading = page.getByText('Block heading', { exact: true });
    const content = page.getByText('Block content', { exact: true });
    const cta = page.getByRole('link', { name: 'Block CTA', exact: true });
    const image = page.getByRole('img', { name: 'test' });

    await expect(block.first()).toHaveCSS('background-image', /Hero-DreamscapeLearn-2022.jpeg/);
    await expect(block.first()).toHaveClass(/uds-card-and-image-right/);
    await expect(icon).toBeVisible();
    await expect(heading).toBeVisible();
    await expect(content).toBeVisible();
    await expect(cta).toBeVisible();
    await expect(cta).toHaveClass(/btn-maroon/);
    await expect(cta).toHaveAttribute('href', 'https://asu.edu');
    await expect(cta).toHaveAttribute('target', '_blank');

    // Parallax variant
    await expect(block.last()).toHaveClass(/parallax-container-content/);
    await expect(image).toBeVisible();

    // Check the parallax effect is working
    const initialPosition = await image.evaluate((img) => img.style.top);
    await page.evaluate(() => window.scrollTo(0, window.innerHeight / 2));
    await page.waitForTimeout(100);
    const scrolledPosition = await image.evaluate((img) => img.style.top);
    expect(initialPosition).not.toEqual(scrolledPosition);
  });
});
