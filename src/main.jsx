import React from "react";
import ReactDOM from "react-dom/client";
import "react-datepicker/dist/react-datepicker.css";
import "./assets/css/bootstrap-grid.css";
import "./assets/css/icons.css";
import "./assets/css/style.css";
import "react-quill/dist/quill.snow.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
