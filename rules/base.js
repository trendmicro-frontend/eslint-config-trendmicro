export default {
  rules: {
    'arrow-body-style': 0,
    'camelcase': [2, {
      'allow': ['^UNSAFE_'],
      'properties': 'never',
    }],
    'capitalized-comments': 0,
    'class-methods-use-this': 0,
    'consistent-return': 2,
    'curly': [2, 'all'],
    'default-case': 2,
    'default-param-last': 0,
    'dot-notation': [1, {
      'allowKeywords': true,
    }],
    'eqeqeq': 2,
    'func-names': 0,
    'max-classes-per-file': [2, 1],
    'max-lines-per-function': [1, {
      'max': 200,
      'skipBlankLines': true,
      'skipComments': true
    }],
    'new-cap': [2, { 'newIsCap': true, 'capIsNew': false }],
    'no-alert': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-cond-assign': [2, 'except-parens'],
    'no-const-assign': 2,
    'no-constant-binary-expression': 1,
    'no-constructor-return': 0,
    'no-console': [1, { 'allow': ['assert', 'warn', 'error'] }],
    'no-continue': 0,
    'no-else-return': 0,
    'no-extra-boolean-cast': 0,
    'no-lone-blocks': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-prototype-builtins': 2,
    'no-restricted-properties': 0,
    'no-restricted-syntax': 0,
    'no-return-await': 2,
    'no-shadow': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': [2, {
      'allowShortCircuit': true,
      'allowTernary': true
    }],
    'no-unused-vars': [2, {
      'vars': 'local',
      'args': 'none'
    }],
    'no-use-before-define': 0,
    'no-useless-escape': 0,
    'no-useless-return': 0,
    'no-var': 1,
    'object-shorthand': 0,
    'one-var': 0,
    'prefer-const': 0,
    'prefer-destructuring': 0,
    'prefer-object-has-own': 0,
    'prefer-object-spread': 0,
    'prefer-promise-reject-errors': [1, {
      'allowEmptyReject': true
    }],
    'prefer-regex-literals': 0,
    'prefer-spread': 0,
    'prefer-template': 0,
    'require-await': 2,
    'vars-on-top': 0
  }
};
