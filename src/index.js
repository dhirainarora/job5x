import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";   // 👈 must match your file name exactly
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
