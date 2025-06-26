import { test, expect } from '@playwright/test'
import { BasicPage } from '../../models/BasicPage.js'
import { CardImageAndContent } from '../../models/WebsparkBlocks.js'

/** @type {import('@playwright/test').Page} */
let page
let node, block
const title = 'Card image and content'

test.describe(title, { tag: ['@webspark', '@block'] }, () => {
  test.describe.configure({ mode: 'serial' })

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    node = new BasicPage(page, title)
    block = new CardImageAndContent(page, title)
  })

  test.afterAll(async () => {
    await page.close()
  })

  test('create', async () => {
    await node.add()
    await node.goToLayout()
    await block.add()
    await block.addContent()
    await block.save()
  })

  test('verify', async () => {
    await block.verify()
  })
})
