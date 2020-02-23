import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../assets/scss/main.scss';

interface LayoutProps {
  isHeaderSticky?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, isHeaderSticky = false }) => {
  return (
    <div className={!isHeaderSticky ? 'landing' : undefined}>
      <div id="page-wrapper">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
