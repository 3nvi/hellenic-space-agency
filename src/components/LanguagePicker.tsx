import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { useLocation } from '@reach/router';
import i18nConfig from '../../i18n.json';

// finds the existing locale in the URL and replaces it with another selected locale
const createLocalizedLink = (url: string, selectedLang: string) =>
  url.replace(
    new RegExp(i18nConfig.supportedLanguages.map(lang => `/${lang}/`).join('|')),
    `/${selectedLang}/`
  );

const LanguagePicker: React.FC = () => {
  const location = useLocation();
  return (
    <div className="language-selector-container">
      {i18nConfig.supportedLanguages.map((supportedLang, index) => (
        <React.Fragment key={supportedLang}>
          {index !== 0 && <span>|</span>}
          <GatsbyLink
            aria-label={`Change language to ${supportedLang}`}
            activeClassName="active"
            to={createLocalizedLink(location.pathname, supportedLang)}
          >
            {supportedLang.toUpperCase()}
          </GatsbyLink>
        </React.Fragment>
      ))}
    </div>
  );
};

export default LanguagePicker;
