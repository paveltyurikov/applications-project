import React from "react";
import ReactDOM from "react-dom/client";
import initApp from "~/lib/initApp.js";
import App from "./App";
import "./index.css";


initApp();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
