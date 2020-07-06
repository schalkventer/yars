/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-var-requires, @typescript-eslint/explicit-function-return-type */

/*
 * See the [Gatsby Node API
 * documentation](https://www.gatsbyjs.org/docs/api-files-gatsby-node/) for an
 * overview of this file's purpose.
 */

const path = require('path');
const routes = require('./src/app/routes.json');

/**
 * Loops over all objects in the `src/app/routes.json` file and turns them
 * into app URLs.
 */
exports.createPages = async ({ actions }) => {
  routes.forEach(({ connector, ...otherProps }) => {
    actions.createPage({
      ...otherProps,
      component: path.resolve(`./src/app/connectors/${connector}/index.ts`),
    });
  });
};
