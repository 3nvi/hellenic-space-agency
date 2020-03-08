import React from 'react';
import { useTranslation } from 'react-i18next';
import pic01 from '../assets/images/pic01.jpg';
import { Link as ScrollLink } from 'react-scroll';
import banner from '../assets/images/banner.jpg';

const Banner: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="banner" style={{ backgroundImage: `url(${banner})` }}>
      <div className="content">
        <header>
          <h2>{t('landing.title')}</h2>
          <p>{t('landing.description')}</p>
        </header>
        <span className="image">
          <img src={pic01} alt="intro" />
        </span>
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
