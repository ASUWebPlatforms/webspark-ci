import { test, expect } from '@playwright/test';

const innovationLinks = [
  { name: 'Maps and Locations', url: 'https://www.asu.edu/about/locations-maps' },
  { name: 'Jobs', url: 'https://cfo.asu.edu/applicant' },
  { name: 'Directory', url: 'https://search.asu.edu/?search-tabs=web_dir_faculty_staff' },
  { name: 'Contact ASU', url: 'https://www.asu.edu/about/contact' },
  { name: 'My ASU', url: 'https://my.asu.edu' }
];

const colophonLinks = [
  { name: 'Copyright and Trademark', url: 'https://www.asu.edu/about/copyright-trademark' },
  { name: 'Accessibility', url: 'https://accessibility.asu.edu/report' },
  { name: 'Privacy', url: 'https://www.asu.edu/about/privacy' },
  { name: 'Terms of Use', url: 'https://www.asu.edu/about/terms-of-use' },
  { name: 'Emergency', url: 'https://www.asu.edu/emergency' }
];

const rankingImage = {
  alt: 'Repeatedly ranked #1 on 20+ lists in the last 3 years',
  src: '/modules/webspark/asu_footer/img/240917_ASU_Rankings_GOLD.png',
  href: 'https://www.asu.edu/rankings'
};

test.describe('Footer tests', { tag: '@webspark' }, () => {
  test.beforeEach('setup', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#wrapper-footer-innovation')).toBeVisible();
    await expect(page.locator('#wrapper-footer-colophon')).toBeVisible();
  });

  test('innovation links have correct text and href', async ({ page }) => {
    for (const link of innovationLinks) {
      await expect(page.getByLabel('University Services').getByRole('link', { name: link.name, exact: true })).toBeVisible();
      await expect(page.getByLabel('University Services').getByRole('link', { name: link.name, exact: true })).toHaveAttribute('href', link.url);
    }
  });

  test('colophon links have correct text and href', async ({ page }) => {
    for (const link of colophonLinks) {
      await expect(page.getByLabel('University Legal and Compliance').getByRole('link', { name: link.name, exact: true })).toBeVisible();
      await expect(page.getByLabel('University Legal and Compliance').getByRole('link', { name: link.name, exact: true })).toHaveAttribute('href', link.url);
    }
  });

  test('ranking image has correct image and href', async ({ page }) => {
    const img = page.getByAltText(rankingImage.alt);
    const link = page.getByRole('link', { name: rankingImage.alt });

    await expect(img).toBeVisible();
    await expect(img).toHaveAttribute('src', rankingImage.src);
    await expect(link).toHaveAttribute('href', rankingImage.href);
  });
});
