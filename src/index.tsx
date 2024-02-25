import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import "fonts/fonts.css";
import "./reset.css";
import reportWebVitals from "./reportWebVitals";
import { Home } from "./layout/pages/Home/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

reportWebVitals();
