import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Layout isHeaderSticky>
      <SEO title={t('contact.mainTitle')} />

      <main className="wrapper style1">
        <div className="container">
          <header className="major">
            <h2>{t('contact.mainTitle')}</h2>
            <p>{t('contact.mainSubtitle')}</p>
          </header>
          <div className="row gtr-150 aln-center">
            <div className="col-6 col-12-medium ">
              <section id="sidebar">
                <h3>{t('contact.location')}</h3>
                <p>
                  <address>Βαλτετσίου 35, Χαλανδρι, 15234, Αττική, Ελλάδα</address>
                </p>
                <p>
                  <a href="mailto:contact@hsa.gr" rel="noopener noreferrer">
                    contact@hsa.gr
                  </a>
                  <br />
                  <a href="tel:+302105555555" rel="noopener noreferrer">
                    +30 210 55 55 555
                  </a>
                </p>
              </section>
              <section id="content">
                <iframe
                  title="Google maps location"
                  width="100%"
                  height="275"
                  frameBorder="0"
                  style={{ border: 'none', borderRadius: '3px' }}
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB6KD7SuUeUkddpfpkaZ2oylDtkZjTX4es
    &q=Kapodistrian+Universiry+Physics+Athens"
                  allowFullScreen
                />
              </section>
            </div>
            <div className="col-6 col-12-medium ">
              <section>
                <h3>{t('contact.contactFormTitle')}</h3>
                <p>{t('contact.contactFormSubtitle')}</p>
                <form method="post" action="#">
                  <div className="row gtr-uniform gtr-50">
                    <div className="col-6 col-12-xsmall">
                      <input type="text" name="name" id="name" placeholder="Name" />
                    </div>
                    <div className="col-6 col-12-xsmall">
                      <input type="email" name="email" id="email" placeholder="Email" />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Enter your message"
                        rows={6}
                      />
                    </div>
                    <div className="col-12">
                      <input type="submit" value="Send Message" className="primary fit" />
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Contact;
