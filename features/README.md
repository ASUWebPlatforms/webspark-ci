# Behat behavioral testing

This `features` folder contains the tests which are used by Behat to ensure that Webspark is working properly. There is a `bootstrap` directory which contains a file named `FeatureContext.php`. This file is populated with custom functionality which can be used by Behat in the `.feature` files within this directory. These `.feature` files are written in Gherkin, which is a human readable language.

Setting up Behat testing can be challenging. Please refer to our getting started document to get your local development environment (using DDEV) ready for testing with Behat. (https://docs.google.com/document/d/1k2IZuaEFSdX8I-uGota2v7XXLwDWxKyGImBsrnDz4gE/edit?usp=sharing)

After you have followed the steps for getting set up, you can run Behat tests on your local machine by doing the following:
1. Make sure your DDEV container is up and running
2. On your terminal, type `ddev . ./vendor/bin/behat` or `ddev exec ./vendor/bin/behat` to run all of the tests that have been defined.
3. You can target specific tests by name, or by file path, as described in the "getting up and running" document.

## Recommended workflow
While you can run the tests as soon as you get DDEV set up to do it, we have some recommendations to help ensure your greatest probability of success.
1. Before running any tests, we highly recommend pulling the latest version of the Pantheon database. You can do this from the terminal with `ddev pull pantheon --skip-files -y`. For this to work, you will need to have previously [set your DDEV up to pull from Pantheon](https://ddev.readthedocs.io/en/latest/users/providers/pantheon/). I usually pull from the Live environment, but you may want to pull from a Sprint multidev, or Dev, depending on your use-case.
2. Once you have the latest database, you may need to ensure that it will work with your current codebase. Often, working locally, we are "ahead" of the targeted environment. So, you should run `ddev composer update`, `ddev drush updb`, and `ddev drush cr` to ensure that you have all of the necessary code items and an up-to-date database. You may or may not also need to import configurations, depending on the nature of your codebase.
3. A smart move at this point is to create a snapshot of your database, so if something goes wrong while testing, you can easily roll back. You can do this with `ddev snapshot`. You can name your snapshot, if you'd like. It's worth studying up on how DDEV snapshots work by reading `ddev snapshot --help`.
4. The main reason for creating a snapshot is because sometimes tests error out before completing. The nature of some of these tests is such that they alter the database. So, if your test errors out part-way through, the test may provide a "false positive" where the test will fail due to problems that have persisted in the database due to a previous test failure. Therefore, it is a good idea to ensure a "clean" environment before testing.
5. If any of your tests fail, it is a good idea to revert to your database snapshot with `ddev snapshot restore` before re-running any tests. After restoring your snapshot, you can try running the tests again, just to make sure you weren't affected by "false positive" failures.

## Troubleshooting
Sometimes it is instructive to watch the tests as they run, because it can help you pinpoint why a test may be failing. You can do this by navigating your browser to `https://[your-ddev-site-url]:7900` and entering the password "secret". Once you have gained access, you can start your tests from the terminal and watch them as they run. This is only possible if you make sure that your `behat.yml` file is set to ignore or remove any "headless" options.

Headless testing means that the test runs on a code-only level and does not render visually. Also, it is worth noting that some tests are built not to render visually. These use a text-based browser called Goutte. An easy way to determine if visual rendering is expected is by checking for an `@javascript` tag on the test(s). If that tag is present, "headful" monitoring is visually possible.
