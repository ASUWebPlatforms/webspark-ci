import { expect } from '@playwright/test'
import { faker } from '@faker-js/faker/locale/en'
import { Block } from './Block'
import { CardGroupDefault } from './WebsparkCards'
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
    this.content = faker.lorem.paragraph()
    this.author = faker.person.fullName()
    this.title = faker.lorem.words()
    this.heading = faker.lorem.words()

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

  async addContentVariant () {
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

  async verifyVariant () {
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
    this.heading = faker.lorem.words()
    this.content = faker.lorem.paragraph()
    this.author = faker.person.fullName()
    this.title = faker.lorem.words()

    this.inputParallax = page.getByRole('checkbox', { name: 'Parallax' })
    this.inputHeading = page.getByRole('textbox', { name: 'Heading' })
    this.inputBody = page.getByLabel('Rich Text Editor').getByRole('textbox')
    this.inputShowBorders = page.getByRole('checkbox', { name: 'Show borders' })
    this.inputContentPosition = page.getByRole('combobox', { name: 'Required Content Position' })

    this.el = page.locator('.uds-card-and-image')
    this.elIcon = page.getByTestId('card-icon')
    this.elHeading = page.getByText(this.heading, { exact: true })
    this.elContent = page.getByText(this.content, { exact: true })
    this.elCTA = page.getByRole('link', { name: 'Call to action', exact: true })
    this.elImage = page.getByRole('img', { name: 'sample image' })
  }

  async addContent () {
    await drupal.addMediaField(this.page)
    await this.inputHeading.fill(this.heading)
    await this.inputBody.fill(this.content)
    await drupal.addCTAField(this.page)
    await this.inputShowBorders.setChecked(true)
    await drupal.addIcon(this.page)
    await this.inputContentPosition.selectOption({ label: 'Right' })
  }

  async addContentVariant () {
    await drupal.addMediaField(this.page)
    await this.inputParallax.setChecked(true)
  }

  async verify () {
    await expect(this.el.first()).toHaveCSS('background-image', /.*sample.*/)
    await expect(this.el.first()).toHaveClass(/uds-card-and-image-right/)
    await expect(this.elIcon).toBeVisible()
    await expect(this.elHeading).toBeVisible()
    await expect(this.elContent).toBeVisible()
    await this.verifyCTAField(this.elCTA)
  }

  async verifyVariant () {
    await expect(this.el.last()).toHaveClass(/parallax-container-content/)
    await expect(this.elImage).toBeVisible()

    // Check the parallax effect is working
    const initialPosition = await this.elImage.evaluate((img) => img.style.top)
    await this.page.evaluate(() => window.scrollTo(0, window.innerHeight / 2))
    await this.page.waitForTimeout(500)
    const scrolledPosition = await this.elImage.evaluate((img) => img.style.top)
    expect(initialPosition).not.toEqual(scrolledPosition)
  }
}

export class CardCarousel extends Block {
  constructor (page, name) {
    super(page, name)

    this.cards = new CardGroupDefault(page)
    this.inputLayout = page.getByLabel('Layout', { exact: true })
    this.inputCardOrientationLandscape = page.getByRole('radio', { name: 'Landscape' })

    this.elSlides = page.locator('.glide__slide')
    this.elBullets = page.locator('.glide__bullet')
    this.elArrows = page.locator('.glide__arrow')
    this.elCards = page.locator('.card-horizontal')
  }

  async addContent () {
    await this.inputLayout.selectOption({ label: '1 Column' })
    await this.inputCardOrientationLandscape.check()
    await this.cards.addCardGroup()
    await this.cards.addContent()
  }

