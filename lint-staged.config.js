module.exports = {
  '*.{ts,tsx}': [
    'yarn run eslint --fix --rule',
    'stylelint',
    'yarn run prettier --write',
  ],
};
