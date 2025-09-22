import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// If you later add firebase client init, import it here: import "./firebase";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
