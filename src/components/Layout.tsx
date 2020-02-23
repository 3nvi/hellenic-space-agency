import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Header from './Header';
import Footer from './Footer';
import '../assets/scss/main.scss';

interface LayoutProps {
  isHeaderSticky?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, isHeaderSticky = false }) => {
  const { site } = useStaticQuery(
    graphql`
      query SiteHeaderQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              href
              isPrimary
            }
          }
        }
      }
    `
  );

  return (
    <div className={!isHeaderSticky ? 'landing' : undefined}>
      <div id="page-wrapper">
        <Header menuLinks={site.siteMetadata.menuLinks} siteTitle={site.siteMetadata.title} />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
