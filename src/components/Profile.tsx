import React from 'react';
import { useTranslation } from 'react-i18next';
interface ProfileProps {
  tProfileKey: string;
  image: string;
  alignImage: 'left' | 'right';
}
const Profile: React.FC<ProfileProps> = ({ tProfileKey, image, alignImage }) => {
  const { t } = useTranslation();

  return (
    <section className="profile">
      <header>
        <h3>{t(`about.${tProfileKey}.name`)}</h3>
        <a href={t(`about.${tProfileKey}.link`)} target="_blank" rel="noopener noreferrer">
          {t(`about.${tProfileKey}.link`)}
        </a>
      </header>
      <p>
        <span className={`image ${alignImage}`}>
          <a href={t(`about.${tProfileKey}.link`)} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              width={300}
              height={300}
              alt={`${t(`about.${tProfileKey}.name`)} Avatar`}
            />
          </a>
        </span>
        {t(`about.${tProfileKey}.bio`)}
      </p>
    </section>
  );
};

export default Profile;
