module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/base',
    './rules/import',
    './rules/jsx-a11y',
    './rules/react',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
  }
};
