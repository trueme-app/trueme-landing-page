const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Trueme`,
    description: `Test`,
    author: `@trueme`,
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
    `gatsby-plugin-typescript`,
    `gatsby-plugin-offline`,
  ],
}
