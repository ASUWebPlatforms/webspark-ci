import { test, expect } from '@playwright/test'
import { Article } from '../../models/Article.js'

/** @type {import('@playwright/test').Page} */
let page, node
const title = 'Article'

test.describe(title, { tag: ['@webspark', '@pages'] }, () => {
  test.describe.configure({ mode: 'serial' })

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    node = new Article(page, title)
  })

  test.afterAll(async () => {
    await page.close()
  })

  test('create', async () => {
    await node.addArticle()
  })

  test('edit', async () => {
    await node.editArticle()
    await node.addContent()
  })
})
