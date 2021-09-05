import React from 'react';
import { graphql } from 'gatsby';
import useTranslation from '../hooks/useTranslation';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Markdown from '../components/Markdown';
import { FinancialPageQuery } from '../../graphql-types';

const Financial: React.FC<Page<FinancialPageQuery>> = ({ data }) => {
  const translatedData = useTranslation(data.financial);

  return (
    <Layout isHeaderSticky>
      <SEO title={translatedData.mainTitle} />
      <main className="wrapper style1">
        <div className="container">
          <header className="major">
            <h2>{translatedData.mainTitle}</h2>
          </header>
        </div>
        <article>
          <div className="row aln-center">
            <div className="col-12-xs">
              <Markdown>{translatedData.content}</Markdown>
            </div>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query FinancialPage {
    financial: file(name: { eq: "financial" }) {
      childMarkdownRemark {
        frontmatter {
          el {
            mainTitle
            content
          }
          en {
            mainTitle
            content
          }
        }
      }
    }
  }
`;

export default Financial;
