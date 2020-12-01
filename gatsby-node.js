/*
 * See the [Gatsby Node API
 * documentation](https://www.gatsbyjs.org/docs/api-files-gatsby-node/) for an
 * overview of this file's purpose. 
 */

const path = require('path');
const routes = require('./src/routes.json');

/**
 * Loops over all objects in the `src/app/routes.json` file and turns them
 * into app URLs.
 */
exports.createPages = ({ actions }) => {
  const keys = Object.keys(routes);

  keys.forEach((key) => {
    actions.createPage({
      path: key,
      component: path.resolve(`./src/views/${routes[key]}/index.tsx`)
    })
  });
};