  async verify () {
    await expect(this.elSlides).toHaveCount(3)
    await expect(this.elSlides.nth(0)).toHaveClass(/glide__slide--active/)
    await expect(this.elCards).toHaveCount(3)
    await expect(this.elBullets).toHaveCount(3)
    await expect(this.elBullets.nth(0)).toHaveClass(/glide__bullet--active/)
    await expect(this.elArrows).toHaveCount(2)
    await expect(this.elArrows.nth(0)).toHaveClass(/glide__arrow--disabled/)
    await this.elBullets.nth(2).click()
    await expect(this.elBullets.nth(2)).toHaveClass(/glide__bullet--active/)
    await expect(this.elBullets.nth(0)).not.toHaveClass(/glide__bullet--active/)
    await expect(this.elSlides.nth(0)).not.toHaveClass(/glide__slide--active/)
    await expect(this.elSlides.nth(2)).toHaveClass(/glide__slide--active/)
    await expect(this.elArrows.nth(0)).not.toHaveClass(/glide__arrow--disabled/)
    await expect(this.elArrows.nth(1)).toHaveClass(/glide__arrow--disabled/)
    await this.elArrows.nth(0).click()
    await expect(this.elSlides.nth(1)).toHaveClass(/glide__slide--active/)
  }
}

export class CardImageAndContent extends Block {
  constructor (page, name) {
    super(page, name)
    this.heading = faker.lorem.words()
    this.text = faker.lorem.paragraph()

    this.inputHeading = page.getByRole('textbox', { name: 'Heading' })
    this.inputHeadingColor = page.getByRole('combobox', { name: 'Required Heading color' })
    this.inputText = page.getByLabel('Rich Text Editor').getByRole('textbox')
    this.inputTextColor = page.getByRole('combobox', { name: 'Required Text Color' })

    this.el = page.locator('.uds-card-image-and-content-image-container')
    this.elTextParent = page.locator('.uds-card-image-and-content-content-container > .content')
    this.elHeading = page.getByText(this.heading, { exact: true })
    this.elText = page.getByText(this.text, { exact: true })
  }

  async addContent () {
    await this.inputHeading.first().fill(this.heading)
    await this.inputHeadingColor.selectOption({ label: 'Gray 7' })
    await drupal.addMediaField(this.page)
    await this.inputText.first().fill(this.text)
    await this.inputTextColor.selectOption({ label: 'White' })

    // Card -- only need this for layout
    await drupal.addMediaField(this.page, 1)
    await this.inputHeading.last().fill(faker.book.title())
    await this.inputText.last().fill(faker.lorem.paragraph())
  }

  async verify () {
    await expect(this.el).toHaveCSS('background-image', /.*sample.*/)
    await expect(this.elHeading).toBeVisible()
    await expect(this.elText).toBeVisible()
    await expect(this.elTextParent).toHaveClass(/text-white/)
  }
}

export class ContentImageOverlap extends Block {
  constructor (page, name) {
    super(page, name)
    this.heading = faker.lorem.words()
    this.content = faker.lorem.paragraph()

    this.inputHeading = page.getByRole('textbox', { name: 'Heading' })
    this.inputContent = page.getByLabel('Rich Text Editor').getByRole('textbox')

    this.el = page.locator('.uds-image-overlap')
    this.elHeading = page.getByText(this.heading, { exact: true })
    this.elContent = page.getByText(this.content, { exact: true })
    this.elImage = page.getByRole('img', { name: 'sample image' })
  }

  async addContent () {
    await drupal.addMediaField(this.page)
    await this.inputHeading.fill(this.heading)
    await this.inputContent.fill(this.content)
  }

  async verify () {
    await expect(this.el).toHaveClass(/content-left/)
    await expect(this.elHeading).toBeVisible()
    await expect(this.elHeading).toHaveClass('highlight-gold')
    await expect(this.elContent).toBeVisible()
    await expect(this.elImage).toBeVisible()
  }
}

export class DisplayList extends Block {
  constructor (page, name) {
    super(page, name)
    this.heading = faker.book.title()
    this.body = faker.lorem.sentence()

    this.inputHeading = page.locator('[data-drupal-selector*="field-heading-0-value"]')
    this.inputBody = page.locator('[data-drupal-selector*="field-body-0-value"]')
    this.inputAddItem = page.getByRole('button', { name: 'Add Display List Item' })

    this.el = page.getByText(`${this.heading} ${this.body}`)
  }

  async addItem (i = 0) {
    await this.inputHeading.nth(i).fill(this.heading)
    await this.inputBody.nth(i).fill(this.body)
  }

