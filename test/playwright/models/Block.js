import { expect } from '@playwright/test'
import { faker } from '@faker-js/faker/locale/en'
import drupal from '../helpers/drupal'

class Block {
  /**
   * Block model for Playwright tests.
   * @param {import('playwright').Page} page
   * @param {string} name
   */
  constructor (page, name) {
    this.page = page
    this.name = name
    this.inputAddBlock = page.getByRole('link', { name: 'Add block in Content, First region' })
    this.inputCreateContentBlock = page.getByRole('link', { name: 'Create content block' })
    this.inputAddByName = page.getByRole('link', { name: name, exact: true })
    this.inputBlockAdminTitle = page.getByRole('textbox', { name: 'Required Block admin title' })
    this.inputSaveBlock = page.getByRole('button', { name: 'Add block' })
    this.inputUpdateBlock = page.getByRole('button', { name: 'Update' })
    this.inputSaveLayout = page.getByRole('button', { name: 'Save layout' })
    this.inputAppearanceSettings = page.getByRole('button', { name: 'Appearance Settings' })
    this.inputAnchorMenuTitle = page.getByLabel('Anchor menu title')
    this.inputSpacingTop = page.getByLabel('Spacing top')
    this.inputSpacingBottom = page.getByLabel('Spacing bottom')
  }

  /**
   * Add a new block.
   * @returns {Promise<void>}
   */
  async add () {
    await this.inputAddBlock.click()
    await this.inputCreateContentBlock.click()
    await this.inputAddByName.click()
    await this.inputBlockAdminTitle.fill(this.name)
  }

  /**
   * Add a repeater item content to the block.
   * @param {number} i The locator index
   * @returns {Promise<void>}
   */
  async addItem (i = 0) {
    throw new Error('addItem() must be implemented in the subclass')
  }

  /**
   * Add content to the block.
   * @returns {Promise<void>}
   */
  async addContent () {
    throw new Error('addContent() must be implemented in the subclass')
  }

  async edit () {}

  /**
   * Save the block.
   * @returns {Promise<void>}
   */
  async save () {
    await this.inputSaveBlock.click()
    await this.inputSaveLayout.click()
  }

  /**
   * Update the block.
   * @returns {Promise<void>}
   */
  async update () {
    await this.inputUpdateBlock.click()
    await this.inputSaveLayout.click()
  }

  async delete () {}

  /**
   * Verify the block via tests.
   * @returns {Promise<void>}
   */
  async verify () {
    throw new Error('verify() must be implemented in the subclass')
  }

  /**
   * Add appearance settings to the block.
   * @returns {Promise<void>}
   */
  async addAppearanceSettings () {
    await this.inputAppearanceSettings.click()
    await this.inputAnchorMenuTitle.fill(this.name)
    await this.inputSpacingTop.selectOption('spacing-top-8')
    await this.inputSpacingBottom.selectOption('spacing-bottom-8')
    await this.inputUpdateBlock.click()
    await this.inputSaveLayout.click({ force: true })

    await expect(this.page.locator(`.spacing-top-8.spacing-bottom-8.block-inline-block${this.name}`)).toHaveCount(1)
    await expect(this.page.locator('.webspark-anchor-link-data')).toHaveAttribute('data-title', this.name)
  }

  async verifyMediaField () {}

  /**
   * Verify the Call to Action field.
   * NOTE: Should this really be in the Block class?
   * @param {import('@playwright/test').Locator} locator
   * @returns {Promise<void>}
   */
  async verifyCTAField (locator) {
    await expect(locator).toBeVisible()
    await expect(locator).toHaveClass(/btn-maroon/)
    await expect(locator).toHaveAttribute('href', 'https://asu.edu')
    await expect(locator).toHaveAttribute('target', '_blank')
  }

  async verifyIconField () {}
}

export { Block }
