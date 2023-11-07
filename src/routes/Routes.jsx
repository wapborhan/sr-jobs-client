import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import HomePage from "../components/home/HomePage";
import SignUp from "../components/pages/signup/SignUp";
import SignIn from "../components/pages/signin/SignIn";
import JobDetails from "../components/home/job/JobDetails";
import Blogs from "../components/pages/blogs/Blogs";
import ErrorPage from "../components/pages/error/ErrorPage";
import AddJob from "../components/pages/add-job/AddJob";
import Job from "../components/pages/jobs/Job";
import AppliedJob from "../components/pages/applied-job/AppliedJob";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/add-jobs",
        element: <AddJob />,
      },
      {
        path: "/all-jobs",
        element: <Job />,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3300/jobs/${params.id}`),
      },
      {
        path: "/applied-jobs",
        element: <AppliedJob />,
        loader: () => fetch(`http://localhost:3300/applied/`),
      },
      {
        path: "/blogs",
        element: <Blogs />,
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
