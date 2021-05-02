import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import useTranslation from '../hooks/useTranslation';
import { GetSeoDataQuery } from '../../graphql-types';

interface SEOProps {
  title: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  const { site, meta } = useStaticQuery<GetSeoDataQuery>(
    graphql`
      query getSEOData {
        site {
          siteMetadata {
            siteUrl
          }
        }
        meta: file(name: { eq: "meta" }) {
          childMarkdownRemark {
            frontmatter {
              el {
                title
                description
                keywords
                logo {
                  publicURL
                }
              }
              en {
                title
                description
                keywords
                logo {
                  publicURL
                }
              }
            }
          }
        }
      }
    `
  );
  const translatedData = useTranslation(meta);

  const siteName = translatedData.title;
  const defaultDescription = description || translatedData.description;
  const host = site.siteMetadata.siteUrl;
  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${siteName}`}
      meta={[
        {
          name: `keywords`,
          content: translatedData.keywords,
        },
        {
          name: `description`,
          content: defaultDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: defaultDescription,
        },
        {
          property: `og:image`,
          content: translatedData.logo.publicURL,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ]}
    >
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          image: translatedData.logo.publicURL,
          name: siteName,
          url: host,
          logo: undefined,
          telephone: undefined,
          address: undefined,
          email: undefined,
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
