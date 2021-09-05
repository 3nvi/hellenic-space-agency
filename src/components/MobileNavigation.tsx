import React from 'react';
import Link from './Link';
import useNavigationData from '../hooks/useNavigationData';

const MobileNavigation: React.FC = () => {
  const data = useNavigationData();
  return (
    <nav>
      <ul>
        {data.map(entry => (
          <li key={entry.href}>
            <Link className="link depth-0" to={entry.href}>
              {entry.label}
            </Link>
            {entry.children && (
              <ul>
                {entry.children.map(childEntry => (
                  <li key={childEntry.href}>
                    <Link className="link depth-1" to={childEntry.href}>
                      {childEntry.label}
                    </Link>
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

export default MobileNavigation;
