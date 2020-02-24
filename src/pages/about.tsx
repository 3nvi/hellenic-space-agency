import React from 'react';
import Layout from '../components/Layout';
import pic07 from '../assets/images/pic07.jpg';
import nounesis from '../assets/images/nounesis.jpg';
import sergis from '../assets/images/sergis.jpg';
import daglis from '../assets/images/daglis.jpg';
import karantzalos from '../assets/images/karantzalos.jpg';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Layout isHeaderSticky>
      <SEO title={t('about.title')} />
      <main className="wrapper style1">
        <div className="container">
          <header className="major">
            <h2>{t('about.title')}</h2>
            <p>{t('about.description')}</p>
          </header>

          <section id="content">
            <a href="#" className="image fit">
              <img src={pic07} alt="" />
            </a>
            <h3>Dolore Amet Consequat</h3>
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
            <section className="profile">
              <header>
                <h3>{t('about.daglis.name')}</h3>
                <a href={t('about.daglis.link')} target="_blank" rel="noopener noreferrer">
                  {t('about.daglis.link')}
                </a>
              </header>
              <p>
                <span className="image left">
                  <img src={daglis} width={300} height={300} alt="Ioannis Daglis Avatar" />
                </span>
                {t('about.daglis.bio')}
              </p>
            </section>
            <section className="profile">
              <header>
                <h3>{t('about.nounesis.name')}</h3>
                <a href={t('about.nounesis.link')} target="_blank" rel="noopener noreferrer">
                  {t('about.nounesis.link')}
                </a>
              </header>
              <p>
                <span className="image right">
                  <img src={nounesis} width={300} height={300} alt="George Nounesis Avatar" />
                </span>
                {t('about.nounesis.bio')}
              </p>
            </section>
            <section className="profile">
              <header>
                <h3>{t('about.karantzalos.name')}</h3>
                <a href={t('about.karantzalos.link')} target="_blank" rel="noopener noreferrer">
                  {t('about.karantzalos.link')}
                </a>
              </header>
              <p>
                <span className="image left">
                  <img
                    src={karantzalos}
                    width={300}
                    height={300}
                    alt="Konstantinos Karantzalos Avatar"
                  />
                </span>
                {t('about.karantzalos.bio')}
              </p>
            </section>
            <section className="profile">
              <header>
                <h3>{t('about.sergis.name')}</h3>
                <a href={t('about.sergis.link')} target="_blank" rel="noopener noreferrer">
                  {t('about.sergis.link')}
                </a>
              </header>
              <p>
                <span className="image right">
                  <img src={sergis} width={300} height={300} alt="Nikos Sergis Avatar" />
                </span>
                {t('about.sergis.bio')}
              </p>
            </section>
          </article>
        </div>
      </main>
    </Layout>
  );
};

export default About;
