<?php

namespace WebsparkCustomScripts;

use Composer\IO\IOInterface;
use Composer\Script\Event;
use Composer\Util\Filesystem;
use Composer\Util\ProcessExecutor;

class CustomComposerScripts
{
  /**
   * Add a dependency to the custom-dependencies composer.json file.
   *
   * The custom-dependencies/composer.json is a place to put modules, themes
   * and other dependencies that will be specific to user sites created from
   * the upstream. Separating the site dependencies from the upstream dependencies
   * has the advantage that changes can be made to the upstream without causing
   * conflicts in the downstream sites.
   *
   * To add a dependency to your site:
   *
   *    composer custom-require drupal/modulename
   *
   * Then install the new dependency:
   *
   *    composer update
   */
  public static function customRequire(Event $event) {
    $io = $event->getIO();
    $composer = $event->getComposer();
    $arguments = $event->getArguments();

    $hasNoUpdate = array_search('--no-update', $arguments) !== false;

    // Remove --working-dir, --no-update and --no-install, if provided
    $arguments = array_filter($arguments, function ($item) {
      return
        (substr($item, 0, 13) != '--working-dir') &&
        ($item != '--no-update') &&
        ($item != '--no-install');
    });

    // Escape the arguments passed in.
    $args = array_map(function ($item) {
      return escapeshellarg($item);
    }, $arguments);

    // Run `require` with '--no-update' if there is no composer.lock file,
    // and without it if there is.
    $addNoUpdate = $hasNoUpdate || !file_exists('custom-dependencies/composer.lock');

    if ($addNoUpdate) {
      $args[] = '--no-update';
    } else {
      $args[] = '--no-install';
    }

    // Insert the new projects into the custom-dependencies composer.json
    // without writing vendor & etc to the custom-dependencies directory.
    $cmd = "composer --working-dir=custom-dependencies require " . implode(' ', $args);
    $io->writeError($cmd . PHP_EOL);
    passthru($cmd, $statusCode);

    if ($statusCode) {
      throw new \RuntimeException("Could not add dependency to custom dependencies.");
    }

    $io->writeError('custom-dependencies/composer.json updated.');

    return $statusCode;
  }
}
