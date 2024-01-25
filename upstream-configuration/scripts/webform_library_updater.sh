#!/bin/bash

# Exit immediately on errors, and echo commands as they are executed.
set -ex

cd web
echo "Running 'drush webform:composer:update'"
drush webform:composer:update -y
