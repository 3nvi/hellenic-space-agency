import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404" description="The page you requested could not be found" />
    <main className="wrapper style1">
      <section id="one">
        <div className="inner">
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </section>
    </main>
  </Layout>
);

export default NotFoundPage;
