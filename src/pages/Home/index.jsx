import React from "react";

import thumbNails from "../../data/thumbNails";

export const HomePage = () => {
  return (
    <>
      <div className="row pb-3">
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
      <div className="row">
        <div className="col">
          <h2>Mejores proyectos</h2>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {thumbNails.map((thumbNail) => (
          <div className="col" key={thumbNail.id}>
            <div className="card h-100">
              <img
                src={thumbNail.image}
                className="card-img-top"
                alt={thumbNail.title}
              />
              <div className="card-body">
                <h5 className="card-title">{thumbNail.title}</h5>
                <p className="card-text">{thumbNail.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
