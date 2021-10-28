module.exports = {
  plugins: [
    'react'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/boolean-prop-naming': 0,
    'react/button-has-type': 1,
    'react/destructuring-assignment': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-boolean-value': 0,
    'react/jsx-curly-spacing': 1,
    'react/jsx-filename-extension': 0,
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-props-per-line': [1, { 'maximum': 3 }],
    'react/jsx-wrap-multilines': 1,
    'react/jsx-no-bind': [1, {
      'ignoreRefs': true
    }],
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-target-blank': 1,
    'react/jsx-no-undef': 2,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-tag-spacing': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-access-state-in-setstate': 1,
    'react/no-array-index-key': 1,
    'react/no-danger': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-find-dom-node': 0,
    'react/no-multi-comp': [1, { 'ignoreStateless': true }],
    'react/no-string-refs': 1,
    'react/no-typos': 1,
    'react/no-unknown-property': 1,
    'react/no-unsafe': 1,
    'react/no-unused-prop-types': 0,
    'react/no-unused-state': 0,
    'react/prefer-stateless-function': 1,
    'react/prop-types': [1, {
      'ignore': ['children', 'className', 'style']
    }],
    'react/react-in-jsx-scope': 1,
    'react/require-default-props': 0,
    'react/self-closing-comp': 1,
    'react/sort-comp': 0
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json']
      }
    }
  }
};
