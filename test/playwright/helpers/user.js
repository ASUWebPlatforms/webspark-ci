const drupalUser = process.env.DRUPAL_USER;
const drupalPassword = process.env.DRUPAL_PASSWORD;

if (!drupalUser || !drupalPassword) {
  console.warn("DRUPAL_USER or DRUPAL_PASSWORD variables are not set in '.ddev/.env'.");
  throw new Error('Drupal credentials are not configured in the environment.');
}

const user = {
  username: drupalUser,
  password: drupalPassword,
};

export default user;
