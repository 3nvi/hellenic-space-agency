import React from 'react';

interface PageContextValue {
  lang?: string;
  host?: string;
  originalPath?: string;
}

export const PageContext = React.createContext<PageContextValue>({});

export const usePageContext = () => React.useContext(PageContext);
