import { expect } from '@playwright/test'
import { faker } from '@faker-js/faker/locale/en'
import { Block } from './Block'

export class Accordion extends Block {
  constructor (page, name) {
    super(page, name)
    this.heading = faker.lorem.words()
    this.content = faker.lorem.paragraph()
    this.color = 'Maroon'
    this.icon = 'Pyramid,ASUAwesome,Shapes,'

    this.inputColorOptions = page.getByRole('combobox', { name: 'Required Color Options' })
    this.inputFA = page.locator('.fip-icon-down-dir').first()
    this.inputFAIcon = page.getByTitle(this.icon).first()
    this.inputHeading = page.getByRole('textbox', { name: 'Heading' })
    this.inputContent = page.getByLabel('Rich Text Editor').getByRole('textbox')
    this.inputExpanded = page.getByRole('checkbox', { name: 'Initially Expanded' })

    this.el = page.locator('.accordion-item.accordion-item-maroon')
    this.elIcon = page.locator('.accordion-header.accordion-header-icon')
    this.elHeading = page.getByRole('button', { name: this.heading })
    this.elContent = page.getByText(this.content, { exact: true })
  }

  async addContent () {
    await this.inputColorOptions.selectOption({ label: this.color })
    await this.inputFA.click()
    await this.inputFAIcon.click()
    await this.inputHeading.fill(this.heading)
    await this.inputContent.fill(this.content)
    await this.inputExpanded.setChecked(true)
  }

  async verify () {
    await expect(this.el).toBeVisible()
    await expect(this.elIcon).toBeVisible()
    await expect(this.elHeading).toBeVisible()
    await expect(this.elContent).toBeVisible()
    await this.elHeading.click()
    await expect(this.elContent).toBeHidden()
  }
}

export class Blockquote extends Block {
  constructor (page, name) {
    super(page, name)
  }

  async addContent () {}

  async verify () {}
}
