import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import One from '../components/One';
import Two from '../components/Two';
import Three from '../components/Three';
import Four from '../components/Four';
import Five from '../components/Five';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <SEO title={t('common.welcome')} />
      <Banner />
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
    </Layout>
  );
};
export default Home;
