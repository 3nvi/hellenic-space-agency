import React from 'react';
import Link from '../components/Link';
import LanguagePicker from './LanguagePicker';
import logo from '../assets/images/logo.png';
import Navigation from './Navigation';

const Header: React.FC = () => {
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
            <Link to="/">
              <img src={logo} width={40} height={40} alt="HSC Logo" />
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
          <img src={logo} width={75} height={75} alt="HSC Logo" />
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
