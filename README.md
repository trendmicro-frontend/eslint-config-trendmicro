# eslint-config-trendmicro

[![npm version](https://badge.fury.io/js/eslint-config-trendmicro.svg)](http://badge.fury.io/js/eslint-config-trendmicro)

This package provides .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

### eslint-config-trendmicro

1. Ensure packages are installed with correct version numbers by running:
  ```sh
  (
    export PKG=eslint-config-trendmicro;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save-dev eslint-config-trendmicro eslint@~3.11.1 eslint-plugin-jsx-a11y@~2.2.3 eslint-plugin-import@~2.1.0 eslint-plugin-react@~6.8.0
  ```

2. Add `"extends": "trendmicro"` to your .eslintrc
