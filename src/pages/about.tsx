import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Profile from '../components/Profile';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Markdown from '../components/Markdown';
import { AboutPageQuery, MarkdownRemarkFrontmatterElTeam } from '../../graphql-types';
import useTranslation from '../hooks/useTranslation';

const About: React.FC<Page<AboutPageQuery>> = ({ data }) => {
  const translatedData = useTranslation(data.about);
  return (
    <Layout>
      <SEO title={translatedData.mainTitle} />
      <BackgroundImage
        Tag="section"
        className="banner"
        fluid={translatedData.mainBackground.childImageSharp.fluid}
      >
        <div className="content flex-center">
          <header className="major">
            <h2>{translatedData.mainTitle}</h2>
            <p>{translatedData.mainSubtitle}</p>
          </header>
        </div>
      </BackgroundImage>
      <main className="wrapper style1">
        <div className="container">
          <section id="content">
            <Markdown>{translatedData.content}</Markdown>
          </section>
          {translatedData.team?.length > 0 && (
            <article>
              <div style={{ margin: '5em auto' }}>
                <header className="major">
                  <h2>{translatedData.membersSubtitle}</h2>
                </header>
              </div>
              {translatedData.team.map(member => (
                <Profile key={member.name} member={member as MarkdownRemarkFrontmatterElTeam} />
              ))}
            </article>
          )}
          {translatedData.scientificStaff?.length > 0 && (
            <article>
              <div style={{ margin: '5em auto' }}>
                <header className="major">
                  <h2>{translatedData.staffSubtitle}</h2>
                </header>
              </div>
              {translatedData.scientificStaff.map(member => (
                <Profile key={member.name} member={member as MarkdownRemarkFrontmatterElTeam} />
              ))}
            </article>
          )}
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
            staffSubtitle
            team {
              avatar {
                publicURL
              }
              bio
              link
              name
              role
            }
            scientificStaff {
              avatar {
                publicURL
              }
              bio
              link
              name
              role
            }
            mainBackground {
              childImageSharp {
                fluid(quality: 70, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          en {
            mainBackground {
              childImageSharp {
                fluid(quality: 70, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            mainTitle
            mainSubtitle
            content
            membersSubtitle
            staffSubtitle
            team {
              avatar {
                publicURL
              }
              bio
              link
              name
              role
            }
            scientificStaff {
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
