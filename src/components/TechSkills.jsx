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
      <div key={id}>
        <span>{name}</span>
        <div className="progress">
          <div
            className={`progress-bar bg-primary ${color}`}
            role="progressbar"
            style={{ width: percentage }}
            aria-valuenow={percentage_number}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            {percentage}
          </div>
        </div>
      </div>
    </>
  );
};
