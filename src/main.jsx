import React from "react";
import ReactDOM from "react-dom/client";
import initApp from "~/lib/initApp.js";
import App from "./App";
import "./index.css";
import AllProviders from "~/providers/AllProviders";


initApp();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AllProviders>
      <App />
    </AllProviders>
  </React.StrictMode>
);
