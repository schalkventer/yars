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

/**
 * If `.env` file exist, values will be added to `process.env` inside Gatsby
 * build pipeline.
 */
dotenv.config();

/*
 * Primary export
 */

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-alias-imports',
      options: {
        aliases: {
          '@': 'src',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Yet Another React Structure',
        display: 'fullscreen',
        icon: './src/assets/meta/logo.png',
        short_name: 'YARS',
        start_url: '/',
        background_color: '#0170BA',
        theme_color: '#0170BA',
      },
    },

    'gatsby-plugin-typescript',
    'gatsby-plugin-remove-console',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-material-ui',
    'gatsby-plugin-react-helmet',
  ],
};
