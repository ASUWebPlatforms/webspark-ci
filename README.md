<div align="center">
<h1 id="webspark-ci">Webspark CI</h1>

[![CircleCI](https://circleci.com/gh/ASUWebPlatforms/webspark-ci.svg?style=shield)](https://circleci.com/gh/ASUWebPlatforms/webspark-ci)
[![Dashboard webspark-ci](https://img.shields.io/badge/dashboard-webspark_ci-yellow.svg)](https://dashboard.pantheon.io/sites/aec2f75f-35eb-41f8-abe7-95b292415259#dev/code)
[![Dev Site webspark-ci](https://img.shields.io/badge/site-webspark_ci-blue.svg)](https://dev-webspark-ci.ws.asu.edu)

To provide an automated, pull request-based development workflow to validate and build future releases of Webspark 2 (WS2) using continuous integration (CI).

[Background](#background) •
[Sprints](#sprints) •
[Getting Started](#getting-started) •
[Local Development](#local-development) •
[Code Quality](#code-quality) •
[Resources](#resources) •
[JIRA Board](https://asudev.jira.com/jira/software/c/projects/WS2/boards/3360)

</div>
<br>
<br>

# Background

This project aims to provide an automated, pull request-based development workflow to validate and build future releases of [Webspark 2](https://brandguide.asu.edu/execution-guidelines/web/building-sites/webspark) (WS2) using continuous integration (CI).

## Our Approach

This project leverages the [Pantheon Build Tools](https://docs.pantheon.io/guides/build-tools) workflow to streamline the development, testing, and deployment of the Webspark Drupal codebase.

This approach enables us to use [GitHub](https://github.com/ASUWebPlatforms) as our preferred Git provider, [CircleCI](https://app.circleci.com) for Continuous Integration, and [Pantheon](https://pantheon.io) Multidev environments for testing builds.

## Pantheon Build Tools

The benefit of the Pantheon Build Tools workflow is its automated deployment process between the GitHub repository and the Pantheon website. Previously, developers had to create and manage their own Pantheon sites to test their work. The Pantheon Build Tools workflow allows for a centralized site for all team members to use and contribute to. Below, you will find a simplified breakdown of the Build Tools [Pull Request Workflow](https://docs.pantheon.io/guides/build-tools/pr-workflow):

1. **Pull Request Issued:** A developer makes changes to a task branch in their local environment and pushes these changes to the remote `webspark-ci` repository. They then create a pull request (PR) to propose merging these changes into the sprint branch.
2. **Continuous Integration (CI) Kicks In:** Upon the creation of the PR, the continuous integration (CI) process starts via CircleCI. CircleCI is configured to automatically pick up the PR event and initiate a series of tasks defined in a configuration file within the project, which Pantheon has already bootstrapped for us.
3. **Automated Build Process:** CircleCI first checks out the proposed changes from the task branch, then performs tasks such as installing dependencies, compiling code, running unit tests, etc. The base configuration simply runs Composer, however, we have the flexibility to expand upon this process as we see fit.
4. **Creation of the Pantheon Multidev:** If the build process is successful, CircleCI then uses Terminus to create a new Multidev environment in the `webspark-ci` Pantheon site, using the database and files from the `dev` environment. The Multidev will be named after the PR.
5. **Automated Testing:** Depending on the project's configuration, CircleCI may then perform additional automated tests in the new Multidev environment. Pantheon provides Behat testing and visual regression testing by default, but we can expand these to include performance tests, accessibility tests, and more.
6. **PR Review:** Once the Multidev environment is ready, CircleCI updates the original PR with the URL of the new Multidev. This allows the team to review the proposed changes in a fully functional environment. Additional commits made to the task branch for the PR will trigger the build process, ensuring the Multidev is always using the most up-to-date code.
7. **Deletion of the Pantheon Multidev:** When the PR is merged into the sprint branch and closed, CircleCI will automatically destroy the Multidev environment for that PR.

<div align="right"><a href="#webspark-ci">↑ Top</a></div>
<br>
<br>

# Sprints

Arizona State University follows [Agile](https://www.atlassian.com/agile) software development principles. As such, teams work in [sprints](https://www.atlassian.com/agile/scrum/sprints) to accomplish tasks in a timely, but orderly fashion. Webspark sprints are usually two weeks in length, and each sprint has a set number of tasks assigned to it.

## How sprints fit into the Webspark CI workflow

Each sprint has a name, often, it is simply the sprint number (ex: Sprint 39). To keep development organized, the Webspark CI GitHub repository will have a branch created for each specific sprint. So, if we are currently in Sprint 39, there will also be a `ws2-sprint-39` branch. This sprint branch will be used by all developers on the team as the base branch. All new branches should be created from this base branch, and all Pull Request(s) (PR) should be merged into this base branch. When the sprint is complete, the base branch will then be merged into the `master` branch via its own Pull Request.

### Typical developer workflow

> For this example, let's assume we are working on Sprint 39 and your task is WS2-1596

As a developer working on the Webspark CI project, here is a typical workflow:

1. `Sprint 39` is started in JIRA, and tasks are assigned to you.
2. You begin your first task, `WS2-1596`.
3. You fetch the `webspark-ci` repo from GitHub, gaining access to the `origin/ws2-sprint-39` branch.
4. You create a new branch from `origin/ws2-sprint-39`, and name it after your task using all lowercase letters: `ws2-1596`.
5. You complete your work, and push your branch to the repo, creating the `origin/ws2-1596` branch.
6. You create a new PR, looking to merge `origin/ws2-1596` into `origin/ws2-sprint-39`, and assign the `webspark-maintainers` group as Reviewers.
7. The build process deploys a new Pantheon multidev named after your PR, ready for other team members to review.

<div align="right"><a href="#webspark-ci">↑ Top</a></div>
<br>
<br>

# Getting Started

When creating a website on Pantheon that will use the Build Tools workflow, it is important to follow the instructions outlined in the Build Tools documentation. A summary of those instructions is provided below, along with the example code we used to set up the Webspark CI project. In our examples, we will assume the use of GitHub and CircleCI.

## Installing Composer, Terminus, and the Build Tools plugin

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

It is important to take note of all the available options you have when creating your project. Review the [Build Tools Plugin](https://github.com/pantheon-systems/terminus-build-tools-plugin) for full options.

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

<div align="right"><a href="#webspark-ci">↑ Top</a></div>
<br>
<br>

# Local Development

This workflow differs from a usual Pantheon workflow in that when developing locally, there is no need for the Pantheon site itself to be cloned. The only use for the Pantheon site locally is to pull down the database and files.

## Setting up a local development environment

We recommend the use of [DDEV](https://ddev.com) for local Drupal development. DDEV requires [Docker](https://www.docker.com) to be installed.

- [DDEV installation](https://ddev.readthedocs.io/en/stable)

After you have installed DDEV, next you want it setup for Pantheon. This gives you the benefit of having Pantheon and Drupal-specific tools pre-installed, as well as being able to match the Pantheon server configuration as closely as possible.

- [DDEV for Pantheon](https://ddev.readthedocs.io/en/stable/users/providers/pantheon)

At this point, we only want to ensure the Pantheon machine token is added. The rest of the steps outlined in the article above do not apply specifically to the `webspark-ci` project.

## Cloning the site locally

Once your local development environment is set up for Pantheon, you are ready to begin developing locally for the `webspark-ci` project. **Remember, we do not need to use the Pantheon site for anything other than its database and files, so we will not need to pull the Pantheon site locally.**

Clone the `webspark-ci` repo:

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
ddev config
ddev start
```

Since we already installed the dependencies, DDEV will automatically configure itself as a Drupal 9 project for us. When using the `ddev config` command, you simply need to continue until you are prompted to run `ddev start`.

We now have a container for our `webspark-ci` project, so next it is time to pull down the database and files from the Pantheon site.

First, in the DDEV config we need to update the PHP version to `8.3`, and the MariaDB version to `10.6` since Webspark expects us to use those:

```yaml
# .ddev/config.yaml
php_version: "8.3"
database:
  type: mariadb
  version: "10.6"
```

Next, we need to tell DDEV which site in Pantheon to pull the database and files from. In `.ddev/providers`, you will find a file named `pantheon.yaml.example`. Copy the contents of this file into a new file called `pantheon.yaml`. Next, we will add the Webspark CI Pantheon site as our target site:

```yaml
# .ddev/providers/pantheon.yaml
environment_variables:
  project: webspark-ci.dev
```

Finally, we can pull the database and files from the Pantheon site:

```bash
# Restart the container first since we changed the PHP version
ddev restart

# Establish a connection using our machine token
ddev auth ssh

# Pull the database and files
ddev pull pantheon
```

<div align="right"><a href="#webspark-ci">↑ Top</a></div>
<br>
<br>

# Code Quality

## Playwright

We use [Playwright](https://playwright.dev) for front end testing. We have installed the [Playwright for DDEV add-on](https://github.com/Lullabot/ddev-playwright) to aid in the process. See the Playwright documentation for how to write tests.

### What Playwright does and does not do

Playwright is an end-to-end framework, but our use case is to test the user experience. In a nutshell, we will use it to mimic user operations, to be able to see what users see on the front and back end of Webspark sites. Although we do have the ability to get preety advanced with things such as testing specific API calls or taking snapshots for visual regression, we will not utuilize those features just yet. For now, we simply use it as a bot for generating and testing content.

The easiest way to put it is that if a user can do it on the front end (in the browser), we want to use Playwright to verufy it works. We do need to be conscious of _what_ we are writing tests for however. Do not write tests for anything that Drupal core should already have a test for, and do not write a test for anything that UDS should already test for. We only want to test what _Webspark_ is responsible for.

Finally, do not use Playwright to attempt to test for purely server side operations. For example, do not test that upon user login a particular Drupal service gets called and performs some operation, or that some Drupal query is executed via the Drupal database API. If something happens purely in the PHP world, a tool like PHPUnit is the correct tool for that job.

### Getting the site ready for Playwright

We do not want any existing content in the database before we run our Playwright tests. This is because we do not want anything that might interfere with our tests (old database hooks that failed to run, existing garbage content or users, etc). We want to start with a clean slate and seed the website with our own content.

#### Wipe the existing databse (if not using a clean install)

Lets first ensure we are using a clean install of the site.

```bash
ddev drush site:install
```

#### Adding a sample user

Let's first create a generic admin user. This user is most helpful to use when using tools such as the Playwright Codegen.

```bash
# Create an admin user for Playwright
ddev drush ucrt playwright --mail='pw@example.com' --password='playwright'
ddev drush urol 'administrator' playwright
```

#### Adding sample media

Visit `/media/add`, and add media for each available media type except Audio and Document (Webspark does not use those by default). Name all of them `sample`, and for images provide the alt text of `sample image` as well as for captions use `sample caption`. For remote videos, be sure to choose an appropriate YoutTube video, prefereably one from the offical [Arizona State University](https://www.youtube.com/@arizonastateuniversity) channel. Here is a good one to use: [We build our future](https://www.youtube.com/watch?v=-pEMBc1mZZA&t=54s). I chose this one because it is short and has a simple title.

#### Adding sample content

You can do this if you want to, but the point is to test what the user will experience within Webspark. Since it is the users that will be creating content, we will want to also have the content created via the test itself instead of having pre-made content to test on. This allows us to test that our Webspark configurations give the editing experience we expect, as well as the visual experience we expect.

### Installing Playwright

#### Installing Playwright (from scratch)

Follow the steps below if you will be writing tests for the first time.

```bash
ddev add-on get Lullabot/ddev-playwright
ddev restart
mkdir -p test/playwright
# When running the command below, use JavaScript and also install Playwright operating system dependencies
ddev exec -d /var/www/html/test/playwright yarn create playwright
# Review the generated playwright.config.js file and make any necessary changes first
ddev install-playwright
```

#### Installing Playwright

Otherwise, ensure Playwright is ready to run by running the following command:

```bash
ddev install-playwright
```

### Running Playwright tests

Run Playwright tests using the CI:

```bash
# Run all tests for all browsers and projects
ddev playwright test

# Run a specific test file(s)
# Ex: ddev playwright test homepage.spec.js charts.spec.js
ddev playwright test <file> <file>

# Run a test(s) by tag
# Ex: ddev playwright test @desktop
ddev playwright test --grep <tag>
# You can also skip a tag
ddev playwright test --grep-invert <tag>

# Run any tests via keyword(s)
# Ex: ddev playwright test footer chart
ddev playwright test <keyword> <keyword>

# Run a test with a specific title
# Ex: ddev playwright test -g "search from 404"
ddev playwright test -g "<title>"

# Run tests for a specific project
# Ex: ddev playwright test --project firefox
ddev playwright test --project <project>
```

Run Playwright tests using the UI:

```bash
# Open the UI from https://webspark-ci.ddev.site:8444
# Username is your local (computer home folder) username. Password is 'secret'.
ddev playwright test --ui
```

Run Playwright tests and watch them run in the browser:

```bash
# Open the UI from https://webspark-ci.ddev.site:8444
# Username is your local (computer home folder) username. Password is 'secret'.
ddev playwright test --headed
```

Generate Playwright tests by browsing:

> See [the docs](https://playwright.dev/docs/codegen#generate-tests-with-the-playwright-inspector) for all Codegen options

```bash
# Open the UI from https://webspark-ci.ddev.site:8444
# Username is your local (computer home folder) username. Password is 'secret'.
ddev playwright codegen

# You can also open to a URL
# ddev playwright codegen http://webspark-ci.ddev.site
# Note the http vs https here
ddev playwright codegen <url>

# You can also tell it the size of the viewport to use
# ddev playwright codegen http://webspark-ci.ddev.site --viewport-size=1440,720
ddev playwright codegen --viewport-size=<width>,<height>
```

View HTML or other Playwright reports:

```bash
# Open the report from https://webspark-ci.ddev.site:9324
# Note the port is changed from what is given in the Playwright prompt
ddev playwright show-report --host=0.0.0.0
```

### Tips for writing Playwright tests

1. Read the Playwright documentation before attempting to write tests. There **is** a small learning curve.
2. Use accessible locators. The `getByRole` locator is your friend.
3. Take advantage of implied visibility. For example, there is no reason to test `toBeVisible` on an element targeted by `getByText('foo')` because the element already needs to be visible in order for Playwright to target it to begin with.
4. Writing tests for our codebase will highlight our weaknesses **very** fast. Take note of what we need to improve, and actually take action on it.
5. Think about what you are actually trying to test. Do not test things that should have already been tested in Drupal core or UDS. Only test what Webspark has added.
6. You will spend the most amount of time pinpointing the correct locators you want to use. The codegen won't always get what you need the first time around. Use the accessibility tools in your browsers dev tools for help.
7. Some elements in the Layout Builder are dynamicly rendered, so you need to be sure that your Playwright locator uses a targeting method with that in mind. In these cases, the `drupal-data-selector` attribute is helpful.
8. If you need to use Drush in your test, you will need to build the `page` variable manually.
9. Sometimes Drupal is too slow for Playwright. When creating and testing your tests, you may find that some commands fail because either the page closes or because the targeted element does not exist on the page yet. In those cases, you will need to manually tell Playwright to wait for a few seconds to give everything time to load.
10. When using Layout Builder, you need to be aware of conditional fields. If fields require AJAX, be aware that you may need to manually tell Playwright to wait for the call, or you may need to mimic key presses to trigger the AJAX call.
11. When using the codegen, try to keep the virtual browser size reasonable. I have found that it can freeze Playwright if the resolution is too large.

## PHPUnit

Coming soon.

## PHPStan

Coming soon.

## PHPCS

Coming soon.

<div align="right"><a href="#webspark-ci">↑ Top</a></div>
<br>
<br>

# Resources

- [Agile](https://www.atlassian.com/agile)
- [GitHub](https://github.com/ASUWebPlatforms)
- [Docker](https://www.docker.com)
- [CircleCI](https://circleci.com)
- [Pantheon Build Tools](https://docs.pantheon.io/guides/build-tools)
- [Build Tools Plugin](https://github.com/pantheon-systems/terminus-build-tools-plugin)
- [DDEV](https://ddev.com)
- [DDEV for Pantheon](https://ddev.readthedocs.io/en/stable/users/providers/pantheon)
- [Playwright](https://playwright.dev)
- [Playwright for DDEV](https://github.com/Lullabot/ddev-playwright)

<div align="right"><a href="#webspark-ci">↑ Top</a></div>
<br>
<br>
