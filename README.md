# eslint-config-trendmicro [![npm version](https://badge.fury.io/js/eslint-config-trendmicro.svg)](http://badge.fury.io/js/eslint-config-trendmicro) [![build status](https://travis-ci.org/trendmicro-frontend/eslint-config-trendmicro.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/eslint-config-trendmicro)

[![NPM](https://nodei.co/npm/eslint-config-trendmicro.png?downloads=true&stars=true)](https://www.npmjs.com/package/eslint-config-trendmicro)

This package provides .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

### eslint-config-trendmicro

1. Install the latest version of [eslint-config-trendmicro](https://github.com/trendmicro-frontend/eslint-config-trendmicro):
  ```sh
  npm install --save-dev eslint-config-trendmicro@latest
  ```

2. Ensure peerDependencies are installed with correct version numbers by running:
  ```sh
  npm info "eslint-config-trendmicro@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs -L1 npm install --save-dev
  ```

  Which produces and runs commands like this:

  ```sh
  npm install --save-dev eslint@^7.0.0
  npm install --save-dev eslint-plugin-import@latest
  npm install --save-dev eslint-plugin-jsx-a11y@latest
  npm install --save-dev eslint-plugin-react@latest
  ```

3. Add `"extends": "trendmicro"` to .eslintrc:
  ```json
  {
    "extends": "trendmicro",
    "parser": "@babel/eslint-parser",
    "env": {
      "browser": true,
      "node": true
    },
    "plugins": [
      "@babel"
    ],
    "rules": {
    }
  }
  ```
