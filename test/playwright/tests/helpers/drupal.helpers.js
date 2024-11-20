const { execSync } = require('child_process');

class DrupalHelpers {
  constructor() {
    this.drush = cmd => execSync(`drush ${cmd}`);
  }

  async loginAsAdmin(page) {
    const url = this.drush('uli');
    return await page.goto(url.toString());
  }
}

export default new DrupalHelpers();
