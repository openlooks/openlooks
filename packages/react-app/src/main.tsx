import { initApp } from "@openlooks/core/utils/init";
import "@openlooks/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

initApp();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
