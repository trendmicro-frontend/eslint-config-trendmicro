import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';

import baseRules from './rules/base.js';
import importRules from './rules/import.js';
import jsxA11yRules from './rules/jsx-a11y.js';
import reactRules from './rules/react.js';

export default [
  js.configs.recommended,
  {
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...baseRules.rules,
      ...importRules.rules,
      ...jsxA11yRules.rules,
      ...reactRules.rules,
    },
    settings: {
      ...reactRules.settings,
    },
  },
];
