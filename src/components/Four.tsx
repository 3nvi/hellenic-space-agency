import React from 'react';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';

const Four: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Fade>
      <section id="four" className="wrapper style1 special fade-up">
        <div className="container">
          <header className="major">
            <h2>{t(`landing.goalsTitle`)}</h2>
            <p>{t(`landing.goalsSubtitle`)}</p>
          </header>
          <div className="box alt">
            <div className="row gtr-uniform">
              {[...Array(6)].map((_, i) => (
                <section className="col-4 col-6-medium col-12-xsmall" key={i}>
                  <h3>{t(`landing.goals.${i}.title`)}</h3>
                  <p>{t(`landing.goals.${i}.details`)}</p>
                </section>
              ))}
            </div>
          </div>
          <footer className="major">
            <ul className="actions special">
              <li>
                <a href="/" className="button">
                  {t('common.learnMore')}
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </section>
    </Fade>
  );
};

export default Four;
