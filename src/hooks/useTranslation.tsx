import usePageContext from '../hooks/usePageContext';

interface TranslationData<T> {
  childMarkdownRemark: {
    frontmatter: {
      [lang: string]: T;
    };
  };
}

const useTranslation = <T,>(data: TranslationData<T>) => {
  const { lang } = usePageContext();
  return data.childMarkdownRemark.frontmatter[lang];
};

export default useTranslation;
