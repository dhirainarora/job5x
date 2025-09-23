import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";   // 👈 ensure App.jsx exists with this exact name
import "./index.css";

// Render React app into root div
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
