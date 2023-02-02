import React from "react";
import ReactDOM from "react-dom/client";
import AllProviders from "~/providers/AllProviders";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AllProviders>
      <App />
    </AllProviders>
  </React.StrictMode>
);
