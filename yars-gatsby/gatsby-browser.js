/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-var-requires, @typescript-eslint/explicit-function-return-type */

/*
 * See the [Gatsby SSR API
 * documentation](https://www.gatsbyjs.org/docs/api-files-gatsby-ssr/) for an
 * overview of this file's purpose.
 */

/*
 * Third-party modules
 */

const ReactGA = require('react-ga');

/*
 * Gatsby life-cycle methods.
 */

/*
 * Intialises and fires Google Analytics on first page load on site (if
 * GOOGLE_ANALYTICS_KEY is set in environment).
 */
exports.onClientEntry = () => {
  if (process.env.GOOGLE_ANALYTICS_KEY) {
    ReactGA.initialize(process.env.GOOGLE_ANALYTICS_KEY);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
};

/*
 * Fires Google Analytics when page is changed after initial page load (if
 * GOOGLE_ANALYTICS_KEY is set in environment).
 */
exports.onRouteUpdate = ({ location }) => {
  ReactGA.pageview(location.pathname + location.search);
};
