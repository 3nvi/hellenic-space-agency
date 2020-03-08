import React from 'react';
import pic03 from '../assets/images/pic03.jpg';
import { Link as ScrollLink } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';
import Link from './Link';

const Two: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section
      id="two"
      className="spotlight style2 right inactive"
      style={{ backgroundImage: `url(${pic03})` }}
    >
      <span className="image fit main">
        <img src={pic03} alt="" />
      </span>
      <Fade right big>
        <div className="content">
          <header>
            <h2>{t('landing.missions.1.title')}</h2>
          </header>
          <p>{t('landing.missions.1.details')}</p>
          <ul className="actions">
            <li>
              <Link to="/about/" className="button">
                {t('common.learnMore')}
              </Link>
            </li>
          </ul>
        </div>
      </Fade>
      <ScrollLink
        to="three"
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

export default Two;
