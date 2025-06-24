import { expect } from '@playwright/test'
import { faker } from '@faker-js/faker/locale/en'
import { Block } from './Block'

export class Accordion extends Block {
  constructor (page, name) {
    super(page, name)
    this.inputColorOptions = page.getByRole('combobox', { name: 'Required Color Options' })
    this.inputFA = page.locator('.fip-icon-down-dir').first()
    this.inputFAIcon = page.getByTitle('Pyramid,ASUAwesome,Shapes,').first()
    this.inputHeading = page.getByRole('textbox', { name: 'Heading' })
    this.inputBody = page.getByLabel('Rich Text Editor').getByRole('textbox')
    this.inputExpand = page.getByRole('checkbox', { name: 'Initially Expanded' })
    this.el = page.locator('.accordion-item.accordion-item-maroon')
    this.icon = page.locator('.accordion-header.accordion-header-icon')
    this.heading = page.getByRole('button', { name: 'Block heading' })
    this.content = page.getByText('Block content', { exact: true })
  }

  /**
   * Add a new block.
   * @returns {Promise<void>}
   */
  async addContent () {
    await this.inputColorOptions.selectOption({ label: 'Maroon' })
    await this.inputFA.click()
    await this.inputFAIcon.click()
    await this.inputHeading.fill('Block heading')
    await this.inputBody.fill('Block content')
    await this.inputExpand.setChecked(true)
  }
}

export class Hero extends Block {
  constructor (page, name) {
    super(page, name)
  }
}
