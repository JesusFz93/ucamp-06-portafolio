import React from "react";

export const Footer = () => {
  return (
    <footer className="pt-4 my-md-5 border-top bg-dark text-white">
      <div className="row text-center d-flex justify-content-center">
        <div className="col-4">
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
            <li>
              <a className="text-white" href="#contact">
                Seccion de contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
