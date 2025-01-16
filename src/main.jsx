import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App.jsx";  // Your main app component
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter> {/* Wrap your App component inside BrowserRouter */}
    <App />
  </BrowserRouter>
);
