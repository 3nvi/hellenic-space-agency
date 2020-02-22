import React from 'react';
import pic01 from '../assets/images/pic01.jpg';
import { Link as ScrollLink } from 'react-scroll';

const Banner: React.FC = () => (
  <section id="banner">
    <div className="content">
      <header>
        <h2>Hellenic Space Agency</h2>
        <p>
          Commited to do something really really big.
          <br />
          Just don't know what yet
        </p>
      </header>
      <span className="image">
        <img src={pic01} alt="intro" />
      </span>
    </div>
    <ScrollLink
      to="one"
      className="goto-next"
      activeClass="active"
      smooth={true}
      offset={50}
      duration={1500}
      spy={true}
    >
      Next
    </ScrollLink>
  </section>
);

export default Banner;