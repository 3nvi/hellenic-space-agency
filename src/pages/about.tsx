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
import { useTranslation } from 'react-i18next';
import Profile from '../components/Profile';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <SEO title={t('about.title')} />
      <section className="banner" style={{ backgroundImage: `url(${pic07})` }}>
        <div className="content">
          <header className="major">
            <h2>{t('about.title')}</h2>
            <p>{t('about.description')}</p>
          </header>
        </div>
      </section>

      <main className="wrapper style1">
        <div className="container">
          <section id="content">
            <h3>ΕΛ.ΚΕ.Δ</h3>
            <p>
              Aliquam massa urna, imperdiet sit amet mi non, bibendum euismod est. Curabitur mi
              justo, tincidunt vel eros ullamcorper, porta cursus justo. Cras vel neque eros.
              Vestibulum diam quam, mollis at magna consectetur non, malesuada quis augue. Morbi
              tincidunt pretium interdum est. Curabitur mi justo, tincidunt vel eros ullamcorper,
              porta cursus justo. Cras vel neque eros. Vestibulum diam cubilia adipiscing interdum
              aliquet aliquet placerat cubilia accumsan cep ante nullam adipiscing tortor odio.
              Iaculis adipiscing accumsan nascetur in cras. Lacinia placerat.
            </p>
            <p>
              Vestibulum diam quam, mollis at consectetur non, malesuada quis augue. Morbi tincidunt
              pretium interdum. Morbi mattis elementum orci, nec dictum porta cursus justo. Quisque
              ultricies lorem in ligula condimentum, et egestas turpis sagittis. Cras ac nunc urna.
              Nullam eget lobortis purus. Phasellus vitae tortor non est placerat tristique faucibus
              magna adipiscing aliquet blandit nisi dolor accumsan nascetur lorem. Vis enim. Curae.
              Mi arcu vis aliquam ipsum non accumsan ac mi faucibus amet eu accumsan erat interdum
              semper accumsan. Eu sagittis tellus accumsan neque lorem penatibus in porttitor.
              Vivamus commodo curae. Condimentum lobortis praesent id ac lorem. Lorem vis ipsum
              dolor feugiat consequat dolore adipiscing.
            </p>
          </section>
          <article>
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
