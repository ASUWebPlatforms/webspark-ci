import { test as setup, expect } from '@playwright/test'
import { STORAGE_STATE } from '../playwright.config'

const USERNAME = process.env.DRUPAL_USER
const PASSWORD = process.env.DRUPAL_PASSWORD

if (!USERNAME || !PASSWORD) {
  console.warn('DRUPAL_USER and DRUPAL_PASSWORD must be set in \'.ddev/.env\'.')
  throw new Error('Drupal credentials are not configured in the environment.')
}

setup('login', async ({ page }) => {
  await page.goto('/user/login')
  await page.getByRole('button', { name: 'Ok, I agree' }).click()
  await page.getByRole('textbox', { name: 'Required Username' }).fill(USERNAME)
  await page.getByRole('textbox', { name: 'Required Password' }).fill(PASSWORD)
  await page.getByRole('button', { name: 'Log In' }).click()

  await expect(page.getByRole('heading', { name: USERNAME })).toBeVisible()
  await page.context().storageState({ path: STORAGE_STATE })
})
