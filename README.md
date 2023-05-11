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

This projects aims to provide an automated, pull request-based development workflow to validate and build future releases of [Webspark 2](https://brandguide.asu.edu/execution-guidelines/web/building-sites/webspark) (WS2) using continuous integration (CI).

## Our Approach

This project leverages the [Pantheon Build Tools](https://docs.pantheon.io/guides/build-tools) workflow in order to streamline development, testing, and deployment of the Webspark Drupal codebase.

This approach enables us to use [GitHub](https://github.com/ASUWebPlatforms) as our preferred Git provider, [CircleCI](https://app.circleci.com) for Continuous Integration, and [Pantheon](https://pantheon.io) Multidev environments for testing builds.

<div align="right"><a href="#webspark-ci">↑ Top</a></div>
<br>
<br>

# Getting Started

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

<div align="right"><a href="#webspark-ci">↑ Top</a></div>
<br>
<br>

# Local Development

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

TODO: Review https://docs.lando.dev/getting-started/first-app.html
<div align="right"><a href="#webspark-ci">↑ Top</a></div>
<br>
<br>

# Sprints

Arizona State University follows [Agile](https://www.atlassian.com/agile) software development principles. As such, teams work in [Sprints](https://www.atlassian.com/agile/scrum/sprints) to accomplish tasks in a timely, but orderly fashion. Webspark sprints are usually two weeks in length, and each sprint has a set number of tasks assigned to it.

## How sprints fit into the Webspark CI workflow

Each sprint has a name, usually it is simply the sprint number (ex: Sprint 39). To keep development organized, the Wespark CI GitHub repository will have a branch created for each specific sprint. So, if we are currently in Sprint 39, there will also be a `ws2-sprint-39` branch. This sprint branch will be used by all developers on the team as the base branch. All new branches should be created from this base branch, and all Pull Request(s) (PR) should be merged into this base branch. When the sprint is complete, the base branch will then be merged into the `master` branch via its own Pull Request.

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

# Deployment

The benefit of the Pantheon Build Tools workflow is its automated deployment process between the GitHub repository and the Pantheon website. Previously, developers had to create and manage their own Pantheon sites to test their work in. The Pantheon Build Tools allows for a centralized site for all team members to use and contribute to. Below you will find a simplified breakdown of the [Pull Request Workflow](https://docs.pantheon.io/guides/build-tools/pr-workflow):

1. **Pull Request Issuance:** A developer makes changes to a task branch in their local environment and pushes these changes to the remote `webspark-ci` repository. They then create a pull request (PR) to propose merging these changes into the sprint branch.
2. **Continuous Integration (CI) Kicks In:** Upon the creation of the PR, the continuous integration (CI) process starts via CircleCI. CircleCI is configured to automatically pick up the PR event and initiate a series of tasks defined in a configuration file within the project, which Pantheon has already bootstrapped for us.
3. **Automated Build Process:** CircleCI first checks out the proposed changes from the task branch, then it performs tasks such as installing dependencies, compiling code, running unit tests, and more. The base configuration simply runs Composer, however, we have the flexibilty to expanded upon this process as we see fit.
4. **Creation of the Pantheon Multidev:** If the build process is successful, CircleCI then uses Terminus to create a new Multidev environment in the `webspark-ci` Pantheon site, using the database and files from the `dev` environment. The Multidev will be named after the PR.
5. **Automated Testing:** Depending on the project's configuration, CircleCI may then perform additional automated tests in the new Multidev environment. Pantheon provides Behat testing and visual regression testing by default, but we can expand these to include performance tests, accessibility tests, and more.
6. **PR Update and Review:** Once the Multidev environment is ready, CircleCI updates the original PR with the URL of the new Multidev. This allows the team to review the proposed changes in a fully functional environment. Additional commits made to the task branch for the PR will trigger the build process, ensuring the Multidev is always using the most up to date code.
7. **Deletion of the Pantheon Multidev:** When the PR is merged into the sprint branch and closed on GitHub, CircleCI will automatically destroy the Multidev environment for that PR.

<div align="right"><a href="#webspark-ci">↑ Top</a></div>
<br>
<br>

# Resources

## Pantheon

[Pantheon Build Tools](https://docs.pantheon.io/guides/build-tools)

[Build Tools Plugin](https://github.com/pantheon-systems/terminus-build-tools-plugin)

<br>

## GitHub

[GitHub](https://github.com/ASUWebPlatforms)

<br>

## Local Development

[Docker](https://www.docker.com)

[DDEV](https://ddev.com)

[DDEV for Pantheon](https://ddev.readthedocs.io/en/stable/users/providers/pantheon)

[Lando](https://docs.lando.dev)

[Lando for Pantheon](https://docs.lando.dev/pantheon)

<br>

## Agile

[Agile](https://www.atlassian.com/agile)

<div align="right"><a href="#webspark-ci">↑ Top</a></div>
