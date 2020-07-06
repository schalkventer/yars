module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:sonarjs/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-app',
    'prettier',
    'jest',
    'compat',
    'sonarjs',
    'optimize-regex',
    'react-hooks',
  ],
  env: {
    'jest/globals': true,
    browser: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-one-expression-per-line': 'off', // Conflicts with Prettier.
    'react/prop-types': 'off', // Not needed when using TypeScript.
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }], // Enforce TypeScript for JSX. I.e. `.tsx.` over `.jsx`.
    'import/prefer-default-export': 'off', // Conflicts with named exports at folder root pattern
    'react-hooks/rules-of-hooks': 'error', 
    'react-hooks/exhaustive-deps': 'warn',
    'import/extensions': 'off',
    "no-warning-comments": 'warn',
  },
};
