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

  /**
   * Add a new card to the card group.
   * @param {number} i The locator index
   * @returns {Promise<void>}
   */
  async addCard (i = 0) {
    throw new Error('addCard() must be implemented in the subclass')
  }

  /**
   * Add a new card group.
   * @returns {Promise<void>}
   */
  async addCardGroup () {
    throw new Error('addCardGroup() must be implemented in the subclass')
  }

  /**
   * Add content to the card group.
   * @returns {Promise<void>}
   */
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
