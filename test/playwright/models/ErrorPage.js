import { expect } from '@playwright/test'
import { faker } from '@faker-js/faker/locale/en'

class ErrorPage {
  /**
   * ErrorPage model for Playwright tests.
   * @param {import('playwright').Page} page
   */
  constructor (page) {
    this.page = page
    this.url = '/dwhgdkwhfcbcdkwjcbdwkjcb'
    this.heading = page.getByRole('heading', { name: 'Hmm, we can\'t find that page' })
    this.searchHeading = page.getByRole('heading', { name: 'Search all of ASU' })
    this.inputSearch = page.getByRole('textbox', { name: 'Search asu.edu' })
  }

  /**
   * Visit the 404 error page.
   * @returns {Promise<void>}
   */
  async visit404Page () {
    const response = await this.page.goto(this.url)

    expect(response.status()).toBe(404)
    await expect(this.heading).toBeVisible()
    await expect(this.searchHeading).toBeVisible()
    await expect(this.inputSearch).toBeVisible()
  }

  /**
   * Search for a random name on the ASU search page.
   * @returns {Promise<void>}
   */
  async search () {
    const name = faker.person.firstName()

    await this.page.goto(this.url)
    await this.inputSearch.fill(name)
    await this.page.evaluate(() => {
      document.getElementById('webspark-blocks-asu-search-form').submit()
    })
    await this.page.waitForURL('https://search.asu.edu/**')

    const url = this.page.url()
    expect(url).toContain('https://search.asu.edu/')
    expect(url).toContain(`q=${name}`)
  }
}

export { ErrorPage }
