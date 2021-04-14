import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import { graphql } from 'gatsby';
import useTranslation from '../hooks/useTranslation';
import { ContactPageQuery } from '../../graphql-types';

const Contact: React.FC<Page<ContactPageQuery>> = ({ data }) => {
  const translatedData = useTranslation(data.contact);
  return (
    <Layout isHeaderSticky>
      <SEO title={translatedData.mainTitle} />

      <main className="wrapper style1">
        <div className="container">
          <header className="major">
            <h2>{translatedData.mainTitle}</h2>
            <p>{translatedData.mainSubtitle}</p>
          </header>
          <div className="row gtr-150 aln-center">
            <div className="col-6 col-12-medium ">
              <section id="sidebar">
                <h3>{translatedData.addressLabel}</h3>
                <address>{translatedData.address}</address>
                <p>
                  <a href="mailto:info@hsc.gov.gr" rel="noopener noreferrer">
                    info@hsc.gov.gr
                  </a>
                </p>
              </section>
              <section id="content">
                <iframe
                  title="Google maps location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.557161795617!2d23.780523807534163!3d38.01078851463768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a199b2865b99db%3A0xf74607656ce548c8!2zzpXOu867zrfOvc65zrrPjCDOms6tzr3PhM-Bzr8gzpTOuc6xz4PPhM6uzrzOsc-Ezr_Pgg!5e0!3m2!1sen!2sgr!4v1584473048077!5m2!1sen!2sgr"
                  width="100%"
                  height="275"
                  className="google-maps"
                  aria-hidden="false"
                />
              </section>
            </div>
            <div className="col-6 col-12-medium ">
              <section>
                <h3>{translatedData.contactFormTitle}</h3>
                <p>{translatedData.contactFormSubtitle}</p>
                <ContactForm />
              </section>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query ContactPage {
    contact: file(name: { eq: "contact" }) {
      childMarkdownRemark {
        frontmatter {
          el {
            mainTitle
            mainSubtitle
            contactFormTitle
            contactFormSubtitle
            addressLabel
            address
          }
          en {
            mainTitle
            mainSubtitle
            contactFormTitle
            contactFormSubtitle
            addressLabel
            address
          }
        }
      }
    }
  }
`;

export default Contact;
