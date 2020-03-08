import React from 'react';
import pic04 from '../assets/images/pic04.jpg';
import { Link as ScrollLink } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';

const Three: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section
      id="three"
      className="spotlight style3 left inactive"
      style={{ backgroundImage: `url(${pic04})` }}
    >
      <span className="image fit main bottom">
        <img src={pic04} alt="" />
      </span>
      <Fade left big>
        <div className="content">
          <header>
            <h2>{t('landing.missions.2.title')}</h2>
          </header>
          <p>{t('landing.missions.2.details')}</p>
          <ul className="actions">
            <li>
              <a href="/" className="button">
                {t('common.learnMore')}
              </a>
            </li>
          </ul>
        </div>
      </Fade>
      <ScrollLink
        to="four"
        className="goto-next"
        activeClass="active"
        smooth={true}
        offset={50}
        duration={1500}
        spy={true}
      >
        {t('common.next')}
      </ScrollLink>
    </section>
  );
};

export default Three;
