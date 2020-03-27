import React from 'react';
import { useTranslation } from '@3nvi/gatsby-theme-intl';
// import logo from '../assets/images/logo.png';
import { Link as ScrollLink } from 'react-scroll';
import banner from '../assets/images/banner.jpg';

const Banner: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="banner" style={{ backgroundImage: `url(${banner})` }}>
      <div className="content">
        <header>
          <h2>{t('landing.mainTitle')}</h2>
        </header>
      </div>
      <ScrollLink
        to="one"
        className="goto-next"
        activeClass="active"
        smooth={true}
        offset={50}
        duration={1500}
        spy={true}
      >
        {t('commmon.next')}
      </ScrollLink>
    </section>
  );
};

export default Banner;
