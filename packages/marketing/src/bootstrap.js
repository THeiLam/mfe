import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

//Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

//If in dev and in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_marketing-dev-root");

  if (devRoot) mount(devRoot);
}

//If through container, export mount function
export default mount;
