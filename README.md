<div align="center">

# Webspark CI

[![CircleCI](https://circleci.com/gh/ASUWebPlatforms/webspark-ci.svg?style=shield)](https://circleci.com/gh/ASUWebPlatforms/webspark-ci)
[![Dashboard webspark-ci](https://img.shields.io/badge/dashboard-webspark_ci-yellow.svg)](https://dashboard.pantheon.io/sites/aec2f75f-35eb-41f8-abe7-95b292415259#dev/code)
[![Dev Site webspark-ci](https://img.shields.io/badge/site-webspark_ci-blue.svg)](https://dev-webspark-ci.ws.asu.edu)

To provide an automated, pull request-based development workflow to validate and build future releases of Webspark 2 (WS2) using continuous integration (CI).

[Background](#background) •
[Getting Started](#getting-started) •
[Local Development](#local-development) •
[Sprints](#sprints) •
[Deployment](#deployment) •
[Resources](#resources) •
[JIRA](https://asudev.jira.com/jira/software/c/projects/WS2/boards/3360)

</div>
<br>
<br>

# Background
[↑ Top](#webspark-ci)

This projects aims to provide an automated, pull request-based development workflow to validate and build future releases of [Webspark 2](https://brandguide.asu.edu/execution-guidelines/web/building-sites/webspark) (WS2) using continuous integration (CI).

## Our Approach

This project leverages the [Pantheon Build Tools](https://docs.pantheon.io/guides/build-tools) workflow in order to streamline development, testing, and deployment of the Webspark Drupal codebase.

This approach enables us to use [GitHub](https://github.com/ASUWebPlatforms) as our preferred Git provider, [CircleCI](https://app.circleci.com) for Continuous Integration, and [Pantheon](https://pantheon.io) Multidev environments for testing builds.

<br>
<br>

# Getting Started
[↑ Top](#webspark-ci)

When creaing a website on Pantheon that will use the Build Tools workflow, it is important to follow the instructions outlined in the Build Tools documentation. A brief summary of those instructions is provided below, along with example code we used to setup the Webspark CI project. In our examples, we will assume the use of GitHub and CircleCI.

## Installing Composer, Terminus and the Build Tools plugin

Review the following [Build Tools Prerequisites Guide](https://docs.pantheon.io/guides/build-tools/create-project/#prerequisites) to

1. Verify Composer is installed
2. Verify Terminus is installed
3. Verify the Terminus Build Tools Plugin is installed

## Generating GitHub and CircleCI access tokens (optional)

If you like, you can manually generate the GitHub and CircleCI access tokens that will be used to create the project in Pantheon. This step is optional, as the Build Tools Plugin will generate them as needed during the project creation process.

Review the following [Build Tools Token Generation Guide](https://docs.pantheon.io/guides/build-tools/create-project/#access-tokens-optional) to

1. Generate a GitHub access token
2. Generate a CircleCI access token

## Create a Build Tools project

Review the following [Build Tools Project Creation Guide](https://docs.pantheon.io/guides/build-tools/create-project/#create-a-build-tools-project) to

1. Create a new site on Pantheon using the Build Tools workflow

It is important to take note of all the available options you have when creating your project. Review the [Build Tools Plugin](https://github.com/pantheon-systems/terminus-build-tools-plugin) README for full options.

## Example commands

> The examples below assume the name `webspark-ci`

Create a new project using the default Pantheon Drupal distribution:

```bash
terminus build:project:create --team='Arizona State University' --org='ASUWebPlatforms' d9 webspark-ci
```

Create a new project using the existing Webspark upstream:

```bash
terminus build:project:create --team='Arizona State University' --org='ASUWebPlatforms' asuwebplatforms/webspark-release-testing webspark-ci
```

Rotate the access tokens used to create the project:

```bash
terminus build:project:repair webspark-ci
```

<br>
<br>

# Local Development
[↑ Top](#webspark-ci)

This workflow differs from a usual Pantheon workflow in that when developing locally, there really is no need for the Pantheon site itself to be cloned. The only use for the Pantheon site locally, is to pull down the database and files.

## Setting up a local development environment

> Although you may use whatever tool you choose, it is always a good idea to use the tool with better documentation!

We recommend the use of [DDEV](https://ddev.com) or [Lando](https://docs.lando.dev) for local Drupal development. Both will require [Docker](https://www.docker.com) to be installed.

- [DDEV installation](https://ddev.readthedocs.io/en/stable)
- [Lando installation](https://docs.lando.dev/getting-started/installation.html)

After your tool of choice is installed, you then need to setup that tool specifcally for Pantheon. This gives you the benefit of having Pantheon and Drupal specific tools pre-installed, as well as being able to match the Pantheon server configuration as closely as possible.

- [DDEV for Pantheon](https://ddev.readthedocs.io/en/stable/users/providers/pantheon)
- [Lando for Panteon](https://docs.lando.dev/pantheon)

***A note on DDEV:*** At this point, we only want to ensure the Pantheon machine token is added. The rest of the steps outlined in the article above do not apply specifcally for the `webspark-ci` project.

## Cloning the site locally

Once your local development environment is setup for Pantheon, you are ready to begin developing locally for the `webspark-ci` project. Remember, we do not need to use the Pantheon site for anything other than its database and files, so we will **not** need to pull the Pantheon site locally.

Clone the `webspark-ci` repo locally:

```bash
git clone git@github.com:ASUWebPlatforms/webspark-ci.git
```

Navigate to the repo, and install its dependencies via Composer:

```bash
cd webspark-ci
composer install
```

## Running the site locally

### Using DDEV

Initiate the repo as a Drupal project:

```bash
ddev init
ddev start
```

Since we already installed the dependencies, DDEV will automatically configure itself as a Drupal 9 project for us. When using the `ddev init` command, you simply need to hit `return` until you are prompted to run `ddev start`.

We now have a container for our `webspark-ci` project, so next it is time to pull down the database and files from the Pantheon site.

First, we need to update the default PHP version in the DDEV config to 8.1, since Webspark expects us to use that:

```yaml
# .ddev/config.yaml
php_version: "8.1"
```

Next, we need to tell DDEV which site in Pantheon to pull the database and files from. In `.ddev/providers`, you will find a file named `pantheon.yaml.example`. Copy the contents of this file into a new file called `pantheon.yaml`. Next, we will add the Webspark CI Pantheon site as our target site:

```yaml
# .ddev/providers/pantheon.yaml
environment_variables:
  project: webspark-ci.dev
```

Finally, we can pull the databse and files from the Pantheon site:

```bash
# Restart the container first since we changed the PHP version
ddev restart
# Establish a connection using our machine token
ddev auth ssh
# Pull the database and files
ddev pull pantheon
```

### Using Lando

Initiate the repo as a Drupal project:

```bash
lando init
lando start
```

<br>
<br>

# Sprints
[↑ Top](#webspark-ci)

Proin id arcu orci. Duis id massa at velit eleifend imperdiet eu eget nisl. Morbi diam velit, ornare vel tempus eget, rhoncus eu orci. Nullam pharetra quam vitae eleifend suscipit. Etiam blandit ante nec mi interdum imperdiet. Fusce gravida sem vitae mauris egestas feugiat. Aenean quis odio arcu. Nunc placerat nulla quis quam aliquet, a rhoncus magna maximus. Sed maximus leo quam, eget ornare massa accumsan sit amet. Suspendisse elit lorem, cursus eu libero ut, maximus ornare sapien. Aliquam sed ornare mauris. Nullam felis erat, viverra id ornare non, maximus elementum lacus. Integer porttitor porta convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris rutrum, est sit amet blandit eleifend, lacus leo pellentesque nibh, in auctor purus purus sed arcu.

<br>
<br>

# Deployment
[↑ Top](#webspark-ci)

Proin id arcu orci. Duis id massa at velit eleifend imperdiet eu eget nisl. Morbi diam velit, ornare vel tempus eget, rhoncus eu orci. Nullam pharetra quam vitae eleifend suscipit. Etiam blandit ante nec mi interdum imperdiet. Fusce gravida sem vitae mauris egestas feugiat. Aenean quis odio arcu. Nunc placerat nulla quis quam aliquet, a rhoncus magna maximus. Sed maximus leo quam, eget ornare massa accumsan sit amet. Suspendisse elit lorem, cursus eu libero ut, maximus ornare sapien. Aliquam sed ornare mauris. Nullam felis erat, viverra id ornare non, maximus elementum lacus. Integer porttitor porta convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris rutrum, est sit amet blandit eleifend, lacus leo pellentesque nibh, in auctor purus purus sed arcu.

<br>
<br>

# Resources
[↑ Top](#webspark-ci)

## Pantheon

[Pantheon Build Tools](https://docs.pantheon.io/guides/build-tools)

[Build Tools Plugin](https://github.com/pantheon-systems/terminus-build-tools-plugin)

## GitHub

[GitHub](https://github.com/ASUWebPlatforms)

## Local Development

[Docker](https://www.docker.com)

[DDEV](https://ddev.com)

[DDEV for Pantheon](https://ddev.readthedocs.io/en/stable/users/providers/pantheon)

[Lando](https://docs.lando.dev)

[Lando for Pantheon](https://docs.lando.dev/pantheon)
