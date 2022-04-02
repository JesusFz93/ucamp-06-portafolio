import React from "react";

export const TechSkills = ({
  id,
  name,
  color,
  percentage,
  percentage_number,
}) => {
  return (
    <>
      <div key={id} className="pb-2">
        <span>{name}</span>
        <div className="progress">
          <div
            className={`progress-bar bg-primary ${color}`}
            role="progressbar"
            style={{ width: "100%" }}
            aria-valuenow={100}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
      </div>
    </>
  );
};
