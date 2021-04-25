import React from 'react';
import Link from './Link';
import { graphql, useStaticQuery } from 'gatsby';
import useTranslation from '../hooks/useTranslation';
import { GetNavigationLabelsQuery } from '../../graphql-types';

interface NavigationProps {
  orientation: 'horizontal' | 'vertical';
}

const Navigation: React.FC<NavigationProps> = ({ orientation }) => {
  const data = useStaticQuery<GetNavigationLabelsQuery>(
    graphql`
      fragment NavigationLabelData on File {
        childMarkdownRemark {
          frontmatter {
            el {
              navigationLabel
            }
            en {
              navigationLabel
            }
          }
        }
      }
      query getNavigationLabels {
        landing: file(name: { eq: "landing" }) {
          ...NavigationLabelData
        }
        about: file(name: { eq: "about" }) {
          ...NavigationLabelData
        }
        news: file(name: { eq: "news" }) {
          ...NavigationLabelData
        }
        careers: file(name: { eq: "careers" }) {
          ...NavigationLabelData
        }
        contact: file(name: { eq: "contact" }) {
          ...NavigationLabelData
        }
      }
    `
  );

  const { navigationLabel: landingNavigationLabel } = useTranslation(data.landing);
  const { navigationLabel: aboutNavigationLabel } = useTranslation(data.about);
  const { navigationLabel: newsNavigationLabel } = useTranslation(data.news);
  const { navigationLabel: careersNavigationLabel } = useTranslation(data.careers);
  const { navigationLabel: contactNavigationLabel } = useTranslation(data.contact);

  return (
    <nav>
      <ul style={orientation === 'horizontal' ? { display: 'flex', flex: 1 } : undefined}>
        <li>
          <Link className="link depth-0" to="/">
            {landingNavigationLabel}
          </Link>
        </li>
        <li>
          <Link className="link depth-0" to="/about/">
            {aboutNavigationLabel}
          </Link>
        </li>
        <li>
          <Link className="link depth-0" to="/news/">
            {newsNavigationLabel}
          </Link>
        </li>
        <li>
          <Link className="link depth-0" to="/careers/">
            {careersNavigationLabel}
          </Link>
        </li>
        <li>
          <Link className="link depth-0" to="/contact/">
            {contactNavigationLabel}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
