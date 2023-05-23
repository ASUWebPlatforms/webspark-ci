# Managing Custom Dependencies and Patches

In order to provide better separation and management of custom dependencies and patches, we've introduced two new files:

- `custom-dependencies/composer.json`: For managing custom dependencies
- `custom-dependencies/patches.custom.json`: For managing your custom Drupal patches

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
2. Remove all patches from the root `composer.json` file, and move **only the ones you have added** into the new `custom-dependencies/patches.custom.json` file. The patches that were added by webspark have been already added to a different file.
3. Add, update, or remove patches in the `custom-dependencies/patches.custom.json` file as needed.
4. All webspark patches will now be tracked separately in `upstream-configuration/patches.webspark.json`, so you will not need to worry about clashes. But, you may want to check that file from time to time to see if you are trying to add a patch that already exists.
5. The `custom-dependencies/patches.custom.json` and `upstream-configuration/patches.webspark.json` files will be combined programmatically at runtime to dynamically create the `composer.patches.json` file. This file will now be ignored by git so that change-tracking will only happen on the two source files it is built from.

## Managing Dependencies Moving Forward

To manage your custom dependencies and patches moving forward, follow these steps:

### Custom Dependencies

1. Make changes to the `custom-dependencies/composer.json` file as needed.
2. Run `composer update` to apply the changes to your project.

### Drupal Patches

1. Make changes to the `custom-dependencies/patches.custom.json` file as needed.
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
