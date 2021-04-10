import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import Link from '../components/Link';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

const t = (x: string) => x;
const Three: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "pic04.png" }) {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const fluidImage = data.desktop.childImageSharp.fluid;
  return (
    <BackgroundImage
      Tag="section"
      id="three"
      className="spotlight style3 left inactive"
      fluid={fluidImage}
    >
      <span className="image fit main bottom">
        <Img fluid={fluidImage} alt="Futuristic Landscape" />
      </span>
      <Fade left big>
        <div className="content">
          <header>
            <h2>{t('landing.missions.2.title')}</h2>
          </header>
          <p>{t('landing.missions.2.details')}</p>
          <ul className="actions">
            <li>
              <Link to="/about/" className="button">
                {t('common.learnMore')}
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
        {t('common.next')}
      </ScrollLink>
    </BackgroundImage>
  );
};

export default Three;
