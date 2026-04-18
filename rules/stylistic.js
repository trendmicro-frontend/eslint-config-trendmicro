export default {
  rules: {
    '@stylistic/arrow-parens': 0,
    '@stylistic/block-spacing': 2,
    '@stylistic/brace-style': [2, '1tbs'],
    '@stylistic/comma-dangle': 0,
    '@stylistic/comma-spacing': 2,
    '@stylistic/comma-style': [2, 'last'],
    '@stylistic/eol-last': 2,
    '@stylistic/function-paren-newline': [1, 'consistent'],
    '@stylistic/implicit-arrow-linebreak': 2,
    '@stylistic/indent': [2, 2],
    '@stylistic/key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    '@stylistic/lines-between-class-members': 0,
    '@stylistic/max-len': [1, 160, 4, {
      'ignoreComments': true,
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'ignoreRegExpLiterals': true
    }],
    '@stylistic/new-parens': 2,
    '@stylistic/no-confusing-arrow': [2, { 'allowParens': true }],
    '@stylistic/no-mixed-operators': 0,
    '@stylistic/one-var-declaration-per-line': 0,
    '@stylistic/no-tabs': 2,
    '@stylistic/object-curly-newline': [1, {
      'consistent': true
    }],
    '@stylistic/operator-linebreak': [1, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    '@stylistic/quote-props': 0,
    '@stylistic/quotes': [2, 'single', { 'avoidEscape': true }],
    '@stylistic/space-before-function-paren': 0,
    '@stylistic/space-unary-ops': 2,
    '@stylistic/spaced-comment': 0,
  }
};
