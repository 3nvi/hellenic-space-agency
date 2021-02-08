import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { useTranslation } from '@3nvi/gatsby-theme-intl';
import { Helmet } from 'react-helmet';

interface NewsEntry {
  title: string;
  body: string;
  date: string;
  attachments?: {
    title: string;
    url: string;
  }[];
}

const News: React.FC = () => {
  const { t } = useTranslation();

  const newsItems = t<NewsEntry[]>('news.items', { returnObjects: true });
  return (
    <Layout isHeaderSticky>
      <SEO title={t('news.mainTitle')} />

      <main className="wrapper style1">
        <div className="container">
          <header className="major">
            <h2>{t('news.mainTitle')}</h2>
            <p>{t('news.mainSubtitle')}</p>
          </header>
          <article className="row">
            {newsItems.map(item => (
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
                <section className="news-item col-12">
                  <header className="flex justify-between">
                    <h3>{item.title}</h3>
                    <time>{new Date(item.date).toLocaleString()}</time>
                  </header>
                  <p>{item.body}</p>
                  {item.attachments && (
                    <footer>
                      {item.attachments.map(attachment => (
                        <a
                          key={attachment.url}
                          href={attachment.url}
                          title={attachment.title}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {attachment.title}
                        </a>
                      ))}
                    </footer>
                  )}
                </section>
              </React.Fragment>
            ))}
          </article>
        </div>
      </main>
    </Layout>
  );
};

export default News;
