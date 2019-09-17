# Drupal Switzerland

[![Build Status](https://travis-ci.com/drupal-switzerland/drupal-ch.svg?branch=master)](https://travis-ci.com/drupal-switzerland/drupal-ch)

This project is maintained using Composer and built on [Silverback](https://github.com/AmazeeLabs/silverback).

For Drupal+Composer related information see:
- https://github.com/drupal-composer/drupal-project
- https://www.drupal.org/node/2471553
- https://github.com/AmazeeLabs/d8-starter-composer#readme

## Project info

URLs:
- Local: http://drupal-ch.docker.amazee.io
- Prod: https://nginx-drupal-ch-master.ch.amazee.io

Storybook:
- Master: https://storybook-drupal-ch-master.ch.amazee.io/

Lagoon UI: https://ui-lagoon-master.ch.amazee.io/project?name=drupal-ch

Development workflow:
- Create a feature branch from `master`
- Write code, test locally
- Create a Pull Request against `master`

## Project Setup

There are two ways to run the project:
1. `Docker with Lagoon`
2. `Local PHP server`

Which one to use? `Docker with Lagoon` is the most reliable way to develop. `Local PHP server` is currently used for running automated testing. Use whichever way you are more comfortable with.

### Docker with Lagoon

- Prerequisites
  - Make sure you have the latest [PHP](http://php.net/manual/en/install.php) installed
  `php --version`
  - Make sure you have [Composer](https://getcomposer.org/) installed
  `composer --version`
- Setup
  - Install dependencies
  `composer install`
  - Start [Docker](https://www.docker.com)
  - Start [Pygmy](https://docs.amazee.io/local_docker_development/pygmy.html)
  `pygmy up`
  - Build the containers
  `docker-compose build`
  (you need to run this only once, but you may need to re-run it if there are changes to Lagoon setup)
  - Start the containers
  `docker-compose up -d`
  - SSH into the `cli` container
  `docker-compose exec cli bash`
  - Get master database
  `drush sql-sync @lagoon.master @self`
  - Build webpack libraries
  `drush webpack:build`

### Local PHP server

- Prerequisites
  - Make sure you have installed and configured [direnv](https://direnv.net/) (don't forget about the [setup](https://direnv.net/index.html#setup) for your shell). Here is how it should look in case of a correct installation:
    ```
    me@local:~/Workspace $ cd drupal-ch/
    direnv: error .envrc is blocked. Run `direnv allow` to approve its content.
    me@local:~/Workspace/drupal-ch $ direnv allow
    direnv: loading .envrc
    direnv: export +CYPRESS_BASE_URL ... +SB_TEST_CONTENT ~PATH
    me@local:~/Workspace/drupal-ch $ cd ..
    direnv: unloading
    me@local:~/Workspace $ cd drupal-ch/
    direnv: loading .envrc
    direnv: export +CYPRESS_BASE_URL ... +SB_TEST_CONTENT ~PATH
    ```
  - Make sure you have [PHP7](http://php.net/manual/en/install.php) meeting [Drupal requirements](https://www.drupal.org/docs/8/system-requirements/php-requirements) installed
  `php --version`
  - Make sure you have [Composer](https://getcomposer.org/) installed
  `composer --version`
  - Make sure you have [NPM](https://docs.npmjs.com/cli/install) installed
  `npm --version`
- Setup
  - Install dependencies
  `composer install`
  - When switching to the project root for the first time, you should see this:
  ``direnv: error .envrc is blocked. Run `direnv allow` to approve its content.``
  - Run `direnv allow` (it will copy `.env.example` to `.env`, and load env vars)
  - Run `silverback setup` to initialize SQLite database and install Drupal from the existing configuration. This has to be done at least once. If there are issues with the command, try to run `silverback clear-cache` first.
  - Run `drush webpack:build` to build Drupal module libraries
  - Run `npm run build-library` to build frontend
  - Start the webserver with `drush serve`

## Frontend
Components are developed in [Storybook](https://storybook.js.org/), see [Silverback docs](https://amazeelabs.github.io/silverback/development/storybook.html#using-the-theme) for more information.

You can run Storybook locally with `npm run storybook`.
