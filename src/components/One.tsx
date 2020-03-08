import React from 'react';
import pic02 from '../assets/images/pic02.jpg';
import { Link as ScrollLink } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';

const One: React.FC = () => {
  const { t } = useTranslation();
  const [missionTextPartOne, missionTextPartTwo] = t('landing.missions.one.details').split('.');
  return (
    <section
      id="one"
      className="spotlight style1 bottom inactive"
      style={{ backgroundImage: `url(${pic02})` }}
    >
      <span className="image fit main">
        <img src={pic02} alt="" />
      </span>
      <Fade bottom big>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-4 col-12-medium">
                <header>
                  <h2>{t('landing.missions.one.title')}</h2>
                </header>
              </div>
              <div className="col-4 col-12-medium">
                <p>{missionTextPartOne}.</p>
              </div>
              <div className="col-4 col-12-medium">
                <p>{missionTextPartTwo}.</p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <ScrollLink
        to="two"
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
export default One;
