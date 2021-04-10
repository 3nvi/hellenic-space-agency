import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const t = (x: string) => x;
const Banner: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "banner.jpg" }) {
          childImageSharp {
            fluid(quality: 25, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  return (
    <BackgroundImage Tag="section" className="banner" fluid={data.desktop.childImageSharp.fluid}>
      <div className="content">
        <header>
          <h1>{t('landing.mainTitle')}</h1>
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
        {t('commmon.next')}
      </ScrollLink>
    </BackgroundImage>
  );
};

export default Banner;
