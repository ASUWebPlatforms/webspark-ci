import { expect } from '@playwright/test'
import drupal from '../helpers/drupal'

class Node {
  /**
   * Node model for Playwright tests.
   * @param {import('playwright').Page} page
   * @param {string} name
   */
  constructor (page, name) {
    this.page = page
    this.name = name
    this.url = null
    this.alias = null
    this.path = null
    this.nid = null
    this.inputTitle = page.getByRole('textbox', { name: 'Title *' })
    this.inputSave = page.getByRole('button', { name: 'Save' })
    this.inputDelete = page.getByRole('button', { name: 'Delete' })
    this.status = page.getByRole('status', { name: 'Status message' })
  }

  /**
   * Navigate to the node's view page.
   * @returns {Promise<void>}
   */
  async view () {
    await this.page.goto(this.alias)
  }

  /**
   * Navigate to the node's edit page.
   * @returns {Promise<void>}
   */
  async edit () {
    const path = `${this.path}/edit`
    await this.page.goto(path)
  }

  /**
   * Save the node.
   * @returns {Promise<void>}
   */
  async save () {
    await this.inputSave.click()
  }

  /**
   * Update the node's title.
   * @returns {Promise<void>}
   */
  async delete () {
    const path = `${this.path}/delete`
    await this.page.goto(path)
    await this.inputDelete.click()
    await expect(this.status).toHaveClass(/alert-success/)
  }

  /**
   * Navigate to the node's layout page.
   * @returns {Promise<void>}
   */
  async goToLayout () {
    const path = `${this.path}/layout`
    await this.page.goto(path)
  }

  /**
   * Navigate to the node's revisions page.
   * @returns {Promise<void>}
   */
  async goToRevisions () {
    const path = `${this.path}/revisions`
    await this.page.goto(path)
  }

  /**
   * Set the properties of the node based on the current page URL.
   * @returns {Promise<void>}
   */
  async setNodeProperties () {
    await this.#setNodeUrl()
    await this.#setNodeAlias()
    await this.#setNodePath()
    await this.#setNodeId()
  }

  /**
   * Set the node URL from the current page URL.
   * @returns {Promise<void>}
   */
  async #setNodeUrl () {
    this.url = this.page.url()
  }

  /**
   * Set the node alias from the current URL.
   * @returns {Promise<void>}
   */
  async #setNodeAlias () {
    if (!this.url) {
      console.error('Cannot set node alias because <this.url> is not set.')
      this.alias = null
      return
    }
    try {
      const urlObject = new URL(this.url)
      this.alias = urlObject.pathname
    } catch (error) {
      console.error(`Error parsing URL "${this.url}" to set Node alias:`, error)
      this.alias = null
    }
  }

  /**
   * Set the node path based on the alias.
   * @returns {Promise<void>}
   */
  async #setNodePath () {
    try {
      if (!this.alias) {
        console.error('Cannot set node path because <this.alias> is not set.')
        this.path = null
        return
      }
      this.path = await drupal.getNodePath(this.alias)
    } catch (error) {
      console.error('Error processing node path:', error)
      this.path = null
    }
  }

  /**
   * Set the node ID based on the alias.
   * @returns {Promise<void>}
   */
  async #setNodeId () {
    try {
      this.nid = await drupal.getNodeIdByAlias(this.alias)
    } catch (error) {
      console.error('Error processing alias to set node ID:', error)
      this.nid = null
    }
  }

  /**
   * Get the URL of the node.
   * @returns {Promise<null|*>}
   */
  async getNodeUrl () { return this.url }

  /**
   * Get the alias of the node.
   * @returns {Promise<null|*>}
   */
  async getNodeAlias () { return this.alias }

  /**
   * Get the path of the node.
   * @returns {Promise<null|*>}
   */
  async getNodePath () { return this.path }

  /**
   * Get the ID of the node.
   * @returns {Promise<null|*>}
   */
  async getNodeId () { return this.nid }
}

export { Node }
