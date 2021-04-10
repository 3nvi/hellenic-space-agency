import React from 'react';
import Link from '../components/Link';
import LanguagePicker from './LanguagePicker';

const t = (x: string) => x;

interface MenuLink {
  id: string;
  href: string;
}

interface MobileMenuProps {
  menuLinks: MenuLink[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menuLinks }) => {
  return (
    <div>
      <LanguagePicker />
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
