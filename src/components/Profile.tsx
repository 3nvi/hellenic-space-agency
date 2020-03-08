import React from 'react';
import { useTranslation } from 'react-i18next';
interface ProfileProps {
  tProfileKey: string;
  image: string;
}
const Profile: React.FC<ProfileProps> = ({ tProfileKey, image }) => {
  const { t } = useTranslation();

  return (
    <section className="profile">
      <div className="image left">
        <a href={t(`about.${tProfileKey}.link`)} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            width={300}
            height={300}
            alt={`${t(`about.${tProfileKey}.name`)} Avatar`}
          />
        </a>
      </div>
      <div>
        <header>
          <h3>{t(`about.${tProfileKey}.name`)}</h3>
          <h4>{t(`about.${tProfileKey}.role`)}</h4>
        </header>
        <p>{t(`about.${tProfileKey}.bio`)}</p>
        <a href={t(`about.${tProfileKey}.link`)} target="_blank" rel="noopener noreferrer">
          {t(`common.learnMore`)}
        </a>
      </div>
    </section>
  );
};

export default Profile;
