import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import HomePage from "../components/home/HomePage";
import SignUp from "../components/pages/signup/SignUp";
import SignIn from "../components/pages/signin/SignIn";
import JobDetails from "../components/home/job/JobDetails";
import Blogs from "../components/pages/blogs/Blogs";
import ErrorPage from "../components/pages/error/ErrorPage";
import AddJob from "../components/pages/jobs/AddJob";
import Job from "../components/pages/jobs/Job";
import AppliedJob from "../components/pages/applied-job/AppliedJob";
import PrivateRoutes from "./PrivateRoutes";
import MyJobs from "../components/pages/my-jobs/MyJobs";
import UpdateJob from "../components/pages/jobs/UpdateJob";
import Profile from "../components/pages/user/Profile";
import UpdateProfile from "../components/pages/user/UpdateProfile";
import ApplyJobDetails from "../components/pages/applied-job/ApplyJobDetails";

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
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/settings",
        element: <UpdateProfile />,
      },
      {
        path: "/add-jobs",
        element: (
          <PrivateRoutes>
            <AddJob />
          </PrivateRoutes>
        ),
      },
      {
        path: "/job",
        element: <Job />,
      },
      {
        path: "/job/:id",
        element: (
          <PrivateRoutes>
            <JobDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3300/jobs/${params.id}`),
      },
      {
        path: "/update-job/:id",
        element: (
          <PrivateRoutes>
            <UpdateJob />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3300/jobs/${params.id}`),
      },
      {
        path: "/applied-jobs",
        element: (
          <PrivateRoutes>
            <AppliedJob />
          </PrivateRoutes>
        ),
        loader: () => fetch(`http://localhost:3300/applied`),
      },
      {
        path: "/applied-jobs/:id",
        element: (
          <PrivateRoutes>
            <ApplyJobDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3300/applied/${params.id}`),
      },
      {
        path: "/my-jobs",
        element: (
          <PrivateRoutes>
            <MyJobs />
          </PrivateRoutes>
        ),
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
