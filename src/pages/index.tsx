import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import One from '../components/One';
import Two from '../components/Two';
import Three from '../components/Three';
import Four from '../components/Four';
import Five from '../components/Five';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <Layout>
      <SEO title="Gatsby Starter - Landed" />
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
