/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { useTranslation, Trans } from '@3nvi/gatsby-theme-intl';
import { Helmet } from 'react-helmet';

type ListingEntry = {
  position: string;
  specialty: string;
  spots: string;
};

type ListingHeadings = Record<keyof ListingEntry | 'sn', string>;

const Careers: React.FC = () => {
  const { t } = useTranslation();

  const openings = t<ListingEntry[]>('careers.openings.items', { returnObjects: true });
  const listingHeadings = t<ListingHeadings>('careers.openings.headings', {
    returnObjects: true,
  });
  return (
    <Layout isHeaderSticky>
      <SEO title={t('careers.mainTitle')} />
      <main className="wrapper style1">
        <div className="container">
          <header className="major">
            <h2>{t('careers.mainTitle')}</h2>
            <p>{t('careers.mainSubtitle')}</p>
          </header>
          <article>
            <p>{t('careers.foreword')}</p>
            <section className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>{listingHeadings.sn}</th>
                    <th>{listingHeadings.position}</th>
                    <th>{listingHeadings.specialty}</th>
                    <th style={{ minWidth: 'min-content' }}>{listingHeadings.spots}</th>
                  </tr>
                </thead>
                <tbody>
                  {openings.map((opening, index) => (
                    <React.Fragment key={opening.position}>
                      <Helmet>
                        <script type="application/ld+json">
                          {JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'JobPosting',
                            title: opening.position,
                            qualifications: opening.specialty,
                            skills: opening.specialty,
                            totalJobOpenings: opening.spots,
                          })}
                        </script>
                      </Helmet>
                      <tr>
                        <td className="align-center">{index + 1}</td>
                        <td>{opening.position}</td>
                        <td className="align-center">{opening.specialty}</td>
                        <td className="align-center">{opening.spots}</td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </section>
            <Trans
              i18nKey="careers.afterword" // optional -> fallbacks to defaults if not provided
              components={{
                text: <p />,
                emphasis: <em />,
                deliverablesList: <ol />,
                deliverable: <li />,
                mail: <a href="mailto:sec@hsc.gov.gr" rel="noopener noreferrer" />,
                formPdfLink: (
                  <a
                    href="https://res.cloudinary.com/front-end-matters/image/upload/v1614419553/hellenic-space-center/%CE%91%CE%99%CE%A4%CE%97%CE%A3%CE%97_%CE%A5%CE%A0%CE%9F%CE%A8%CE%97%CE%A6%CE%99%CE%9F%CE%A4%CE%97%CE%A4%CE%91%CE%A3.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="submission-form-p"
                    download
                  />
                ),
                formDocxLink: (
                  <a
                    href="https://res.cloudinary.com/front-end-matters/raw/upload/v1614419558/hellenic-space-center/%CE%91%CE%99%CE%A4%CE%97%CE%A3%CE%97_%CE%A5%CE%A0%CE%9F%CE%A8%CE%97%CE%A6%CE%99%CE%9F%CE%A4%CE%97%CE%A4%CE%91%CE%A3.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="submission-form-d"
                    download
                  />
                ),
                announcementPostLink: (
                  <a
                    href="https://res.cloudinary.com/front-end-matters/image/upload/v1614419555/hellenic-space-center/%CE%A0%CF%81%CE%BF%CE%BA%CE%AE%CF%81%CF%85%CE%BE%CE%B7.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="announcement"
                    download
                  />
                ),
              }}
            />
            <footer>
              <b>{t('careers.deadline')}</b>
            </footer>
          </article>
        </div>
      </main>
    </Layout>
  );
};

export default Careers;
