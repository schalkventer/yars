module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-styled-components'],
  processors: ['stylelint-processor-styled-components'],
  plugins: ['stylelint-no-unsupported-browser-features'],
};
