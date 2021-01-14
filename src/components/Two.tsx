import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import { useTranslation } from '@3nvi/gatsby-theme-intl';
import { Link } from '@3nvi/gatsby-theme-intl';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const Two: React.FC = () => {
  const { t } = useTranslation();

  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "pic03.jpg" }) {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const img = data.desktop.childImageSharp.fluid;
  return (
    <BackgroundImage Tag="section" id="two" className="spotlight style2 right inactive" fluid={img}>
      <span className="image fit main">
        <img width="100%" src={img.src} alt="Rockets" />
      </span>
      <Fade right big>
        <div className="content">
          <header>
            <h2>{t('landing.missions.1.title')}</h2>
          </header>
          <p>{t('landing.missions.1.details')}</p>
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
        to="three"
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

export default Two;
