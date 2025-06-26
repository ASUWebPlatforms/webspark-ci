import { expect } from '@playwright/test'
import { faker } from '@faker-js/faker/locale/en'
import drupal from '../helpers/drupal'

class React {
  /**
   * React model for Playwright tests.
   * @param {import('playwright').Page} page
   */
  constructor (page) {
    this.page = page
  }

  async addCards (number = 3) {
    for (let i = 0; i < number; i++) {
      if (i > 0) {
        await this.inputAddCard.click()
        // Check the AJAX for a better way than a hard wait
        // Then put it in the Drupal helper and allow custom timeout value
        await this.page.waitForTimeout(3000)
      }
      await this.addContent(i)
    }
  }

  async addCardGroup () {
    throw new Error('addCardGroup() must be implemented in the subclass')
  }

  async addContent () {
    throw new Error('addContent() must be implemented in the subclass')
  }

  /**
   * Verify the card group via tests.
   * @returns {Promise<void>}
   */
  async verify () {
    throw new Error('verify() must be implemented in the subclass')
  }
}

export { React }
