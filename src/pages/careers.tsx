import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Markdown from '../components/Markdown';
import useTranslation from '../hooks/useTranslation';
import { CareersPageQuery } from '../../graphql-types';

const Careers: React.FC<Page<CareersPageQuery>> = ({ data }) => {
  const translatedData = useTranslation(data.careers);
  return (
    <Layout isHeaderSticky>
      <SEO title={translatedData.mainTitle} />
      <main className="wrapper style1">
        <div className="container">
          <header className="major">
            <h2>{translatedData.mainTitle}</h2>
            <p>{translatedData.mainSubtitle}</p>
          </header>
          <article>
            <Markdown>{translatedData.content}</Markdown>
          </article>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query CareersPage {
    careers: file(name: { eq: "careers" }) {
      childMarkdownRemark {
        frontmatter {
          el {
            mainTitle
            mainSubtitle
            content
          }
          en {
            mainTitle
            mainSubtitle
            content
          }
        }
      }
    }
  }
`;

export default Careers;
