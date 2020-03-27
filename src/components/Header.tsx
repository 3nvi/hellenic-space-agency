import React from 'react';
import { useTranslation } from '@3nvi/gatsby-theme-intl';
// import logo from '../assets/images/logo.png';
import { Link } from '@3nvi/gatsby-theme-intl';
import MobileMenu from './MobileMenu';
import LanguagePicker from './LanguagePicker';

const menuLinks = [
  {
    id: 'home',
    href: '/',
  },
  {
    id: 'about',
    href: '/about/',
  },
  {
    id: 'contact',
    href: '/contact/',
  },
];

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuActive, setMenuActive] = React.useState(false);

  const [mobileActiveClass, setMobileActiveClass] = React.useState('');

  React.useEffect(() => {
    setMobileActiveClass(isMenuActive ? 'navPanel-visible' : '');
  }, [isMenuActive]);

  return (
    <React.Fragment>
      <div className={`navbar-menu ${mobileActiveClass}`}>
        <div id="titleBar">
          <button
            onClick={() => setMenuActive(!isMenuActive)}
            className="toggle"
            aria-label="Open mobile menu"
          />
          <span className="title">
            <Link to="/">{t('siteMetadata.title')}</Link>
          </span>
        </div>
        <div id="navPanel">
          <MobileMenu menuLinks={menuLinks} />
        </div>
      </div>

      <header id="header">
        <h1 id="logo">
          <span className="image" />
          <Link to="/">{t('siteMetadata.title')}</Link>
        </h1>
        <div className="navbar-menu">
          <nav>
            <ul style={{ display: 'flex', flex: 1 }}>
              {menuLinks.map(link => (
                <li key={link.href}>
                  <Link to={link.href} activeClassName="active">
                    {t(`header.links.${link.id}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <LanguagePicker />
      </header>
    </React.Fragment>
  );
};

export default Header;
