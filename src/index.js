import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";   // 👈 Try without `.jsx` (Vite resolves .jsx automatically)
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
