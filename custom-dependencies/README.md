# Managing Custom Dependencies and Patches

In order to provide better separation and management of custom dependencies and patches, we've introduced two new files:

- `custom-dependencies/composer.json`: For managing custom dependencies
- `composer.patches.json`: For managing Drupal patches

## Why are we making these changes?

These changes allow for better organization and separation of concerns within the project. By isolating custom dependencies and patches in separate files, it reduces the likelihood of merge conflicts when updating the upstream and provides a clearer structure for managing project-specific dependencies and patches.

---

## Implementing the changes

### Custom Dependencies

1. Locate the `custom-dependencies/composer.json` file in the project.
2. Remove all custom dependencies out of the root `composer.json` file, and move them into `custom-dependencies/composer.json`.
3. Add, update, or remove custom dependencies from the "require" section of the `custom-dependencies/composer.json` file as needed.

### Drupal Patches

1. Locate the `composer.patches.json` file in the project root.
2. Remove all custom patches out of the root `composer.json` file, and move them into `composer.patches.json`.
3. Add, update, or remove patches in the "patches" section of the `composer.patches.json` file as needed.
4. As we may need to add patches periodically, we recommend that you place your patches at the beginning of this file.

## Managing Dependencies Moving Forward

To manage your custom dependencies and patches moving forward, follow these steps:

### Custom Dependencies

1. Make changes to the `custom-dependencies/composer.json` file as needed.
2. Run `composer update` to apply the changes to your project.

### Drupal Patches

1. Make changes to the `composer.patches.json` file as needed.
2. Run `composer update` to apply the patches to your project.

---

## Custom Require Composer Command

In order to simplify the process of adding custom dependencies and to maintain the separation between the upstream and custom dependencies, we've introduced a new Composer command called `custom-require`. This command adds the specified package to the `custom-dependencies/composer.json` file and updates the dependencies in the `custom-dependencies` directory.

### Why is this needed?

The `custom-require` command ensures that users can easily add custom dependencies without directly modifying the root `composer.json` file. It reduces the chances of merge conflicts and provides a seamless experience for managing custom dependencies.

### How to use it?

To add a new dependency, run the following commands from the project root:

```sh
composer custom-require drupal/module
composer update
```

Replace `drupal/module` with the actual package name you want to require.

## Custom Remove Composer Command

Similar to the `custom-require` command to add dependencies, we have also added a `custom-remove` command to remove those dependencies.

### How to use it?

To remove a dependency from your `custom-dependencies/composer.json` file, run the following commands from the project root:

```sh
composer custom-remove drupal/module
composer update
```

Replace `drupal/module` with the actual package name you want to require.

By following these guidelines, you'll ensure a consistent and organized approach to managing your custom dependencies and patches within your project.
