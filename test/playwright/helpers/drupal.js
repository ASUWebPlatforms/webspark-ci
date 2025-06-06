import drush from './drush';

/**
 * <Revised> Collection of Drupal helpers for Playwright tests.
 *
 * Keep the functionality limited to core or global Drupal operations.
 * Things like creating nodes should happen in the appropriate Page Object Model.
 */
class Drupal {
  constructor() {}

  async enableModule(name) {
    await drush.enableModule(name);
    await drush.rebuild();
  }

  async disableModule(name) {
    await drush.disableModule(name);
    await drush.rebuild();
  }

  async acceptCookies(page, path = 'auth.json') {
    await page.getByRole('button', { name: 'Ok, I agree', timeout: 30000 });
    await page.context.storageState({ path: path });
  }

  async loginAsAdmin(page) {
    return await page.goto(drush.getAdminLogin().toString());
  }

  async loginAsUser(page, name) {
    return await page.goto(drush.getUserLogin(name).toString());
  }

  async getNodeIdByAlias(alias) {
    const formattedAlias = alias.startsWith('/') ? alias : `/${alias}`;
    const cmd = `print \Drupal::service('path_alias.manager')->getPathByAlias('${formattedAlias}');`;

    return await drush(`php:eval '${cmd}'`);
  }
}

export default new Drupal();
