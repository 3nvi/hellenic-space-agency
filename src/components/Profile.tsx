import React from 'react';
import { Helmet } from 'react-helmet';

interface ProfileProps {
  tProfileKey: string;
  image: string;
}

const t = (x: string) => x;
const Profile: React.FC<ProfileProps> = ({ tProfileKey, image }) => {
  const name = t(`about.${tProfileKey}.name`);
  const role = t(`about.${tProfileKey}.role`);
  const bio = t(`about.${tProfileKey}.bio`);
  const link = t(`about.${tProfileKey}.link`);
  return (
    <React.Fragment>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            image,
            jobTitle: role,
            name,
            nationality: {
              '@context': 'https://schema.org',
              '@type': 'Country',
              name: 'Greece',
            },
            url: link,
          })}
        </script>
      </Helmet>
      <section className="profile">
        <div className="image left">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={image} width={300} height={300} alt={`${name} Avatar`} />
          </a>
        </div>
        <div>
          <header>
            <h3>{name}</h3>
            <h4>{role}</h4>
          </header>
          <p>{bio}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {t(`common.learnMore`)}
          </a>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Profile;
