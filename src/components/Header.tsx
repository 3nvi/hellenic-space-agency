import React from 'react';
import { Link } from 'gatsby';
import MobileMenu from './MobileMenu';

interface MenuLink {
  name: string;
  href: string;
  isPrimary: boolean;
}

interface HeaderProps {
  siteTitle: string;
  menuLinks: MenuLink[];
}

const Header: React.FC<HeaderProps> = ({ siteTitle, menuLinks }) => {
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
            <Link to="/">{siteTitle}</Link>
          </span>
        </div>
        <div id="navPanel">
          <MobileMenu menuLinks={menuLinks} />
        </div>
      </div>

      <header id="header">
        <h1 id="logo">
          <Link to="/">{siteTitle}</Link>
        </h1>
        <div className="navbar-menu">
          <nav>
            <ul style={{ display: 'flex', flex: 1 }}>
              {menuLinks.map(link => (
                <li key={link.href}>
                  <Link className={link.isPrimary ? 'button primary' : undefined} to={link.href}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
