import React from 'react';
import Fade from 'react-reveal/Fade';

const Four: React.FC = () => (
  <Fade>
    <section id="four" className="wrapper style1 special fade-up">
      <div className="container">
        <header className="major">
          <h2>Accumsan sed tempus adipiscing blandit</h2>
          <p>Iaculis ac volutpat vis non enim gravida nisi faucibus posuere arcu consequat</p>
        </header>
        <div className="box alt">
          <div className="row gtr-uniform">
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-chart-area" />
              <h3>Ipsum sed commodo</h3>
              <p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-comment" />
              <h3>Eleifend lorem ornare</h3>
              <p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-flask" />
              <h3>Cubilia cep lobortis</h3>
              <p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-paper-plane" />
              <h3>Non semper interdum</h3>
              <p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-file" />
              <h3>Odio laoreet accumsan</h3>
              <p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-lock" />
              <h3>Massa arcu accumsan</h3>
              <p>Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit orci porttitor.</p>
            </section>
          </div>
        </div>
        <footer className="major">
          <ul className="actions special">
            <li>
              <a href="/" className="button">
                Magna sed feugiat
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  </Fade>
);

export default Four;
