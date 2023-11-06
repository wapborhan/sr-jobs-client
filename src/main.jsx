import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import JobContext from "./context/JobContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <JobContext>
        <RouterProvider router={router}></RouterProvider>
      </JobContext>
    </AuthProvider>
  </React.StrictMode>
);
