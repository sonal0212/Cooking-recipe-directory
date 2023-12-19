import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
// creating custom context hook to create custom log for flexibility

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App /> //the app component act as the children prop
    </ThemeProvider>
  </React.StrictMode>
);
