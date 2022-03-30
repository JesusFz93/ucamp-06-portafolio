import React from "react";

export const Title = ({ name, clases }) => {
  return (
    <header className={`row ${clases}`}>
      <article className={`col-12 ${clases}`}>
        <h1 className="mb-0">{name}</h1>
        <hr />
      </article>
    </header>
  );
};
