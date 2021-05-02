import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import GoalsCarousel from '../components/GoalsCarousel';
import SEO from '../components/SEO';
import useTranslatedHelpers from '../hooks/useTranslatedHelpers';
import useTranslation from '../hooks/useTranslation';
import Img from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import Link from '../components/Link';
import { Link as ScrollLink } from 'react-scroll/modules';
import BackgroundImage from 'gatsby-background-image';
import Markdown from '../components/Markdown';
import { LandingPageQuery } from '../../graphql-types';

const Landing: React.FC<Page<LandingPageQuery>> = ({ data }) => {
  const { welcome, next, learnMore } = useTranslatedHelpers();
  const {
    missions,
    banner,
    mainTitle,
    mainBackground,
    goals,
    goalsTitle,
    goalsSubtitle,
    goalsBackground,
  } = useTranslation(data.landing);

  return (
    <Layout>
      <SEO title={welcome} />
      <BackgroundImage
        Tag="section"
        className="banner"
        fluid={mainBackground.childImageSharp.fluid}
      >
        <div className="content">
          <header>
            <h1>{mainTitle}</h1>
          </header>
        </div>
        <ScrollLink
          to="one"
          className="goto-next"
          activeClass="active"
          smooth={true}
          offset={50}
          duration={1500}
          spy={true}
        >
          {next}
        </ScrollLink>
      </BackgroundImage>
      <BackgroundImage
        Tag="section"
        id="0"
        className="spotlight style1 bottom inactive"
        fluid={missions[0].background.childImageSharp.fluid}
      >
        <span className="image fit main">
          <Img fluid={missions[0].background.childImageSharp.fluid} alt="Blood Moon" />
        </span>
        <Fade bottom big>
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-4 col-12-medium">
                  <header>
                    <h2>{missions[0].title}</h2>
                  </header>
                </div>
                <div className="col-4 col-12-medium">
                  <p>{missions[0].details.split('.')[0]}.</p>
                </div>
                <div className="col-4 col-12-medium">
                  <p>{missions[0].details.split('.')[1]}.</p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <ScrollLink
          to="two"
          className="goto-next"
          activeClass="active"
          smooth={true}
          offset={50}
          duration={1500}
          spy={true}
        >
          {next}
        </ScrollLink>
      </BackgroundImage>
      <BackgroundImage
        Tag="section"
        id="two"
        className="spotlight style2 right inactive"
        fluid={missions[1].background.childImageSharp.fluid}
      >
        <span className="image fit main">
          <Img fluid={missions[1].background.childImageSharp.fluid} alt="Rockets" />
        </span>
        <Fade right big>
          <div className="content">
            <header>
              <h2>{missions[1].title}</h2>
            </header>
            <p>{missions[1].details}</p>
            <ul className="actions">
              <li>
                <Link to="/about/" className="button">
                  {learnMore}
                </Link>
              </li>
            </ul>
          </div>
        </Fade>
        <ScrollLink
          to="three"
          className="goto-next"
          activeClass="active"
          smooth={true}
          offset={50}
          duration={1500}
          spy={true}
        >
          {next}
        </ScrollLink>
      </BackgroundImage>
      <BackgroundImage
        Tag="section"
        id="three"
        className="spotlight style3 left inactive"
        fluid={missions[2].background.childImageSharp.fluid}
      >
        <span className="image fit main bottom">
          <Img fluid={missions[2].background.childImageSharp.fluid} alt="Futuristic Landscape" />
        </span>
        <Fade left big>
          <div className="content">
            <header>
              <h2>{missions[2].title}</h2>
            </header>
            <p>{missions[2].details}</p>
            <ul className="actions">
              <li>
                <Link to="/about/" className="button">
                  {learnMore}
                </Link>
              </li>
            </ul>
          </div>
        </Fade>
        <ScrollLink
          to="four"
          className="goto-next"
          activeClass="active"
          smooth={true}
          offset={50}
          duration={1500}
          spy={true}
        >
          {next}
        </ScrollLink>
      </BackgroundImage>
      <BackgroundImage
        Tag="section"
        id="four"
        className="wrapper style1 special fade-up"
        fluid={goalsBackground.childImageSharp.fluid}
      >
        <Fade>
          <div className="container">
            <header className="major">
              <h2>{goalsTitle}</h2>
              <p>{goalsSubtitle}</p>
            </header>
            <div className="box alt">
              <div className="row gtr-uniform">
                <GoalsCarousel goals={goals} />
              </div>
            </div>
            <footer className="major">
              <ul className="actions special">
                <li>
                  <Link to="/about/" className="button">
                    {learnMore}
                  </Link>
                </li>
              </ul>
            </footer>
          </div>
        </Fade>
      </BackgroundImage>
      <section id="five" className="wrapper style2 special fade inactive">
        <Fade duration={2500}>
          <div className="container">
            <header>
              <Markdown>{banner}</Markdown>
            </header>
          </div>
        </Fade>
      </section>
    </Layout>
  );
};

export const query = graphql`
  fragment BackgroundImageFluid on File {
    childImageSharp {
      fluid(quality: 70, maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  query LandingPage {
    landing: file(name: { eq: "landing" }) {
      childMarkdownRemark {
        frontmatter {
          en {
            mainTitle
            mainBackground {
              ...BackgroundImageFluid
            }
            missions {
              title
              details
              background {
                ...BackgroundImageFluid
              }
            }
            goalsTitle
            goalsSubtitle
            goalsBackground {
              ...BackgroundImageFluid
            }
            goals {
              title
              details
            }
            banner
          }
          el {
            mainTitle
            mainBackground {
              ...BackgroundImageFluid
            }
            missions {
              title
              details
              background {
                ...BackgroundImageFluid
              }
            }
            goalsTitle
            goalsSubtitle
            goalsBackground {
              ...BackgroundImageFluid
            }
            goals {
              title
              details
            }
            banner
          }
        }
      }
    }
  }
`;

export default Landing;
