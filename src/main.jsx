import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/bootstrap-grid.css";
import "./assets/css/icons.css";
import "./assets/css/style.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
