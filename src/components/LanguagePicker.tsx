import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { usePageContext } from '../context/PageContext';

const LanguagePicker: React.FC = () => {
  const { supportedLanguages, originalPath } = usePageContext();

  return (
    <div className="language-selector-container">
      {supportedLanguages.map((lang, index) => (
        <React.Fragment key={lang}>
          {index !== 0 && <span>|</span>}
          <GatsbyLink
            aria-label={`Change language to ${lang}`}
            activeClassName="active"
            to={`/${lang}${originalPath}`}
          >
            {lang.toUpperCase()}
          </GatsbyLink>
        </React.Fragment>
      ))}
    </div>
  );
};

export default LanguagePicker;
