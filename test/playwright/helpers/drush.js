const { execSync } = require('child_process')

/**
 * Note that we intentionally are not using any shorthand(s) for command names.
 */
class Drush {
  constructor () {
    this.drush = cmd => execSync(`drush ${cmd}`)
  }

  /**
   * Rebuild the Drupal cache.
   * @returns {Promise<void>}
   */
  async rebuild () {
    this.drush('cache:rebuild')
  }

  /**
   * Enable the universal Google Tag Manager (GTM) settings.
   * @returns {Promise<void>}
   */
  async enableUniversalGTM () {
    this.drush('config:set asu_brand.settings asu_brand.asu_brand_cookie_consent_enabled 1')
    this.drush('config:set asu_brand.settings asu_brand.asu_brand_gtm_enabled 1')
  }

  /**
   * Disable the universal Google Tag Manager (GTM) settings.
   * @returns {Promise<void>}
   */
  async disableUniversalGTM () {
    this.drush('config:set asu_brand.settings asu_brand.asu_brand_cookie_consent_enabled 0')
    this.drush('config:set asu_brand.settings asu_brand.asu_brand_gtm_enabled 0')
  }

  /**
   * Enable maintenance mode for the Drupal site.
   * @returns {Promise<void>}
   */
  async enableMaintenanceMode () {
    this.drush('maint:set 1')
  }

  /**
   * Disable maintenance mode for the Drupal site.
   * @returns {Promise<void>}
   */
  async disableMaintenanceMode () {
    this.drush('maint:set 0')
  }

  /**
   * Enable a Drupal module.
   * @param {string} name
   * @returns {Promise<void>}
   */
  async enableModule (name) {
    this.drush(`pm:install -y ${name}`)
  }

  /**
   * Disable a Drupal module.
   * @param {string} name
   * @returns {Promise<void>}
   */
  async disableModule (name) {
    this.drush(`pm:uninstall -y ${name}`)
  }

  /**
   * Update the Drupal database schema.
   * @returns {Promise<void>}
   */
  async updateDB () {
    this.drush('updatedb -y')
  }

  /**
   * Get the admin login URL using Drush.
   * @returns {Promise<Buffer<ArrayBufferLike>>}
   */
  async getAdminLogin () {
    return this.drush('user:login')
  }

  /**
   * Get the login URL for a specific user using Drush.
   * @param {string} name
   * @returns {Promise<Buffer<ArrayBufferLike>>}
   */
  async getUserLogin (name) {
    return this.drush(`user:login --name=${name}`)
  }
}

export default new Drush()
