import React from 'react';
import PageContext, { PageContext as PageContextType } from '../context/PageContext';

const usePageContext = () => React.useContext<PageContextType>(PageContext);

export default usePageContext;
