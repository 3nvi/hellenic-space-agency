import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';

interface MenuLink {
  id: string;
  href: string;
}

interface MobileMenuProps {
  menuLinks: MenuLink[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menuLinks }) => {
  const { t } = useTranslation();
  return (
    <nav>
      <ul>
        {menuLinks.map(link => (
          <li key={link.href}>
            <Link className="link depth-0" to={link.href}>
              {t(`header.links.${link.id}`)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
