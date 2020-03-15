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
            siteUrl
            image
            supportedLanguages
          }
        }
      }
    `
  );

  const { lang, originalPath } = usePageContext();

  const siteName = t('siteMetadata.title');
  const defaultDescription = description || t('siteMetadata.description');
  const host = site.siteMetadata.siteUrl;
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
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
          property: `og:locale`,
          content: lang,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ]}
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
