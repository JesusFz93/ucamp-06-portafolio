import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import "./styles/style.css";
import { AppRouter } from "./routers/config/AppRouter";

const App = () => {
  //   console.log = console.warn = console.error = () => {};
  return <AppRouter />;
};

export default App;
