import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import HomePage from "../components/home/HomePage";
import SignUp from "../components/pages/signup/SignUp";
import SignIn from "../components/pages/signin/SignIn";
import Jobs from "../components/pages/job/Jobs";
import JobDetails from "../components/pages/job/JobDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/all-jobs",
        element: <Jobs />,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
