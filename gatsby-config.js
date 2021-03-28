const path = require('path');
const resources = require('./translations.json');

module.exports = {
  siteMetadata: {
    image: `/assets/images/main.jpg`,
    supportedLanguages: ['el', 'en'],
    defaultLanguage: 'el',
    siteUrl: process.env.URL || 'localhost:8000',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'hellenic-space-center',
        short_name: 'H.S.C.',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'static/assets/images/favicon.png',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
      resolve: '@3nvi/gatsby-theme-intl',
      options: {
        i18nextConfig: {
          resources,
        },
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
  ],
};
