import React from 'react';
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';
import { usePageContext } from '../context/PageContext';

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
        <React.Fragment>
          {index !== 0 && <span>|</span>}
          <GatsbyLink
            aria-label={`Change language to ${supportedLang}`}
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
