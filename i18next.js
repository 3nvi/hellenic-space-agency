import i18n from 'i18next';
import translations from './translations';
import config from './gatsby-config';

i18n.init({
  resources: translations,
  fallbackLng: config.siteMetadata.defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
