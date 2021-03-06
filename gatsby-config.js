const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: process.env.URL || 'localhost:8000',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'hellenic-space-center',
        short_name: 'H.S.C.',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'static/assets/logo.png',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: path.join(__dirname, `static`, `assets`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: path.join(__dirname, `site`, `content`),
      },
    },
    process.env.NODE_ENV === 'development' && {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `./graphql-types.ts`,
        codegenConfig: {
          avoidOptionals: true,
          maybeValue: 'T',
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // gatsby-remark-relative-images must go before gatsby-remark-images
          {
            resolve: `gatsby-remark-relative-images`,
            options: {},
          },
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 1024, withWebp: true },
          },
        ],
      },
    },

    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: ['https://fonts.gstatic.com'],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto:ital,wght@0,100;0,300;1,300`],
        display: 'swap',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sitemap',
    {
      resolve: '@3nvi/gatsby-plugin-intl',
      options: {
        supportedLanguages: ['el', 'en'],
        defaultLanguage: 'el',
        excludedPages: ['/404.html'],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          // contents of the /static/assets folder should not be aggresively cached
          '/assets/*': ['Cache-Control: public,max-age=86400,stale-while-revalidate=86400'],
        },
      },
    },
  ].filter(Boolean),
};
