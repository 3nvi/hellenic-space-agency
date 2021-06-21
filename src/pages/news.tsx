import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import useTranslation from '../hooks/useTranslation';
import Layout from '../components/Layout';
import Markdown from '../components/Markdown';
import SEO from '../components/SEO';
import { NewsPageQuery } from '../../graphql-types';
import { slugify } from '../utils/common';

const News: React.FC<Page<NewsPageQuery>> = ({ data }) => {
  const translatedData = useTranslation(data.news);
  return (
    <Layout isHeaderSticky>
      <SEO title={translatedData.mainTitle} />
      <main className="wrapper style1">
        <div className="container">
          <article className="row">
            {translatedData.items.map(item => (
              <React.Fragment key={item.title}>
                <Helmet>
                  <script type="application/ld+json">
                    {JSON.stringify({
                      '@context': 'https://schema.org',
                      '@type': 'Article',
                      headline: item.title,
                      datePublished: item.date,
                      articleBody: item.body,
                    })}
                  </script>
                </Helmet>
                <section className="news-item col-12" id={slugify(item.title)}>
                  <header className="flex justify-between">
                    <h3>{item.title}</h3>
                    <time>{new Date(item.date).toLocaleDateString('el')}</time>
                  </header>
                  <Markdown>{item.body}</Markdown>
                </section>
              </React.Fragment>
            ))}
          </article>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query NewsPage {
    news: file(name: { eq: "news" }) {
      childMarkdownRemark {
        frontmatter {
          el {
            mainTitle
            mainSubtitle
            items {
              title
              body
              date
            }
          }
          en {
            mainTitle
            mainSubtitle
            items {
              title
              body
              date
            }
          }
        }
      }
    }
  }
`;

export default News;
