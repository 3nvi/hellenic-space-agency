import React from 'react';
import Fade from 'react-reveal/Fade';
import { useTranslation } from '@3nvi/gatsby-theme-intl';
import { Link } from '@3nvi/gatsby-theme-intl';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const Four: React.FC = () => {
  const { t } = useTranslation();
  const [goalIndex, setGoalIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setGoalIndex((goalIndex + 1) % 6);
    }, 7500);

    return () => clearInterval(interval);
  }, [goalIndex, setGoalIndex]);

  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "pic08.jpg" }) {
          childImageSharp {
            fluid(quality: 4, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  return (
    <BackgroundImage
      Tag="section"
      id="four"
      className="wrapper style1 special fade-up"
      fluid={data.desktop.childImageSharp.fluid}
    >
      <Fade>
        <div className="container">
          <header className="major">
            <h2>{t(`landing.goalsTitle`)}</h2>
            <p>{t(`landing.goalsSubtitle`)}</p>
          </header>
          <div className="box alt">
            <div className="row gtr-uniform">
              <Fade delay={200}>
                <section className="col-12-xsmall align-center full-width">
                  <h3>{t(`landing.goals.${goalIndex}.title`)}</h3>
                  <p>{t(`landing.goals.${goalIndex}.details`)}</p>
                </section>
              </Fade>
            </div>
          </div>
          <footer className="major">
            <ul className="actions special">
              <li>
                <Link to="/about/" className="button">
                  {t('common.learnMore')}
                </Link>
              </li>
            </ul>
          </footer>
        </div>
      </Fade>
    </BackgroundImage>
  );
};

export default Four;
