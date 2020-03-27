import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { useTranslation } from '@3nvi/gatsby-theme-intl';

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO title="404" />
      <main className="wrapper style1">
        <section className="container" style={{ padding: '10em' }}>
          <header className="major">
            <h2>{t('404.mainTitle')}</h2>
            <p>{t('404.mainSubtitle')}</p>
          </header>
        </section>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
