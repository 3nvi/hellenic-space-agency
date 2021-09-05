import React from 'react';
import Link from './Link';
import useNavigationData from '../hooks/useNavigationData';

const Navigation: React.FC = () => {
  const data = useNavigationData();
  return (
    <nav>
      <ul style={{ display: 'flex', flex: 1 }}>
        {data.map(entry => (
          <li key={entry.href} className={entry.children ? 'has-children' : undefined}>
            <Link to={entry.href}>{entry.label}</Link>
            {entry.children && (
              <ul className="nav-menu-float">
                {entry.children.map(childEntry => (
                  <li key={childEntry.href}>
                    <Link to={childEntry.href}>{childEntry.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
