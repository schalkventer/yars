const path = require('path');

module.exports = {
  stories: ["../docs/**/*.stories.mdx", "../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],

  /**
   * Allows usage of `@` TypeScript alias in Storybook
   */
  webpackFinal: async config => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src');
    return config;
  },
}
