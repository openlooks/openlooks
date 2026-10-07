import { initApp } from "@openlooks/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { getPrism } from "./utils/prism";

import "@openlooks/styles";

import "./index.css";

getPrism().manual = true;
initApp();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
