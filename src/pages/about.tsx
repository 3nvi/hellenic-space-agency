import React from 'react';
import Layout from '../components/Layout';
import pic07 from '../assets/images/pic07.jpg';
import nounesis from '../assets/images/nounesis.jpg';
import sergis from '../assets/images/sergis.jpg';
import daglis from '../assets/images/daglis.jpg';
import sotiriadis from '../assets/images/sotiriadis.jpg';
import synolakis from '../assets/images/synolakis.jpg';
import giannakaki from '../assets/images/giannakaki.jpg';
import karantzalos from '../assets/images/karantzalos.jpg';
import SEO from '../components/SEO';
import { useTranslation } from '@3nvi/gatsby-theme-intl';
import Profile from '../components/Profile';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <SEO title={t('about.mainTitle')} />
      <section className="banner" style={{ backgroundImage: `url(${pic07})` }}>
        <div className="content flex-center">
          <header className="major">
            <h2>{t('about.mainTitle')}</h2>
            <p>{t('about.mainSubtitle')}</p>
          </header>
        </div>
      </section>

      <main className="wrapper style1">
        <div className="container">
          <section id="content">
            <h2>{t('siteMetadata.title')}</h2>
            <p style={{ whiteSpace: 'pre-line' }}>{t('about.content')}</p>
            <footer>
              <div>
                <a
                  href="/assets/documents/ELKED_creation.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('about.creationDocumentLink')}
                </a>
              </div>
              <div>
                <a
                  href="/assets/documents/ELKED_assignments.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('about.assignmentsDocumentLink')}
                </a>
              </div>
            </footer>
          </section>
          <article>
            <div style={{ margin: '5em auto' }}>
              <header className="major">
                <h2>{t('about.membersTitle')}</h2>
              </header>
            </div>
            <Profile tProfileKey="daglis" image={daglis} />
            <Profile tProfileKey="nounesis" image={nounesis} />
            <Profile tProfileKey="sergis" image={sergis} />
            <Profile tProfileKey="karantzalos" image={karantzalos} />
            <Profile tProfileKey="sotiriadis" image={sotiriadis} />
            <Profile tProfileKey="synolakis" image={synolakis} />
            <Profile tProfileKey="giannakaki" image={giannakaki} />
          </article>
        </div>
      </main>
    </Layout>
  );
};

export default About;
