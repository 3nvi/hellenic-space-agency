import i18n from 'i18next';
import translations from './translations';

i18n.init({
  resources: translations,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
