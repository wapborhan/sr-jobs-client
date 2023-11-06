import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import HomePage from "../components/home/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
