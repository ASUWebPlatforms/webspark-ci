import { expect } from '@playwright/test'
import drupal from '../helpers/drupal'

class Node {
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

  async view () {
    await this.page.goto(this.alias)
  }

  async edit () {
    const path = `${this.path}/edit`
    await this.page.goto(path)
  }

  async delete () {
    const path = `${this.path}/delete`
    await this.page.goto(path)
    await this.inputDelete.click()
    await expect(this.status).toHaveClass(/alert-success/)
  }

  async goToLayout () {
    const path = `${this.path}/layout`
    await this.page.goto(path)
  }

  async goToRevisions () {
    const path = `${this.path}/revisions`
    await this.page.goto(path)
  }

  async setNodeProperties () {
    await this.#setNodeUrl()
    await this.#setNodeAlias()
    await this.#setNodePath()
    await this.#setNodeId()
  }

  async #setNodeUrl () {
    this.url = this.page.url()
  }

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

  async #setNodeId () {
    try {
      this.nid = await drupal.getNodeIdByAlias(this.alias)
    } catch (error) {
      console.error('Error processing alias to set node ID:', error)
      this.nid = null
    }
  }

  async getNodeUrl () { return this.url }
  async getNodeAlias () { return this.alias }
  async getNodePath () { return this.path }
  async getNodeId () { return this.nid }
}

export { Node }
