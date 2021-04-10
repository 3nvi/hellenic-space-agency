import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Profile from '../components/Profile';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Markdown from '../components/Markdown';
import { AboutPageQuery, MarkdownRemarkFrontmatterElTeam } from '../../graphql-types';

const About: React.FC<Page<AboutPageQuery>> = ({ data, pageContext: { lang } }) => {
  return (
    <Layout>
      <SEO title={data.about.childMarkdownRemark.frontmatter['en'].mainTitle} />
      <BackgroundImage
        Tag="section"
        className="banner"
        fluid={
          data.about.childMarkdownRemark.frontmatter['en'].mainBackground.childImageSharp.fluid
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
            <Markdown>{data.about.childMarkdownRemark.frontmatter[lang].content}</Markdown>
          </section>
          <article>
            <div style={{ margin: '5em auto' }}>
              <header className="major">
                <h2>{data.about.childMarkdownRemark.frontmatter[lang].membersSubtitle}</h2>
              </header>
            </div>
            {data.about.childMarkdownRemark.frontmatter[lang].team.map(member => (
              <Profile key={member.name} member={member as MarkdownRemarkFrontmatterElTeam} />
            ))}
          </article>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query AboutPage {
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
                publicURL
              }
              bio
              link
              name
              role
            }
          }
          en {
            mainBackground {
              childImageSharp {
                fluid(quality: 50, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            mainTitle
            mainSubtitle
            content
            membersSubtitle
            team {
              avatar {
                publicURL
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
  }
`;

export default About;
