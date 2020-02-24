import React from 'react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import { usePageContext } from '../context/PageContext';

const Link: React.FC<GatsbyLinkProps<{}>> = ({ to, ref, ...rest }) => {
  const { lang } = usePageContext();

  return <GatsbyLink {...rest} to={lang ? `/${lang}${to}` : to} />;
};

export default Link;
