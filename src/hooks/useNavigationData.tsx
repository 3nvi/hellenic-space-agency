import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import useTranslation from '../hooks/useTranslation';
import { GetNavigationLabelsQuery } from '../../graphql-types';

type NavigationData = {
  href: string;
  label: string;
  children?: NavigationData[];
};

const useNavigationData = (): NavigationData[] => {
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
        body: file(name: { eq: "body" }) {
          ...NavigationLabelData
        }
        about: file(name: { eq: "about" }) {
          ...NavigationLabelData
        }
        financial: file(name: { eq: "financial" }) {
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

  const landingNavigationData = useTranslation(data.landing);
  const bodyNavigationData = useTranslation(data.body);
  const aboutNavigationData = useTranslation(data.about);
  const financialNavigationData = useTranslation(data.financial);
  const newsNavigationData = useTranslation(data.news);
  const careersNavigationData = useTranslation(data.careers);
  const contactNavigationData = useTranslation(data.contact);

  return React.useMemo(
    () => [
      { label: landingNavigationData.navigationLabel, href: '/' },
      {
        label: bodyNavigationData.navigationLabel,
        href: '#',
        children: [
          { label: aboutNavigationData.navigationLabel, href: '/about/' },
          { label: careersNavigationData.navigationLabel, href: '/careers/' },
          { label: financialNavigationData.navigationLabel, href: '/financial/' },
        ],
      },
      { label: newsNavigationData.navigationLabel, href: '/news/' },
      { label: contactNavigationData.navigationLabel, href: '/contact' },
    ],
    [
      landingNavigationData,
      bodyNavigationData,
      aboutNavigationData,
      financialNavigationData,
      newsNavigationData,
      careersNavigationData,
      contactNavigationData,
    ]
  );
};

export default useNavigationData;
