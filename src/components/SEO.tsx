import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { usePageContext } from '../context/PageContext';

interface SEOProps {
  title: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  const { t } = useTranslation();

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            image
            supportedLanguages
          }
        }
      }
    `
  );

  const { lang, host, originalPath } = usePageContext();

  const metaDescription = description || t('siteMetadata.description');

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      titleTemplate={`%s | ${t('siteMetadata.title')}`}
      meta={[
        {
          name: `keywords`,
          content: t('siteMetadata.keywords'),
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
          content: lang,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].filter(Boolean)}
      link={[
        {
          rel: 'canonical',
          href: `${host}/${lang}${originalPath}`,
        },
        {
          rel: 'alternate',
          hrefLang: 'x-default',
          href: `${host}${originalPath}`,
        },
        ...site.siteMetadata.supportedLanguages.map((supportedLang: string) => ({
          rel: 'alternate',
          hrefLang: supportedLang,
          href: `${host}/${supportedLang}${originalPath}`,
        })),
      ]}
    />
  );
};

export default SEO;
