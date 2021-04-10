import React from 'react';

export interface PageContext {
  supportedLanguages: string[];
  siteUrl: string;
  originalPath: string;
  lang: string;
  matchPath?: string;
}

// @ts-ignore
const PageContext = React.createContext<PageContext>({});

export default PageContext;
