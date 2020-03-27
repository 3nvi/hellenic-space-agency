import React from 'react';
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';
import { usePageContext } from '@3nvi/gatsby-theme-intl';

const LanguagePicker: React.FC = () => {
  const { originalPath } = usePageContext();
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            supportedLanguages
          }
        }
      }
    `
  );

  return (
    <div className="language-selector-container">
      {site.siteMetadata.supportedLanguages.map((supportedLang: string, index: number) => (
        <React.Fragment key={supportedLang}>
          {index !== 0 && <span>|</span>}
          <GatsbyLink
            aria-label={`Change language to ${supportedLang}`}
            activeClassName="active"
            to={`/${supportedLang}${originalPath}`}
          >
            {supportedLang.toUpperCase()}
          </GatsbyLink>
        </React.Fragment>
      ))}
    </div>
  );
};

export default LanguagePicker;
