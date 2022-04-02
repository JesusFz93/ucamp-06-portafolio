import React from "react";

import topProjects from "../../data/topProjects";
import techSkills from "../../data/techSkills";
import { TechSkills } from "../../components/TechSkills";
import { TopProjects } from "../../components/TopProjects";

import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import javascript from "../../assets/images/javascript.png";

export const HomePage = () => {
  return (
    <>
      <main id="inicio" className="row">
        <article className="col">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={html} className="d-block w-100" alt="1" />
              </div>
              <div className="carousel-item">
                <img src={css} className="d-block w-100" alt="2" />
              </div>
              <div className="carousel-item">
                <img src={javascript} className="d-block w-100" alt="3" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </article>
      </main>
      <section id="top-projects" className="row pt-4">
        <article className="col">
          <header>
            <h2>Mejores proyectos</h2>
          </header>
        </article>
      </section>
      <section className="row row-cols-1 row-cols-md-3 g-4">
        {topProjects.map((topProject) => (
          <TopProjects key={topProject.id} {...topProject} />
        ))}
      </section>
      <section id="featured-projects" className="row pt-4">
        <article className="col">
          <header>
            <h2>Otros proyectos</h2>
          </header>
        </article>
      </section>
      <section className="row row-cols-1 row-cols-md-3 g-4">
        <article className="col">
          <ul className="list-group">
            <li className="list-group-item">
              <strong>AWM</strong>: Aplicacion web para la gestion de almacen de
              embarques.
            </li>
            <li className="list-group-item">
              <strong>MEGA RH</strong>: Aplicacion web para la adminitracion del
              recurso humano de la empresa.
            </li>
            <li className="list-group-item">
              <strong>CLOCK ASIST</strong>: Aplicacion web para la
              administracion de la asistencia del personal.
            </li>
          </ul>
        </article>
        <article className="col">
          <ul className="list-group">
            <li className="list-group-item">
              <strong>MTS</strong>: Aplicacion web para el control de etiquetado
              de producto para el area de produccion.
            </li>
            <li className="list-group-item">
              <strong>ADMON</strong>: Aplicacion web de soporte para la
              administracion de los recursos de IT.
            </li>
            <li className="list-group-item">
              <strong>QAS</strong>: Aplicacion web para la gestion de la calidad
              a nivel organizacional.
            </li>
          </ul>
        </article>
        <article className="col">
          <ul className="list-group">
            <li className="list-group-item">
              <strong>IT HELP DESK</strong>: Aplicacion web para solicitar
              soporte por parte de Sistemas.
            </li>
            <li className="list-group-item">
              <strong>CCARE</strong>: Aplicacion de escritorio para la gestion
              de la informacion de clientes.
            </li>
            <li className="list-group-item">
              <strong>TRANSFER</strong>: Aplicacion de consola para hacer
              transferencia de material entre locaciones de almacen.
            </li>
          </ul>
        </article>
      </section>
      <section id="tech-used" className="row pt-4">
        <article className="col">
          <header>
            <h2>Tecnologias mas utilizadas</h2>
          </header>
        </article>
      </section>
      <section className="row">
        <article className="col">
          <div>
            {techSkills.map((techSkill) => (
              <TechSkills key={techSkill.id} {...techSkill} />
            ))}
          </div>
        </article>
      </section>

      <section id="soft-skills" className="row pt-4">
        <article className="col">
          <header>
            <h2>Habilidades blandas</h2>
            <p>
              Las habilidades blandas son las que se necesitan y son comunes en
              cualquier tipo de trabajo para un desarrollo óptimo del mismo.
            </p>
          </header>
        </article>
      </section>
      <section className="row">
        <article className="col-12">
          <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="data:image/png;base64,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"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Comunicacion</h5>
                  <p className="card-text">
                    Cuento con una buena comunicacion con mis companeros del
                    trabajo, asi como tambien con cualquier nivel jerarquico
                    dentro de la organizacion.
                  </p>
                  <p className="card-text">
                    Mejor herramienta para la comunicacion:
                    <strong className="text-muted"> Teams</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="col-12 d-flex justify-content-end">
          <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Trabajo en equipo</h5>
                  <p className="card-text">
                    Tengo un gran sentido de pertenencia y una gran capacidad de
                    ser parte de un equipo, me gusta trabajar en equipo y tener
                    la oportunidad de compartir con otros mi experiencia y
                    conocimientos.
                  </p>
                  <p className="card-text">
                    Mejor herramienta para el trabajo en equipo:
                    <strong className="text-muted"> Team work</strong>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src="data:image/jpeg;base64,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"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </article>

        <article className="col-12">
          <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://kom-agency.com/wp-content/uploads/2020/07/SER-Autodidacta-persona-1.jpg"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Autodidacta</h5>
                  <p className="card-text">
                    Aprendo mucho de otras personas pero tambien tengo la
                    capacidad de hacer investigaciones y aprender de manera
                    autodidacta.
                  </p>
                  <p className="card-text">
                    Mejor herramienta para el aprendizaje autodidacta:
                    <strong className="text-muted"> Internet</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="col-12 d-flex justify-content-end">
          <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Liderazgo</h5>
                  <p className="card-text">
                    Tengo la habilidad de liderar equipos y proyectos. En base a
                    la prioridad de los proyectos y tomando en cuenta las
                    diferentes habilidades de cada uno de los miembros del
                    equipo, puedo designar tareas clave para que el proyecto
                    salga a tiempo y con calidad.
                  </p>
                  <p className="card-text">
                    Mejor tecnica para el liderazgo:
                    <strong className="text-muted"> SCRUM</strong>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src="https://telesup.edu.pe/wp-content/uploads/2021/05/liderazgo-empresarial.jpg"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </article>
        <article className="col-12">
          <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://sonorastar.com/wp-content/uploads/2019/12/proceso-de-toma-de-decisiones.jpg"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Toma de decisiones</h5>
                  <p className="card-text">
                    Cuento con la capacidad de tomnar decisiones que puedan ser
                    de suma importancia para el futuro del proyecto
                  </p>
                  <p className="card-text">
                    Mejor herramienta para el aprendizaje autodidacta:
                    <strong className="text-muted"> Graficas</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className="row pt-3">
        <section className="col">
          <h2 className="text-center">Formulario de contacto</h2>
        </section>
      </section>

      <section className="row d-flex justify-content-center">
        <article className="col-md-3">
          <form>
            <input type="text" className="form-control" placeholder="Asunto" />
            <br />
            <textarea
              type="text"
              className="form-control"
              placeholder="Mensaje"
            />
            <br />
            <button className="btn btn-success">Enviar mensaje</button>
          </form>
        </article>
      </section>
    </>
  );
};
