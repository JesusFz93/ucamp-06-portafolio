import React from "react";

import topProjects from "../../data/topProjects";
import techSkills from "../../data/techSkills";
import { TechSkills } from "../../components/TechSkills";
import { TopProjects } from "../../components/TopProjects";

export const HomePage = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://asset-apac.unileversolutions.com/content/dam/unilever/ponds/global/general_image/skin_care/face/cleansing_solution_6_ways_to_combat_oily_skin_hero-cover-787363.jpg.ulenscale.1200x400.jpg"
                  className="d-block w-100"
                  alt="1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0lQegW0RHe7A3p6X1JroyKUOHZYXOaWKqn79qKEdDFsoxPyxH_5gifRH5O3_A2rKqjI&usqp=CAU"
                  className="d-block w-100"
                  alt="2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.seemaxscreen.com/wp-content/uploads/2018/01/1200x400.png"
                  className="d-block w-100"
                  alt="3"
                />
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
        </div>
      </div>
      <section className="row pt-4">
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
      <section className="row pt-4">
        <article className="col">
          <header>
            <h2>Habilidades tecnicas</h2>
          </header>
        </article>
      </section>
      <section className="row pb-5">
        <article className="col">
          <div>
            {techSkills.map((techSkill) => (
              <TechSkills key={techSkill.id} {...techSkill} />
            ))}
          </div>
        </article>
      </section>
      <section className="row">
        <article className="col"></article>
      </section>
    </>
  );
};
