import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { publicRoutes } from "../../utils/routesOptions";

export const PublicRoutes = () => {
  const [routesOptions, setRoutesOptions] = useState([]);

  useEffect(() => {
    let routesMaster = [...publicRoutes];

    setRoutesOptions(routesMaster);
  }, []);

  return (
    <>
      <Navbar routes={routesOptions} />
      <div className="container pt-3">
        <Routes>
          {routesOptions
            .filter((x) => x.ddl !== true)
            .map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}

          <Route
            path="/*"
            element={<Navigate to={publicRoutes[0]?.to} replace />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
};
