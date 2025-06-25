import { test, expect } from '@playwright/test'
import { BasicPage } from '../../models/BasicPage.js'
import { CardAndImage } from '../../models/WebsparkBlocks.js'

/** @type {import('@playwright/test').Page} */
let page
let node, block
const title = 'Card and Image'

test.describe(title, { tag: ['@webspark', '@block'] }, () => {
  test.describe.configure({ mode: 'serial' })

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    node = new BasicPage(page, title)
    block = new CardAndImage(page, title)
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

  test('create parallax variant', async () => {
    await node.goToLayout()
    await block.add()
    await block.addContentVariant()
    await block.save()
  })

  test('verify parallax variant', async () => {
    await block.verifyVariant()
  })
})
