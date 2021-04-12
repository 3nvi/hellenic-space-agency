import React from 'react';
import { Helmet } from 'react-helmet';
import { MarkdownRemarkFrontmatterElTeam } from '../../graphql-types';
import useTranslatedHelpers from '../hooks/useTranslatedHelpers';

interface ProfileProps {
  member: MarkdownRemarkFrontmatterElTeam;
}

const Profile: React.FC<ProfileProps> = ({ member }) => {
  const { learnMore } = useTranslatedHelpers();
  return (
    <React.Fragment>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            image: member.avatar,
            jobTitle: member.role,
            name: member.name,
            nationality: {
              '@context': 'https://schema.org',
              '@type': 'Country',
              name: 'Greece',
            },
            url: member.link,
          })}
        </script>
      </Helmet>
      <section className="profile">
        <div className="image left">
          <a href={member.link} target="_blank" rel="noopener noreferrer">
            <img
              src={member.avatar.publicURL}
              width={300}
              height={300}
              alt={`${member.name} Avatar`}
            />
          </a>
        </div>
        <div>
          <header>
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
          </header>
          <p>{member.bio}</p>
          <a href={member.link} target="_blank" rel="noopener noreferrer">
            {learnMore}
          </a>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Profile;
