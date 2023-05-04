import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/publicRoutes.jsx";
import AuthProvider from "./providers/AuthProvider";
import { ToastContainer } from 'react-toast'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer delay={3000}/>
    </AuthProvider>
  </React.StrictMode>
);
