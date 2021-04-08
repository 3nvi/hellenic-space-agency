import React from 'react';
import Layout from '../components/Layout';
import nounesis from '../assets/images/nounesis.jpg';
import sergis from '../assets/images/sergis.jpg';
import daglis from '../assets/images/daglis.jpg';
import sotiriadis from '../assets/images/sotiriadis.jpg';
import synolakis from '../assets/images/synolakis.jpg';
import giannakaki from '../assets/images/giannakaki.jpg';
import karantzalos from '../assets/images/karantzalos.jpg';
import SEO from '../components/SEO';
import Profile from '../components/Profile';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { AboutPageQuery } from '../../graphql-types';

const t = (x: string) => x;

const About: React.FC<Page<AboutPageQuery>> = ({ data, pageContext: { lang } }) => {
  return (
    <Layout>
      <SEO title={data.about.childMarkdownRemark.frontmatter['en'].mainTitle} />
      <BackgroundImage
        Tag="section"
        className="banner"
        fluid={
          data.about.childMarkdownRemark.frontmatter[lang].team[0].avatar.childImageSharp.fluid
        }
      >
        <div className="content flex-center">
          <header className="major">
            <h2>{data.about.childMarkdownRemark.frontmatter[lang].mainTitle}</h2>
            <p>{data.about.childMarkdownRemark.frontmatter[lang].mainSubtitle}</p>
          </header>
        </div>
      </BackgroundImage>

      <main className="wrapper style1">
        <div className="container">
          <section id="content">
            <h2>{data.meta.childContentYaml[lang].title}</h2>
            <p style={{ whiteSpace: 'pre-line' }}>
              {data.about.childMarkdownRemark.frontmatter[lang].content}
            </p>
            <footer>
              <div>
                <a
                  href="/assets/documents/ELKED_creation.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('about.creationDocumentLink')}
                </a>
              </div>
              <div>
                <a
                  href="/assets/documents/ELKED_assignments.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('about.assignmentsDocumentLink')}
                </a>
              </div>
            </footer>
          </section>
          <article>
            <div style={{ margin: '5em auto' }}>
              <header className="major">
                <h2>{data.about.childMarkdownRemark.frontmatter[lang].membersSubtitle}</h2>
              </header>
            </div>
            <Profile tProfileKey="daglis" image={daglis} />
            <Profile tProfileKey="nounesis" image={nounesis} />
            <Profile tProfileKey="sergis" image={sergis} />
            <Profile tProfileKey="karantzalos" image={karantzalos} />
            <Profile tProfileKey="sotiriadis" image={sotiriadis} />
            <Profile tProfileKey="synolakis" image={synolakis} />
            <Profile tProfileKey="giannakaki" image={giannakaki} />
          </article>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query AboutPage {
    meta: file(name: { eq: "meta" }) {
      childContentYaml {
        el {
          title
        }
        en {
          title
        }
      }
    }
    about: file(name: { eq: "about" }) {
      childMarkdownRemark {
        frontmatter {
          el {
            mainTitle
            mainSubtitle
            content
            membersSubtitle
            team {
              avatar {
                childImageSharp {
                  fluid(quality: 30, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              bio
              link
              name
              role
            }
          }
          en {
            mainTitle
            mainSubtitle
            content
            membersSubtitle
            team {
              avatar {
                childImageSharp {
                  fluid(quality: 30, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              bio
              link
              name
              role
            }
          }
        }
      }
    }
    desktop: file(relativePath: { eq: "pic07.jpg" }) {
      childImageSharp {
        fluid(quality: 30, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default About;
