import React from 'react';
import { Link } from 'gatsby';

interface MenuLink {
  name: string;
  href: string;
}

interface MobileMenuProps {
  menuLinks: MenuLink[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menuLinks }) => (
  <nav>
    <ul>
      {menuLinks.map(link => (
        <li key={link.href}>
          <Link className="link depth-0" to={link.href}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default MobileMenu;
