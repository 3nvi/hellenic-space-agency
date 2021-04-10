import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import useTranslation from '../hooks/useTranslation';
import { GetSeoDataQuery } from '../../graphql-types';

const t = (x: string) => x;
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
            image
          }
        }
        meta: file(name: { eq: "meta" }) {
          childMarkdownRemark {
            frontmatter {
              el {
                title
                description
              }
              en {
                title
                description
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
          content: t('siteMetadata.keywords'),
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
          content: site.siteMetadata.image,
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
          image: site.siteMetadata.image,
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
