/*
 * Exported configuration
 */

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/preset-create-react-app'
  ],

  presets: [
    '@storybook/preset-create-react-app',
  ],

  /**
   * Gets rid of "asset size limit" warning during building of Storybook.
   */
  webpackFinal: config => ({
    ...config,
    performance: {
      ...config.performance,
      hints: false,
    },
  }),
};
