import React from 'react';

const Footer: React.FC = () => (
  <footer id="footer">
    <ul className="copyright">
      <li>&copy; All rights reserved.</li>
      <li>Hellenic Space Center</li>
      <li>
        Photos from{' '}
        <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer">
          Nasa
        </a>
        ,{' '}
        <a href="https://imgur.com/rzMZRFt" target="_blank" rel="noopener noreferrer">
          Inefect69
        </a>
        ,{' '}
        <a
          href="https://pixabay.com/images/search/planet/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pixabay
        </a>{' '}
        and{' '}
        <a
          href="https://www.inverse.com/article/44289-pink-moon-surprise-venus-mars-jupiter-saturn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inverse
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
