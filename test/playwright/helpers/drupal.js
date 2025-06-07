import drush from './drush'

/**
 * <Revised> Collection of Drupal helpers for Playwright tests.
 *
 * Keep the functionality limited to core or global Drupal operations.
 * Things like creating nodes should happen in the appropriate Page Object Model.
 */
class Drupal {
  async enableModule (name) {
    await drush.enableModule(name)
    await drush.rebuild()
  }

  async disableModule (name) {
    await drush.disableModule(name)
    await drush.rebuild()
  }

  async acceptCookies (page, path = 'auth.json') {
    await page.getByRole('button', { name: 'Ok, I agree', timeout: 30000 })
    await page.context().storageState({ path: path })
  }

  async loginAsAdmin (page) {
    const loginUrlBuffer = await drush.getAdminLogin()
    const loginUrl = loginUrlBuffer.toString().trim()

    await page.goto(loginUrl)
    await page.getByRole('button', { name: 'Ok, I agree', timeout: 30000 })
    await page.context().storageState({ path: 'auth.json' })
  }

  async loginAsUser (page, name) {
    const loginUrlBuffer = await drush.getUserLogin(name)
    const loginUrl = loginUrlBuffer.toString().trim()

    await page.goto(loginUrl)
    await page.getByRole('button', { name: 'Ok, I agree', timeout: 30000 })
    await page.context().storageState({ path: 'auth.json' })
  }

  async getNodeIdByAlias (alias) {
    const formattedAlias = alias.startsWith('/') ? alias : `/${alias}`
    const cmd = `print \Drupal::service('path_alias.manager')->getPathByAlias('${formattedAlias}');`

    return await drush(`php:eval '${cmd}'`)
  }
}

export default new Drupal()
