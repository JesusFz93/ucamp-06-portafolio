import React from "react";

export const Footer = () => {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
      <div className="row text-center">
        <div className="col-4">
          <h5>Home</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="text-muted" href="#inicio">
                Inicio
              </a>
            </li>
            <li>
              <a className="text-muted" href="#top-projects">
                Mejores proyectos
              </a>
            </li>
            <li>
              <a className="text-muted" href="#featured-projects">
                Otros proyectos
              </a>
            </li>
            <li>
              <a className="text-muted" href="#tech-used">
                Tecnologias mas utilizadas
              </a>
            </li>
            <li>
              <a className="text-muted" href="#soft-skills">
                Habilidades blandas
              </a>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="text-muted" href="/">
                Resource
              </a>
            </li>
            <li>
              <a className="text-muted" href="/">
                Resource name
              </a>
            </li>
            <li>
              <a className="text-muted" href="/">
                Another resource
              </a>
            </li>
            <li>
              <a className="text-muted" href="/">
                Final resource
              </a>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="text-muted" href="/">
                Team
              </a>
            </li>
            <li>
              <a className="text-muted" href="/">
                Locations
              </a>
            </li>
            <li>
              <a className="text-muted" href="/">
                Privacy
              </a>
            </li>
            <li>
              <a className="text-muted" href="/">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
