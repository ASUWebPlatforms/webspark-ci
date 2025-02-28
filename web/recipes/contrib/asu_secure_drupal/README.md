# ASU Secure Drupal Recipe

## Introduction
This recipe is intended to lock down ASU Drupal site on the Acquia platform.
## Requirements
### Drupal Core
- 10.3.x or higher
### Modules
- asu_secure_superadmin
- asu_governance

## Installation
You need to be using a Composer workflow with the `cweagans/composer-patches` package installed. This recipe requires you to add a patch to your composer file like so:
```json
{
  "extra": {
    "patches": {
      "drupal/core": {
        "Add user1 account migration": "web/modules/contrib/asu_secure_superadmin/patch/user-module-3135592-2241mr-c39.patch"
      }
    }
  }
}
```
The snippet above assumes that your Drupal root is in a directory called `web`. If your Drupal root is in a different directory, you will need to adjust the path to the patch file accordingly.
If you are not using Composer or `cweagans/composer-patches`, you will need to add the patch manually to your Drupal codebase. Instructions for how to do this can be found at https://www.drupal.org/patch/apply.

After you have added the patch to your composer file, you can install the recipe. Drupal recipes are available in core starting with Drupal 10.3.x. This recipe is installed like any other recipe. See: https://www.drupal.org/project/distributions_recipes for further information. 