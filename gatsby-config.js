module.exports = {
  siteMetadata: {
    image: `/assets/images/main.jpg`,
    supportedLanguages: ['el', 'en'],
    defaultLanguage: 'en',
    siteUrl: process.env.URL || 'localhost:8000',
    // logo: `/assets/images/favicon.png`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        // icon: 'static/assets/images/favicon.png', // This path is relative to the root of the site.
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images/`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
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
