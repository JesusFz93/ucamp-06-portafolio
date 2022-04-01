import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = ({ routes }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          JF Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {routes
              .filter((x) => x.hide !== true)
              .filter((x) => x.inddl !== true)
              .map(({ to, name, ddl, id, Component }) => {
                if (!ddl) {
                  return (
                    <li key={to}>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "nav-link active bg-secondary text-white"
                            : "nav-link"
                        }
                        to={to}
                      >
                        <span>{name}</span>
                      </NavLink>
                    </li>
                  );
                } else {
                  return <Component key={id} />;
                }
              })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
