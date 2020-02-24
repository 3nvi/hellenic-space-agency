import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from './Link';

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
    <div>
      <div className="language-selector-container">
        <Link aria-label="Change language to greek" to="/el/">
          ΕΛ
        </Link>
        <span>|</span>
        <Link aria-label="Change language to english" to="/en/">
          EN
        </Link>
      </div>
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
    </div>
  );
};

export default MobileMenu;
