import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import HomePage from "../views/HomePage";
import SignUp from "../components/pages/signup/SignUp";
import SignIn from "../components/pages/signin/SignIn";
import Blogs from "../components/pages/blogs/Blogs";
import ErrorPage from "../components/pages/error/ErrorPage";
import AddJob from "../components/pages/jobs/AddJob";
import Job from "../components/pages/jobs/Job";
import AppliedJob from "../components/pages/applied-job/AppliedJob";
import PrivateRoutes from "./PrivateRoutes";
import MyJobs from "../components/pages/my-jobs/MyJobs";
import UpdateJob from "../components/pages/jobs/UpdateJob";
import UpdateProfile from "../components/pages/user/UpdateProfile";
import ApplyJobDetails from "../components/pages/applied-job/ApplyJobDetails";
import About from "../components/pages/about/About";
import Terms from "../components/pages/terms/Terms";
import Privacy from "../components/pages/privacy/Privacy";
import JobDetails from "../components/job/JobDetails";
import DashLayout from "../layout/DashLayout";
import Profile from "../pages/dashboard/profile/Profile";

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
          fetch(`${import.meta.env.BACKEND_URL}/jobs/${params.id}`),
      },
      {
        path: "/update-job/:id",
        element: (
          <PrivateRoutes>
            <UpdateJob />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.BACKEND_URL}/jobs/${params.id}`),
      },
      {
        path: "/applied-jobs",
        element: (
          <PrivateRoutes>
            <AppliedJob />
          </PrivateRoutes>
        ),
        // loader: () => fetch(`${import.meta.env.BACKEND_URL}/applied`),
      },
      {
        path: "/applied-jobs/:id",
        element: (
          <PrivateRoutes>
            <ApplyJobDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.BACKEND_URL}/applied/${params.id}`),
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
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "profile",
        element: <Profile />,
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
