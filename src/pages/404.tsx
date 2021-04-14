import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';
import useTranslation from '../hooks/useTranslation';
import { NotFoundPageQuery } from '../../graphql-types';

const NotFoundPage: React.FC<Page<NotFoundPageQuery>> = ({ data }) => {
  const translatedData = useTranslation(data.notFound);

  return (
    <Layout>
      <SEO title="404" />
      <main className="wrapper style1">
        <section className="container" style={{ padding: '10em' }}>
          <header className="major">
            <h2>{translatedData.mainTitle}</h2>
            <p>{translatedData.mainSubtitle}</p>
          </header>
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query NotFoundPage {
    notFound: file(name: { eq: "404" }) {
      childMarkdownRemark {
        frontmatter {
          el {
            mainTitle
            mainSubtitle
          }
          en {
            mainTitle
            mainSubtitle
          }
        }
      }
    }
  }
`;

export default NotFoundPage;
