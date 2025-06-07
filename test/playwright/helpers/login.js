import { chromium } from 'playwright'
import user from './user.js'

(async () => {
  let browser

  try {
    console.log('Attempting to log in user:', user.username)
    browser = await chromium.launch({ headless: false })
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('http://webspark-ci.ddev.site/user/login')
    await page.getByRole('button', { name: 'Ok, I agree', timeout: 30000 })
    await page.getByRole('textbox', { name: 'Required Username' }).fill(user.username)
    await page.getByRole('textbox', { name: 'Required Password' }).fill(user.password)
    await page.getByRole('button', { name: 'Log In' }).click()
    // page.setDefaultTimeout(120000);
    // await page.waitForURL(`http://webspark-ci.ddev.site/user/${user.username}`, { waitUntil: 'domcontentloaded' });

    // Relative to this scrip because this script runs outside of Playwright
    const storageStatePath = '../auth.json'
    await context.storageState({ path: storageStatePath })
    console.log(`Storage state saved to ${storageStatePath}`)
  } catch (error) {
    console.error('Error during login script execution:', error)
  } finally {
    if (browser) {
      await browser.close()
    }
  }
})()
