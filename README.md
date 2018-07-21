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
  npm install --save-dev eslint@^5.2.0
  npm install --save-dev eslint-plugin-import@^2.13.0
  npm install --save-dev eslint-plugin-jsx-a11y@^6.1.1
  npm install --save-dev eslint-plugin-react@^7.10.0
  ```

3. Add `"extends": "trendmicro"` to .eslintrc:
  ```json
  {
    "extends": "trendmicro",
    "env": {
      "browser": true,
      "node": true
    }
  }
  ```
  
## Notes
  
At the moment, you will need to use [babel-eslint](https://github.com/babel/babel-eslint) if you use stuff like class properties, decorators, types.
  
### babel-eslint

1. Install the latest version of [babel-eslint](https://github.com/babel/babel-eslint):
  ```sh
  npm install --save-dev babel-eslint@latest
  ```
  
2. Update .eslintrc with Babel parser support:
  ```json
  {
    "extends": "trendmicro",
    "parser": "babel-eslint",
    "env": {
      "browser": true,
      "node": true
    }
  }
  ```