  async addContent () {
    await this.addItem()
    await drupal.waitForAjax(this.page, this.inputAddItem)
    await this.addItem(1)
    await drupal.waitForAjax(this.page, this.inputAddItem)
    await this.addItem(2)
  }

  async verify () {
    await expect(this.el).toHaveCount(3)
    await expect(this.el.first()).toBeVisible()
  }
}

export class Divider extends Block {
  constructor (page, name) {
    super(page, name)
    this.inputDivider = page.getByRole('combobox', { name: 'Required Divider type' })
    this.el = page.getByRole('separator')
  }

  async addContent () {
    await this.inputDivider.selectOption({ label: 'Gold body copy divider' })
  }

  async verify () {
    await expect(this.el.first()).toBeVisible()
    await expect(this.el.first()).toHaveClass('margin-width-divider')
    await expect(this.el.last()).toBeVisible()
    await expect(this.el.last()).toHaveClass('copy-divider')
  }
}

export class DonutChart extends Block {
  constructor (page, name) {
    super(page, name)
    this.text = faker.lorem.sentence()

    this.inputNumber = page.getByRole('spinbutton', { name: 'Required Number' })
    this.inputTextColor = page.getByRole('combobox', { name: 'Required Text Color' })
    this.inputText = page.getByRole('textbox', { name: 'Text' })

    this.el = page.locator('.uds-charts-and-graphs-overlay')
    this.elRing = page.locator('#uds-donut')
    this.elNumber = page.locator('#percentage-display')
    this.elText = page.locator('#percentage-display + span')
  }

  async addContent () {
    await this.inputNumber.fill('85')
    await this.inputTextColor.selectOption({ label: 'White' })
    await this.inputText.fill(this.text)
  }

  async verify () {
    await expect(this.el).toHaveClass(/text-white/)
    await expect(this.elRing).toBeVisible()
    await expect(this.elRing).toHaveCSS('height', '350px')
    await expect(this.elNumber).toContainText('85%')
    await expect(this.elText).toContainText(this.text)
  }
}

export class Events extends Block {
  constructor (page, name) {
    super(page, name)
    this.heading = faker.lorem.sentence()
    this.url = faker.internet.url()
    this.text = faker.lorem.sentence()

    this.inputTaxonomy = page.getByRole('textbox', { name: 'Feed taxonomy term' })
    this.inputFilter = page.getByRole('textbox', { name: 'Feed Filter' })
    this.inputItemsToDisplay = page.getByRole('combobox', { name: 'Required Items to Display' })
    this.inputHeading = page.getByRole('textbox', { name: 'Heading', exact: true })
    this.inputHeadingColor = page.getByRole('combobox', { name: 'Header Text Color' })
    this.inputCTAURL = page.getByRole('textbox', { name: 'URL' })
    this.inputCTAText = page.getByRole('textbox', { name: 'Link text' })
    this.inputCTAColor = page.getByRole('combobox', { name: 'Required Header CTA color' })

    this.el = page.getByTestId('list-view-container').getByRole('listitem')
    this.elHeading = page.getByText(this.heading, { exact: true })
    this.elCTA = page.getByRole('link', { name: this.text, exact: true })
  }

  async addContent () {
    // await this.inputTaxonomy.fill('sports');
    // await this.inputFilter.fill('golf');
    await this.inputItemsToDisplay.selectOption({ label: 'Three' })
    await this.inputHeading.fill(this.heading)
    await this.inputHeadingColor.selectOption({ label: 'White' })
    await this.inputCTAURL.fill(this.url)
    await this.inputCTAText.fill(this.text)
    await this.inputCTAColor.selectOption({ label: 'Maroon' })
  }

  // Although this is a React component, we cant yet test via the props
  // since the props are deleted in the components JS, then data passed via
  // the preprocess hook server side
  async verify () {
    await expect(this.el).toHaveCount(3)
    await expect(this.elHeading).toBeVisible()
    await expect(this.elHeading).toHaveClass('text-white')
    await expect(this.elCTA).toHaveClass(/btn-maroon/)
    await expect(this.elCTA).toHaveAttribute('href', this.url)
  }
}

export class Sample extends Block {
  constructor (page, name) {
    super(page, name)
  }

  async addContent () {}

  async verify () {}
}
