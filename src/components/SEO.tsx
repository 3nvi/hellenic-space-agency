import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  const {
    i18n: { language },
  } = useTranslation();

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            keywords
            description
            image
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang: language,
      }}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `keywords`,
          content: site.siteMetadata.keywords,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: site.siteMetadata.image,
        },
        {
          property: `og:locale`,
          content: language,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ]}
    />
  );
};

export default SEO;
