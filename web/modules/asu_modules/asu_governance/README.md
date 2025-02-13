# ASU Governance

## Introduction
The asu_governance module is intended to provide Enterprise Technology with a way to manage the governance of Drupal sites on the Acquia platform.
This module provides the following:

- New site roles and permissions
  - Site Builder
  - Content Editor
- A curated "ASU Modules" interface to replace the stock "Extend" modules page in Drupal. This will allow Site Administrators to limit the ability of Site Builders to enable/disable and configure only the modules that have been approved by Enterprise Technology.
- A base permission set for the new roles, and function to dynamically update the permissions of the "Site Builder" based on which of the "ASU Modules" are enabled.

## Requirements
This module is intended to be used only on ASU Drupal sites hosted on the Acquia platform.

## Installation
Install as you would normally install a contributed Drupal module.
See: https://www.drupal.org/node/895232 for further information.

## Configuration
- Site Builders will have access to the "ASU Modules" page in the Administration menu.
- Site Administrators will have access to the "ASU Governance settings" page located in the System submenu of the Configuration menu.
