import React from 'react';
import { PageContext } from './src/context/PageContext';
import config from './gatsby-config';

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

export const wrapPageElement = ({ element, props }) => {
  const { excludedPages, supportedLanguages, defaultLanguage } = config.plugins.find(
    plugin => plugin.resolve === '@3nvi/gatsby-plugin-intl'
  ).options;

  // if page should be excluded do nothing
  if (excludedPages.includes(props.location.pathname)) {
    return element;
  }

  const contextValue = Object.assign({}, props.pageContext, {
    supportedLanguages,
    defaultLanguage,
  });

  return <PageContext.Provider value={contextValue}>{element}</PageContext.Provider>;
};
