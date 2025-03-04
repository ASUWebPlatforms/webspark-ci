import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const BLOCK = 'Webform';

test.describe(`${BLOCK} block tests`, { tag: ['@webspark', '@desktop', '@block'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;
  let pageUrl;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.consent(page);
    await drupal.toggleCookieConsent();
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
    await page.getByRole('combobox', { name: 'Required Webform' }).selectOption({ label: 'Contact' });
    //--- End custom test steps

    await page.getByRole('button', { name: 'Add block' }).click();
    await page.getByRole('button', { name: 'Save layout' }).click();
  });

  test('verify', async () => {
    const form = page.locator('.uds-form');
    const required = page.locator('.uds-field-required');
    const name = page.locator('#edit-name');
    const email = page.locator('#edit-email');
    const subject = page.locator('#edit-subject');
    const message = page.getByRole('textbox', { name: 'Required Message' });
    const checkbox = page.getByRole('checkbox', { name: 'Ok to contact?' });
    const radio = page.getByRole('radio', { name: 'Email' });
    const select = page.getByRole('combobox', { name: 'Best time' });
    const submit = page.locator('#edit-actions-submit');
    const error = page.getByText('error has been found: Message');
    const success = page.getByText('Your message has been sent.', { exact: true });

    await expect(form).toHaveAttribute('novalidate', 'novalidate');
    await expect(required).toHaveCount(4);
    await expect(submit).toHaveClass(/btn-maroon/);

    await expect(name).toHaveValue('admin');
    await expect(email).toHaveValue('mlsamuel@asu.edu');
    await subject.fill('subject');
    await checkbox.setChecked(true);
    await radio.setChecked(true);
    await select.selectOption({ label: 'Morning' });
    await submit.click();

    await expect(error).toBeVisible();
    await expect(form).toHaveClass(/was-validated/);
    await expect(name).toHaveCSS('border', 'solid #446d12');
    await expect(message).toHaveCSS('border', 'solid var(--invalid-feedback-light-background)');
    await message.fill('message');
    await submit.click();
    await expect(success).toBeVisible();
  });
});
