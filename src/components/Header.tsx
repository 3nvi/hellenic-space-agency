import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from '../components/Link';
import MobileMenu from './MobileMenu';
import { usePageContext } from '../context/PageContext';

const menuLinks = [
  {
    id: 'home',
    href: '/',
    isPrimary: false,
  },
  {
    id: 'about',
    href: '/about/',
    isPrimary: false,
  },
  {
    id: 'contact',
    href: '/contact/',
    isPrimary: false,
  },
];

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { originalPath } = usePageContext();
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
          <Link to="/">{t('siteMetadata.title')}</Link>
        </h1>
        <div className="navbar-menu">
          <nav>
            <ul style={{ display: 'flex', flex: 1 }}>
              {menuLinks.map(link => (
                <li key={link.href}>
                  <Link className={link.isPrimary ? 'button primary' : undefined} to={link.href}>
                    {t(`header.links.${link.id}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="language-selector-container">
          <Link aria-label="Change language to greek" to={originalPath || '/'}>
            ΕΛ
          </Link>
          <span>|</span>
          <Link aria-label="Change language to english" to={originalPath || '/'}>
            EN
          </Link>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
