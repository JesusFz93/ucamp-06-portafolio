import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { PublicRoutes } from "../routes/public.routes";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={<PublicRoute>{<PublicRoutes />}</PublicRoute>}
        />
      </Routes>
    </Router>
  );
};
