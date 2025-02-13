import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal.helpers';

const BLOCK = 'Donut Chart';

test.describe(`${BLOCK} block tests`, { tag: ['@webspark', '@desktop'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.visitLayoutBuilder(page);
    await drupal.removeElement(page, '.cookie-consent-component');
  });

  test.afterAll('cleanup', async () => {
    await page.getByRole('link', { name: 'Layout' }).first().click();
    await drupal.removeBlock(page);
    await page.close();
  });

  test('create', async () => {
    await drupal.addBlock(page, BLOCK);
    await page.getByLabel('Required Number').click();
    await page.getByLabel('Required Number').press('NumLock');
    await page.getByLabel('Required Number').fill('25');
    await page.getByLabel('Text', { exact: true }).click();
    await page.getByLabel('Text', { exact: true }).fill('25% increase');
    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click({ force: true });

    // after the redirect to /basic-page
    await expect(page.locator('#uds-donut').first()).toBeVisible();
    await expect(page.locator('#uds-donut').first()).toHaveCSS('height', '350px');
    await expect(page.locator('#percentage-display').first()).toContainText('25%');
    await expect(page.locator('#percentage-display + span').first()).toContainText('25% increase');
  });

  test('edit', async () => {
    await drupal.visitLayoutBuilderForNode(page);
    await page.getByLabel('Required Text Color').selectOption('text-white');
    await page.getByRole('button', { name: 'Update' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click({ force: true });
    await expect(page.locator('.uds-charts-and-graphs-overlay.text-white')).toHaveCount(1);
  });
});
