import React from 'react';
import { useTranslation } from 'react-i18next';
import pic01 from '../assets/images/pic01.jpg';
import { Link as ScrollLink } from 'react-scroll';

const Banner: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="banner">
      <div className="content">
        <header>
          <h2>{t('banner.title')}</h2>
          <p>{t('banner.description')}</p>
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
        Next
      </ScrollLink>
    </section>
  );
};

export default Banner;
