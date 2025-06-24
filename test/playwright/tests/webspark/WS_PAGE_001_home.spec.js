import { test, expect } from '@playwright/test'

/** @type {import('@playwright/test').Page} */
let page
const title = 'Home Page'

// Reset storage state for this file to avoid being authenticated
test.use({ storageState: { cookies: [], origins: [] } })

test.describe(title, { tag: ['@webspark', '@page'] }, () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
  })

  test.afterAll(async () => {
    await page.close()
  })

  test('verify', async () => {
    const response = await page.goto('/')
    const header = page.locator('#asuHeader')
    const footer = page.locator('#asu-footer')

    expect(response.status()).toBe(200)
    await expect(header).toBeVisible()
    await expect(footer).toBeVisible()
  })
})
