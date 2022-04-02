import React from "react";

export const Footer = () => {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top bg-dark text-white">
      <div className="row text-center">
        <div className="col-4">
          <h5>Home</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="text-white" href="#inicio">
                Inicio
              </a>
            </li>
            <li>
              <a className="text-white" href="#top-projects">
                Mejores proyectos
              </a>
            </li>
            <li>
              <a className="text-white" href="#featured-projects">
                Otros proyectos
              </a>
            </li>
            <li>
              <a className="text-white" href="#tech-used">
                Tecnologias mas utilizadas
              </a>
            </li>
            <li>
              <a className="text-white" href="#soft-skills">
                Habilidades blandas
              </a>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="text-white" href="/">
                Resource
              </a>
            </li>
            <li>
              <a className="text-white" href="/">
                Resource name
              </a>
            </li>
            <li>
              <a className="text-white" href="/">
                Another resource
              </a>
            </li>
            <li>
              <a className="text-white" href="/">
                Final resource
              </a>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="text-white" href="/">
                Team
              </a>
            </li>
            <li>
              <a className="text-white" href="/">
                Locations
              </a>
            </li>
            <li>
              <a className="text-white" href="/">
                Privacy
              </a>
            </li>
            <li>
              <a className="text-white" href="/">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
