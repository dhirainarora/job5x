import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";   // 👈 must match file name exactly

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
