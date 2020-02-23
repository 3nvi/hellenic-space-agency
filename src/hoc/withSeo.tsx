import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

interface SeoConfig {
  title: string;
  description?: string;
}

type WrappedComponentProps<T> = T & {
  pageContext: {
    currentLocale: 'el' | 'en';
    canonicalPageUri: string;
    localizedPageInfo: {
      lang: 'el' | 'en';
      uri: string;
    }[];
  };
};

function withSeo<Props = {}>(config: SeoConfig) {
  return (Component: React.FC<Props>) => {
    const EnhancedComponent: React.FC<WrappedComponentProps<Props>> = ({
      pageContext,
      ...rest
    }) => {
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

      const metaDescription = config.description || site.siteMetadata.description;

      return (
        <React.Fragment>
          <Helmet
            htmlAttributes={{
              lang: pageContext.currentLocale,
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
                content: config.title,
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
                content: pageContext.currentLocale?.replace('-', '_'),
              },
              {
                property: `og:type`,
                content: `website`,
              },
            ]}
          >
            <link rel="canonical" href={pageContext.canonicalPageUri} />
            {pageContext.localizedPageInfo?.map(info => (
              <link rel="alternate" hrefLang={info.lang} href={info.uri} />
            ))}
          </Helmet>
          <Component {...(rest as Props)} />
        </React.Fragment>
      );
    };

    return EnhancedComponent;
  };
}

export default withSeo;
