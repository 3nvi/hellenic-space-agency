import React from 'react';

interface PageContext {
  supportedLanguages: string[];
  siteUrl: string;
  originalPath: string;
  lang: string;
  matchPath?: string;
}

// @ts-ignore
export const PageContext = React.createContext<PageContext>({});

export const usePageContext = () => React.useContext<PageContext>(PageContext);
