import React from 'react';
import { PageContext } from './src/context/PageContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18next';

export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }
  const headComponents = getHeadComponents();

  // workaround to revert forcefully injected inline styles
  // described in https://github.com/gatsbyjs/gatsby/issues/1526
  // takes data-href from <style> tag with inline styles which contains URL to global css file
  // and transforms it into stylesheet link component
  const transformedHeadComponents = headComponents.map(node => {
    if (node.type === 'style') {
      const globalStyleHref = node.props['data-href'];
      if (globalStyleHref) {
        return <link href={globalStyleHref} rel="stylesheet" type="text/css" />;
      } else {
        return node;
      }
    } else {
      return node;
    }
  });

  replaceHeadComponents(transformedHeadComponents);
};

/**
 * Wrap all pages with a Translation provider and set the language on SSR time
 */
export const wrapPageElement = ({ element, props }) => {
  const { lang } = props.pageContext;
  i18n.changeLanguage(lang);

  return <PageContext.Provider value={props.pageContext}>{element}</PageContext.Provider>;
};

export const wrapRootElement = ({ element }) => {
  return <I18nextProvider i18n={i18n}>{element}</I18nextProvider>;
};
