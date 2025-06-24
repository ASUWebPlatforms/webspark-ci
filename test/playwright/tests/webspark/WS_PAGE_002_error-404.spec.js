import { test, expect } from '@playwright/test'
import { ErrorPage } from '../../models/ErrorPage.js'

/** @type {import('@playwright/test').Page} */
let page
let error
const title = 'Error 404'

// Reset storage state for this file to avoid being authenticated
test.use({ storageState: { cookies: [], origins: [] } })

test.describe(title, { tag: ['@webspark', '@page'] }, () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    error = new ErrorPage(page)
  })

  test.afterAll(async () => {
    await page.close()
  })

  test('verify', async () => {
    await error.visit404Page()
  })

  test('search', async () => {
    await error.search()
  })
})
