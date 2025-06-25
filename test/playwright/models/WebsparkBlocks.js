import { expect } from '@playwright/test'
import { faker } from '@faker-js/faker/locale/en'
import { Block } from './Block'
import drupal from '../helpers/drupal'

export class Accordion extends Block {
  constructor (page, name) {
    super(page, name)
    this.heading = faker.lorem.words()
    this.content = faker.lorem.paragraph()
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
    await this.inputColorOptions.selectOption({ label: 'Maroon' })
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
    this.content = 'Block content'
    this.author = 'Block author'
    this.title = 'Block title'
    this.heading = 'Block heading'

    this.inputAccentColor = page.getByRole('combobox', { name: 'Required Accent Color' })
    this.inputTextColor = page.getByRole('combobox', { name: 'Required Text Color' })
    this.inputHeading = page.getByRole('textbox', { name: 'Heading' })
    this.inputHeadingHighlight = page.getByRole('combobox', { name: 'Heading Highlight' })
    this.inputText = page.getByLabel('Rich Text Editor').getByRole('textbox')
    this.inputImagePosition = page.getByRole('radio', { name: 'Right' })
    this.inputCitationStyle = page.getByRole('combobox', { name: 'Citation Style' })
    this.inputCitationAuthor = page.getByRole('textbox', { name: 'Citation author' })
    this.inputCitationTitle = page.getByRole('textbox', { name: 'Citation Title' })

    this.el = page.locator('.uds-blockquote')
    this.elHeading = page.getByText(this.heading, { exact: true })
    this.elContent = page.getByText(this.content, { exact: true })
    this.elAuthor = page.getByText(this.author, { exact: true })
    this.elTitle = page.getByText(this.title, { exact: true })
    this.elImage = page.getByRole('img', { name: 'sample image' })
  }

  async addContent () {
    await this.inputAccentColor.selectOption({ label: 'Gold' })
    await this.inputText.fill(this.content)
    await this.inputCitationStyle.selectOption({ label: 'Alternative' })
    await this.inputCitationAuthor.fill(this.author)
    await this.inputCitationTitle.fill(this.title)
  }

  async addContentVariant() {
    await this.inputHeading.fill(this.heading)
    await this.inputHeadingHighlight.selectOption({ label: 'Gold' })
    await this.inputTextColor.selectOption({ label: 'White' })
    await this.inputText.fill(this.content)
    await this.inputImagePosition.setChecked(true)
    await drupal.addMediaField(this.page)
    await this.inputCitationAuthor.fill(this.author)
    await this.inputCitationTitle.fill(this.title)
  }

  async verify () {
    await expect(this.el.first()).toHaveClass(/accent-gold/)
    await expect(this.el.first()).toHaveClass(/alt-citation/)
    await expect(this.elContent.first()).toBeVisible()
    await expect(this.elAuthor.first()).toBeVisible()
    await expect(this.elTitle.first()).toBeVisible()
  }

  async verifyVariant() {
    await expect(this.el.last()).toHaveClass(/with-image/)
    await expect(this.el.last()).toHaveClass(/text-white/)
    await expect(this.el.last()).toHaveClass(/reversed/)
    await expect(this.elHeading).toHaveClass('highlight-gold')
    await expect(this.elImage).toBeVisible()
  }
}

export class CardAndImage extends Block {
  constructor (page, name) {
    super(page, name)
  }

  async addContent () {}

  async verify () {}
}
