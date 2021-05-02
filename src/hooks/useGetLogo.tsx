import { graphql, useStaticQuery } from 'gatsby';
import { GetLogoQuery } from '../../graphql-types';
import useTranslation from './useTranslation';

const useGetLogo = () => {
  const data = useStaticQuery<GetLogoQuery>(
    graphql`
      query getLogo {
        meta: file(name: { eq: "meta" }) {
          childMarkdownRemark {
            frontmatter {
              el {
                logo {
                  publicURL
                }
              }
              en {
                logo {
                  publicURL
                }
              }
            }
          }
        }
      }
    `
  );

  const { logo } = useTranslation(data.meta);
  return logo;
};

export default useGetLogo;
