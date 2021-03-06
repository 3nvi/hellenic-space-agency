import React from 'react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import usePageContext from '../hooks/usePageContext';

const Link: React.FC<GatsbyLinkProps<any>> = ({ to, ref, ...rest }) => {
  const { lang } = usePageContext();

  return <GatsbyLink {...rest} to={lang ? `/${lang}${to}` : to} />;
};

export default Link;
