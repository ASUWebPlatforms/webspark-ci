# ASU Secure SuperAdmin

## Introduction
The `asu_secure_superadmin` module is intended to provide Enterprise Technology with a tool to secure the user1 account in Drupal sites on the Acquia platform.
This module does the following:

- Copies the user1 account to a new account
- Changes the user1 account to a new username (etsuper) and randomized password
- Disables the user1 account
- Creates a new user account with the username and content of the original user1 account
- Migrates the content of the original user1 account to the new account

## Requirements
In order for this module to work properly, it requires a patch to be applied to the Drupal core's user module prior to installation.
The patch is targeted for `Drupal 10.3.11` and can be found in the `patch` directory of this module. If your version
of Drupal is different, you may need to [re-roll](https://www.drupal.org/docs/develop/git/using-git-to-contribute-to-drupal/rerolling-patches) the patch for your version of Drupal.
This module is intended to be used only on ASU Drupal sites hosted on the Acquia platform.

## Installation
If you are using a Composer workflow and have the `cweagans/composer-patches` package installed, add the patch to your composer file like so:
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

After successfully applying the core patch, install this module as you would normally install a contributed Drupal module.
See: https://www.drupal.org/node/895232 for further information.

## Configuration
No special configuration is needed for this module. Its functionality is automatically enabled and run on module installation.
