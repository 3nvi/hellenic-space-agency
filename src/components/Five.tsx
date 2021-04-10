import React from 'react';
import Fade from 'react-reveal/Fade';
const t = (x: string) => x;

const Five: React.FC = () => {
  return (
    <section id="five" className="wrapper style2 special fade inactive">
      <Fade duration={2500}>
        <div className="container">
          <header>
            <h2>{t('landing.missionTitle')}</h2>
            <p>{t('landing.missionSubtitle')}</p>
          </header>
        </div>
      </Fade>
    </section>
  );
};
export default Five;
