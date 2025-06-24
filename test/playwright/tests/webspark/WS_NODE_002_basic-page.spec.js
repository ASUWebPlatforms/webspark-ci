import { test, expect } from '@playwright/test'
import { BasicPage } from '../../models/BasicPage.js'

/** @type {import('@playwright/test').Page} */
let page
let node
const title = 'Basic Page'

test.describe(title, { tag: ['@webspark', '@node'] }, () => {
  test.describe.configure({ mode: 'serial' })

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    node = new BasicPage(page, title)
  })

  test.afterAll(async () => {
    await page.close()
  })

  test('create', async () => {
    await node.add()
  })

  test('edit', async () => {
    await node.edit()
    await node.addContent()
  })
})
