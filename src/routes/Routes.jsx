import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import HomePage from "../views/HomePage";
import SignUp from "../components/pages/signup/SignUp";
import SignIn from "../components/pages/signin/SignIn";
import Blogs from "../components/pages/blogs/Blogs";
import ErrorPage from "../components/pages/error/ErrorPage";
import AppliedJob from "../components/pages/applied-job/AppliedJob";
import PrivateRoutes from "./PrivateRoutes";
import MyJobs from "../components/pages/my-jobs/MyJobs";
import UpdateProfile from "../components/pages/user/UpdateProfile";
import ApplyJobDetails from "../components/pages/applied-job/ApplyJobDetails";
import About from "../components/pages/about/About";
import Terms from "../components/pages/terms/Terms";
import Privacy from "../components/pages/privacy/Privacy";
import JobDetails from "../components/job/JobDetails";
import DashLayout from "../layout/DashLayout";
import Profile from "../pages/dashboard/profile/Profile";
import Dashboard from "../pages/dashboard/mainDashboard/Dashboard";
import AddJobs from "../pages/dashboard/jobs/AddJobs";
import ViewJobs from "../pages/dashboard/jobs/ViewJobs";
import BookMarkJobs from "../pages/dashboard/jobs/BookMarkJobs";
import Job from "../pages/main/jobs/Job";
import Company from "../pages/main/company/Company";
import CompanyDetails from "../pages/main/company/CompanyDetails";
import AddCompany from "../pages/dashboard/company/AddCompany";

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
        path: "job",
        element: <Job />,
      },
      {
        path: "job/:id",
        element: (
          // <PrivateRoutes>
          <JobDetails />
          // </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.BACKEND_URL}/jobs/${params.id}`),
      },
      {
        path: "company",
        element: <Company />,
      },
      {
        path: "company/:id",
        element: <CompanyDetails />,
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
        path: "home",
        element: <Dashboard />,
      },
      {
        path: "jobs/add",
        element: <AddJobs />,
      },
      {
        path: "jobs/view",
        element: <ViewJobs />,
      },
      {
        path: "company/add",
        element: <AddCompany />,
      },
      {
        path: "company/view",
        element: <ViewJobs />,
      },
      // {
      //   path: "jobs/update/:id",
      //   element: (
      //     <PrivateRoutes>
      //       <UpdateJob />
      //     </PrivateRoutes>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(`${import.meta.env.BACKEND_URL}/jobs/${params.id}`),
      // },
      {
        path: "applied-jobs",
        element: (
          <PrivateRoutes>
            <AppliedJob />
          </PrivateRoutes>
        ),
        loader: () => fetch(`${import.meta.env.BACKEND_URL}/applied`),
      },
      {
        path: "applied-jobs/:id",
        element: (
          <PrivateRoutes>
            <ApplyJobDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.BACKEND_URL}/applied/${params.id}`),
      },
      {
        path: "my-jobs",
        element: (
          <PrivateRoutes>
            <MyJobs />
          </PrivateRoutes>
        ),
      },
      {
        path: "bookmarks",
        element: <BookMarkJobs />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <UpdateProfile />,
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
