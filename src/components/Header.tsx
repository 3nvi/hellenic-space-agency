import React from 'react';
import Link from '../components/Link';
import LanguagePicker from './LanguagePicker';
import Navigation from './Navigation';
import useGetLogo from '../hooks/useGetLogo';

const Header: React.FC = () => {
  const [isMenuActive, setMenuActive] = React.useState(false);

  const logo = useGetLogo();
  return (
    <React.Fragment>
      <div className={`navbar-menu ${isMenuActive ? 'navPanel-visible' : ''}`}>
        <div id="titleBar">
          <button
            onClick={() => setMenuActive(!isMenuActive)}
            className="toggle"
            aria-label="Open mobile menu"
          />
          <span className="title">
            <Link to="/">
              <img src={logo.publicURL} height={40} alt="HSC Logo" />
            </Link>
          </span>
        </div>
        <div id="navPanel">
          <div>
            <LanguagePicker />
            <Navigation orientation="vertical" />
          </div>
        </div>
      </div>

      <header id="header">
        <Link to="/">
          <img src={logo.publicURL} height={60} alt="HSC Logo" />
        </Link>
        <div className="navbar-menu">
          <Navigation orientation="horizontal" />
        </div>
        <LanguagePicker />
      </header>
    </React.Fragment>
  );
};

export default Header;
