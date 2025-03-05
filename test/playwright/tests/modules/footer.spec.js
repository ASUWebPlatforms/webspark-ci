import { test, expect } from '@playwright/test';
import drupal from '../helpers/drupal';

const innovationLinks = [
  { name: 'Maps and Locations', url: 'https://www.asu.edu/about/locations-maps' },
  { name: 'Jobs', url: 'https://cfo.asu.edu/applicant' },
  { name: 'Directory', url: 'https://search.asu.edu/?search-tabs=web_dir_faculty_staff' },
  { name: 'Contact ASU', url: 'https://www.asu.edu/about/contact' },
  { name: 'My ASU', url: 'https://my.asu.edu' },
];

const colophonLinks = [
  { name: 'Copyright and Trademark', url: 'https://www.asu.edu/about/copyright-trademark' },
  { name: 'Accessibility', url: 'https://accessibility.asu.edu/report' },
  { name: 'Privacy', url: 'https://www.asu.edu/about/privacy' },
  { name: 'Terms of Use', url: 'https://www.asu.edu/about/terms-of-use' },
  { name: 'Emergency', url: 'https://www.asu.edu/emergency' },
];

const rankingImage = {
  alt: 'Repeatedly ranked #1 on 20+ lists in the last 3 years',
  src: '/modules/asu_modules/asu_footer/img/footer-rank.png',
  href: 'https://www.asu.edu/rankings',
};

const socialLinks = [
  { name: 'Facebook Social Media Icon' },
  { name: 'X / Twitter Social Media Icon' },
  { name: 'Instagram Social Media Icon' },
  { name: 'YouTube Social Media Icon' },
  { name: 'LinkedIn Social Media Icon' },
];

test.describe('footer tests', { tag: ['@webspark', '@desktop'] }, () => {
  /** @type {import('@playwright/test').Page} */
  let page;

  test.beforeAll('setup', async ({ browser }) => {
    page = await browser.newPage();
    await drupal.loginAsAdmin(page);
    await page.goto('/admin/structure/block/manage/asufooter?destination=/admin/structure/block');

    await page.getByRole('checkbox', { name: 'Show social media and unit' }).check();
    await page.getByRole('textbox', { name: 'Logo URL' }).fill('#');
    await page.getByRole('textbox', { name: 'Facebook Social Media' }).fill('#');
    await page.getByRole('textbox', { name: 'X / Twitter Social Media' }).fill('#');
    await page.getByRole('textbox', { name: 'LinkedIn Social Media' }).fill('#');
    await page.getByRole('textbox', { name: 'Instagram Social Media' }).fill('#');
    await page.getByRole('textbox', { name: 'YouTube Social Media' }).fill('#');

    await page.getByRole('checkbox', { name: 'Show columns' }).check();
    await page.getByRole('textbox', { name: 'Name of Unit/School/College *' }).fill('School');
    await page.getByRole('textbox', { name: 'Link Title' }).fill('Title');
    await page.locator('#edit-settings-asu-footer-block-link-asu-footer-block-link-url').fill('#');
    await page.getByRole('textbox', { name: 'CTA Title' }).fill('CTA');
    await page.locator('#edit-settings-asu-footer-block-cta-asu-footer-block-cta-url').fill('#');

    await page.locator('#edit-settings-second-column-asu-footer-block-menu-second-column-name').selectOption('main');
    await page.getByRole('textbox', { name: 'Menu title *' }).fill('Menu');
    await page.getByRole('button', { name: 'Save block' }).click();
  });

  test.beforeEach(async () => {
    await page.goto('/');
  });

  test.afterAll('cleanup', async () => {
    await page.close();
  });

  test('verify endorsed', async () => {
    await expect(page.locator('#wrapper-endorsed-footer')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Arizona State University.' })).toBeVisible();
    for (const link of socialLinks) {
      await expect(page.getByLabel('Social Media').getByRole('link', { name: link.name, exact: true })).toBeVisible();
    }
  });

  test('verify columns', async () => {
    const columns = page.locator('#footer-columns div.col-xl');

    await expect(columns).toHaveCount(2);
    await expect(page.locator('#wrapper-footer-columns')).toBeVisible();
    await expect(page.getByText('School', { exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Title' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'CTA' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Home', exact: true })).toBeVisible();
  });

  test('verify innovation', async () => {
    const img = page.getByAltText(rankingImage.alt);
    const link = page.getByRole('link', { name: rankingImage.alt });

    await expect(page.locator('#wrapper-footer-innovation')).toBeVisible();
    await expect(img).toBeVisible();
    await expect(img).toHaveAttribute('src', rankingImage.src);
    await expect(link).toHaveAttribute('href', rankingImage.href);

    for (const link of innovationLinks) {
      await expect(page.getByLabel('University Services').getByRole('link', { name: link.name, exact: true })).toHaveAttribute('href', link.url);
    }
  });

  test('verify colophon', async () => {
    await expect(page.locator('#wrapper-footer-colophon')).toBeVisible();

    for (const link of colophonLinks) {
      await expect(page.getByLabel('University Legal and Compliance').getByRole('link', { name: link.name, exact: true })).toHaveAttribute('href', link.url);
    }
  });
});
