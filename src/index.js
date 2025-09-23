import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";   // 👈 must exactly match file name (App.jsx)
import "./index.css";

// Mount the React app into #root (from index.html)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


