import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import '../assets/scss/main.scss';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
              menuLinks {
                name
                href
                isPrimary
              }
            }
          }
        }
      `}
      render={data => (
        <div className={pathname === '/' ? 'landing' : undefined}>
          <div id="page-wrapper">
            <Header
              menuLinks={data.site.siteMetadata.menuLinks}
              siteTitle={data.site.siteMetadata.title}
            />
            {children}
            <Footer />
          </div>
        </div>
      )}
    />
  );
};

export default Layout;
