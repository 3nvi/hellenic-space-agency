import usePageContext from '../hooks/usePageContext';
import commonTranslations from '../../i18n.common.json';

const useTranslatedHelpers = () => {
  const { lang } = usePageContext();
  return commonTranslations[lang as Page['pageContext']['lang']];
};

export default useTranslatedHelpers;
