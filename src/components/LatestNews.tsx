import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { NewsQuery } from '../../graphql-types';
import useTranslation from '../hooks/useTranslation';
import { slugify } from '../utils/common';
import Link from './Link';

const LatestNews: React.FC = () => {
  const { news } = useStaticQuery<NewsQuery>(graphql`
    query News {
      news: file(name: { eq: "news" }) {
        childMarkdownRemark {
          frontmatter {
            el {
              items {
                title
                date
              }
            }
            en {
              items {
                title
                date
              }
            }
          }
        }
      }
    }
  `);

  const translatedData = useTranslation(news);
  const latestNews = React.useMemo(() => translatedData.items.slice(0, 3), [translatedData]);
  return (
    <div className="latest-news">
      {latestNews.map(item => (
        <Link to={`/news#${slugify(item.title)}`}>
          <article className="latest-news-item" key={item.title}>
            <p className="latest-news-item__title">{item.title}</p>
            <time className="latest-news-item__date">
              {new Date(item.date).toLocaleDateString('el')}
            </time>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default LatestNews;
