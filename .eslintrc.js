const baseRules = {
  'no-plusplus': 'off',
  'default-case': 'off',
  'consistent-return': 'off',
  'class-methods-use-this': 'off',
  'comma-dangle': ['error', 'always-multiline'],
  'one-var': [
    'error',
    {
      initialized: 'never',
    },
  ],
  'one-var-declaration-per-line': ['error', 'initializations'],
  'no-confusing-arrow': 'off',
  'function-paren-newline': 'off',
  'import/prefer-default-export': 'off',
};

const reactRules = {
  'react/require-default-props': 'off',
  'react/jsx-filename-extension': [
    'error',
    {
      extensions: ['.js'],
    },
  ],
  'react/jsx-tag-spacing': [
    'error',
    {
      closingSlash: 'never',
      beforeSelfClosing: 'allow',
      afterOpening: 'never',
    },
  ],
};

module.exports = {
  root: true,
  extends: ['airbnb'],
  plugins: ['react'],
  env: {
    browser: true,
    node: true,
  },
  rules: Object.assign({}, baseRules, reactRules),
  parser: 'babel-eslint',
  globals: {
    jest: true,
    describe: true,
    test: true,
    expect: true,
  },
};
