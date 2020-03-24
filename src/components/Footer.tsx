import React from 'react';

const Footer: React.FC = () => (
  <footer id="footer">
    <ul className="copyright">
      <li>&copy; All rights reserved.</li>
      <li>Hellenic Space Center</li>
      <li>
        Photos by{' '}
        <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer">
          Nasa
        </a>
        ,{' '}
        <a href="https://imgur.com/rzMZRFt" target="_blank" rel="noopener noreferrer">
          Inefect69
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
