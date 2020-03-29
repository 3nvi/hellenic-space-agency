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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`100`, `300`, `300italic`],
            formats: ['woff2'],
            fontDisplay: 'swap',
            subsets: ['greek'],
          },
        ],
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
