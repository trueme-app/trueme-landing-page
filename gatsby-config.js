const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Trueme`,
    description: `Trueme is the #1 relationship platform for time poor single parents to connect & find love. Create something new, only with real people who understand your personal circumstance.`,
    author: `@truemeapp`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-offline`,
    'gatsby-plugin-webpack-bundle-analyzer',
  ],
}
