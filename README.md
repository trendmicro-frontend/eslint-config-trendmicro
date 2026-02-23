# eslint-config-trendmicro [![npm version](https://badge.fury.io/js/eslint-config-trendmicro.svg)](http://badge.fury.io/js/eslint-config-trendmicro) [![build status](https://travis-ci.org/trendmicro-frontend/eslint-config-trendmicro.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/eslint-config-trendmicro)

[![NPM](https://nodei.co/npm/eslint-config-trendmicro.png?downloads=true&stars=true)](https://www.npmjs.com/package/eslint-config-trendmicro)

This package provides an ESLint flat config as an extensible shared configuration.

> **Note:** v4+ requires ESLint v9 and uses the [flat config](https://eslint.org/docs/latest/use/configure/configuration-files) format (`eslint.config.js`). For ESLint v7/v8 with `.eslintrc`, use v3.x.

## Requirements

- Node.js >= 20
- ESLint >= 9

## Usage

1. Install the latest version of [eslint-config-trendmicro](https://github.com/trendmicro-frontend/eslint-config-trendmicro):
  ```sh
  npm install --save-dev eslint-config-trendmicro@latest
  ```

2. Install the required peer dependencies:
  ```sh
  npm install --save-dev eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
  ```

3. Create an `eslint.config.js` (or `eslint.config.mjs`) in your project root:

  **ESM (`eslint.config.js` with `"type": "module"` in package.json, or `eslint.config.mjs`):**
  ```js
  import trendmicroConfig from 'eslint-config-trendmicro';

  export default [
    ...trendmicroConfig,
    {
      // your project-specific overrides
      rules: {},
    },
  ];
  ```

  **CommonJS (`eslint.config.cjs`):**
  ```js
  const trendmicroConfig = require('eslint-config-trendmicro');

  module.exports = [
    ...trendmicroConfig,
    {
      // your project-specific overrides
      rules: {},
    },
  ];
  ```

### Customizing Language Options

You can override `languageOptions` for your environment:

```js
import trendmicroConfig from 'eslint-config-trendmicro';
import globals from 'globals';

export default [
  ...trendmicroConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // your overrides
    },
  },
];
```

### Using with a Custom Parser (e.g. Babel)

```js
import trendmicroConfig from 'eslint-config-trendmicro';
import babelParser from '@babel/eslint-parser';

export default [
  ...trendmicroConfig,
  {
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
    },
  },
];
```

## Migrating from v3.x (ESLint v7/v8)

Replace your `.eslintrc` / `.eslintrc.json` with an `eslint.config.js`:

**Before (v3.x, `.eslintrc`):**
```json
{
  "extends": "trendmicro",
  "parser": "@babel/eslint-parser",
  "env": {
    "browser": true,
    "node": true
  },
  "plugins": ["@babel"],
  "rules": {}
}
```

**After (v4.x, `eslint.config.js`):**
```js
import trendmicroConfig from 'eslint-config-trendmicro';
import globals from 'globals';

export default [
  ...trendmicroConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {},
  },
];
```
