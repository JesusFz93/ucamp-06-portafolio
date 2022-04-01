import React from "react";
import { AppRouter } from "./routers/config/AppRouter";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  //   console.log = console.warn = console.error = () => {};
  return <AppRouter />;
};

export default App;
