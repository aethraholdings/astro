import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { BookingProvider } from "./context/BookingContext";

import App from "./App";
import "./index.css";

import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
      <BrowserRouter>
      <BookingProvider>
        <App />
        </BookingProvider>
      </BrowserRouter>
    </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);