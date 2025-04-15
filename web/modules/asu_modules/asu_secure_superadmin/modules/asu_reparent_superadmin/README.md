# ASU Reparent SuperAdmin

## Introduction
The `asu_reparent_superadmin` module is intended to provide Enterprise Technology with a tool to ...

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
                "#3135592: Cannot implement a custom user cancellation method": "web/modules/contrib/asu_secure_superadmin/modules/asu_reparent_superadmin/patch/user-module-3135592-2241mr-c39.patch"
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
