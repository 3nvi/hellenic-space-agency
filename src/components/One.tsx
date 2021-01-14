import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import { useTranslation } from '@3nvi/gatsby-theme-intl';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';

const One: React.FC = () => {
  const { t } = useTranslation();
  const [missionTextPartOne, missionTextPartTwo] = t('landing.missions.0.details').split('.');

  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "pic02.jpg" }) {
          childImageSharp {
            fluid(quality: 20, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const fluidImg = data.desktop.childImageSharp.fluid;
  return (
    <BackgroundImage
      Tag="section"
      id="0"
      className="spotlight style1 bottom inactive"
      fluid={fluidImg}
    >
      <span className="image fit main">
        <Img fluid={fluidImg} alt="Blood Moon" />
      </span>
      <Fade bottom big>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-4 col-12-medium">
                <header>
                  <h2>{t('landing.missions.0.title')}</h2>
                </header>
              </div>
              <div className="col-4 col-12-medium">
                <p>{missionTextPartOne}.</p>
              </div>
              <div className="col-4 col-12-medium">
                <p>{missionTextPartTwo}.</p>
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
        {t('common.next')}
      </ScrollLink>
    </BackgroundImage>
  );
};
export default One;
