module.exports = {
  siteMetadata: {
    title: 'Hellenic Space Agency',
    description: 'Hellenic Space Agency website',
    image: `/assets/images/main.jpg`,
    keywords: ['Hellenic Space Agency'],
    supportedLanguages: ['en', 'el'],
    // logo: `/assets/images/favicon.png`,
    menuLinks: [
      {
        name: 'Home',
        href: '/',
        isPrimary: false,
      },
      {
        name: 'Elements',
        href: '/elements',
        isPrimary: false,
      },
      {
        name: 'Sign Up',
        href: '#',
        isPrimary: true,
      },
    ],
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
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
  ],
};
