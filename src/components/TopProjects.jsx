import React from "react";
import { projectImages } from "../helpers/dynamicImages";

export const TopProjects = ({ id, image, title, description, link }) => {
  return (
    <article className="col" key={id}>
      <div className="card h-100">
        <img
          src={projectImages(`./${image}`)}
          className="card-img-top"
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer d-grid">
          <a
            href={link}
            className="btn btn-dark"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <span>Ver en GitHub </span>
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </article>
  );
};
