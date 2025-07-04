// TODO: This file should be reframed as a helper file, similar to the Drupal helper file
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

  /**
   * Get the props for the component.
   * @param {string} path The object path to the props in drupalSettings
   * @returns {Promise<unknown>}
   */
  async getProps (path) {
    await this.page.waitForLoadState()
    const props = await this.page.evaluate((keyPath) => {
      const keys = keyPath.split('.')
      let result = window.drupalSettings

      for (const key of keys) {
        if (result && typeof result === 'object' && key in result) {
          result = result[key]
        } else {
          return undefined
        }
      }

      return result
    }, path)

    await expect(props).toBeDefined()
    expect(typeof props).toBe('object')
    return props
  }
}

export { React }
