import React from 'react';
// import Layout from '../components/Layout';
// import SEO from '../components/SEO';
// import { Helmet } from 'react-helmet';
// const t = (x: string) => x;

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
  return <h1>News</h1>;
  // const newsItems = t<NewsEntry[]>('news.items', { returnObjects: true });
  // return (
  //   <Layout isHeaderSticky>
  //     <SEO title={t('news.mainTitle')} />
  //
  //     <main className="wrapper style1">
  //       <div className="container">
  //         <article className="row">
  //           {newsItems.map(item => (
  //             <React.Fragment key={item.title}>
  //               <Helmet>
  //                 <script type="application/ld+json">
  //                   {JSON.stringify({
  //                     '@context': 'https://schema.org',
  //                     '@type': 'Article',
  //                     headline: item.title,
  //                     datePublished: item.date,
  //                     articleBody: item.body,
  //                   })}
  //                 </script>
  //               </Helmet>
  //               <section className="news-item col-12">
  //                 <header className="flex justify-between">
  //                   <h3>{item.title}</h3>
  //                   <time>{new Date(item.date).toLocaleDateString('el')}</time>
  //                 </header>
  //                 <p>{item.body}</p>
  //                 {item.attachments && (
  //                   <footer>
  //                     {item.attachments.map(attachment => (
  //                       <a
  //                         key={attachment.url}
  //                         href={attachment.url}
  //                         title={attachment.title}
  //                         download
  //                         target="_blank"
  //                         rel="noopener noreferrer"
  //                       >
  //                         {attachment.title}
  //                       </a>
  //                     ))}
  //                   </footer>
  //                 )}
  //               </section>
  //             </React.Fragment>
  //           ))}
  //         </article>
  //       </div>
  //     </main>
  //   </Layout>
  // );
};

export default News;
