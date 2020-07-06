/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-var-requires, @typescript-eslint/explicit-function-return-type */

/*
 * See the [Gatsby Config API
 * documentation](https://www.gatsbyjs.org/docs/api-files-gatsby-config/) for an
 * overview of this file's purpose. In addition , for documentation related to
 * each plugin used below go to the [Gatsby plugin
 * directory](https://www.gatsbyjs.org/packages) and search according to the
 * `gatsby-plugin-*` name of the plugin.
 */

/*
 * Third-party modules
 */

const dotenv = require('dotenv');
const chalk = require('chalk');

/*
 * Checks environment and outputs messages
 */

/**
 * If `.env` file exist, values will be added to `process.env` inside Gatsby
 * build pipeline.
 */
dotenv.config();

if (process.env.GOOGLE_ANALYTICS_KEY) {
  // eslint-disable-next-line no-console
  console.log(
    chalk.black.bgGreen(
      '\n"GOOGLE_ANALYTICS_KEY" found, Google Analytics will be initialised in this build.\n',
    ),
  );
} else {
  // eslint-disable-next-line no-console
  console.log(
    chalk.black.bgCyan(
      '\n"GOOGLE_ANALYTICS_KEY" not found, Google Analytics will not be intialised in this build.\n',
    ),
  );
}

/*
 * Primary export
 */

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Yet Another React Structure (YARS)',
        display: 'minimal-ui',
        icon: 'src/app/assets/logo.png',

        /* eslint-disable @typescript-eslint/camelcase */
        short_name: 'YARS',
        start_url: '/',
        background_color: '#0170BA',
        theme_color: '#0170BA',
        /* eslint-enable @typescript-eslint/camelcase */
      },
    },
    'gatsby-plugin-workerize-loader',
    'gatsby-plugin-material-ui',
    'gatsby-plugin-typescript',
    'gatsby-plugin-remove-console',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
  ],
};
