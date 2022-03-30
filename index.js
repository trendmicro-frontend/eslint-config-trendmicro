module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/base',
    './rules/import',
    './rules/jsx-a11y',
    './rules/react',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
  }
};
