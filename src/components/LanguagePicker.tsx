import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { usePageContext } from '../context/PageContext';

const LanguagePicker: React.FC = () => {
  const { originalPath } = usePageContext();
  return (
    <div className="language-selector-container">
      <GatsbyLink aria-label="Change language to greek" to={`/el/${originalPath}`}>
        ΕΛ
      </GatsbyLink>
      <span>|</span>
      <GatsbyLink aria-label="Change language to english" to={`/el/${originalPath}`}>
        EN
      </GatsbyLink>
    </div>
  );
};

export default LanguagePicker;
