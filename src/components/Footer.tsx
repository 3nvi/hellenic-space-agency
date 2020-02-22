import React from 'react';

const Footer: React.FC = () => (
  <footer id="footer">
    <ul className="icons">
      <li>
        <a href="/" className="icon brands alt fa-twitter">
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a href="/" className="icon brands alt fa-instagram">
          <span className="label">Instagram</span>
        </a>
      </li>
      <li>
        <a href="/" className="icon solid alt fa-envelope">
          <span className="label">Email</span>
        </a>
      </li>
    </ul>
    <ul className="copyright">
      <li>&copy; All rights reserved.</li>
      <li>Hellenic Space Agency</li>
    </ul>
  </footer>
);

export default Footer;
