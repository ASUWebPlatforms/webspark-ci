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
    this.inputAddBlock = page.getByRole('button', { name: 'Add block' })
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
    await this.inputAddBlock.click()
    await this.inputSaveLayout.click()
  }

  async edit () {}

  async delete () {}

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
}

export { Block }
