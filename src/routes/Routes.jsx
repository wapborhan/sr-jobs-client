import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import HomePage from "../views/HomePage";
import SignUp from "../components/pages/signup/SignUp";
import SignIn from "../components/pages/signin/SignIn";
import Blogs from "../components/pages/blogs/Blogs";
import ErrorPage from "../components/pages/error/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import MyJobs from "../components/pages/my-jobs/MyJobs";
import UpdateProfile from "../components/pages/user/UpdateProfile";
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
import ViewCompany from "../pages/dashboard/company/ViewCompany";
import UpdateJob from "../pages/dashboard/jobs/UpdateJob";
import Users from "../pages/dashboard/users/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "job", element: <Job /> },
      {
        path: "job/:id",
        element: (
          // <PrivateRoutes>
          <JobDetails />
          // </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_BACKEND_URL}/job/${params.id}`),
      },
      { path: "company", element: <Company /> },
      {
        path: "company/:id",
        element: <CompanyDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_BACKEND_URL}/company/${params.id}`),
      },

      { path: "/blogs", element: <Blogs /> },
      { path: "/about", element: <About /> },
      { path: "/terms", element: <Terms /> },
      { path: "/privacy", element: <Privacy /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "home", element: <Dashboard /> },
      { path: "jobs/add", element: <AddJobs /> },
      {
        path: "jobs/view",
        element: <ViewJobs />,
        loader: () => fetch(`${import.meta.env.VITE_BACKEND_URL}/jobs`),
      },
      {
        path: "jobs/edit/:id",
        element: <UpdateJob />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_BACKEND_URL}/job/${params.id}`),
      },
      { path: "company/add", element: <AddCompany /> },
      { path: "company/view", element: <ViewCompany /> },
      {
        path: "my-jobs",
        element: (
          <PrivateRoutes>
            <MyJobs />
          </PrivateRoutes>
        ),
      },
      { path: "bookmarks", element: <BookMarkJobs /> },
      {
        path: "profile/",
        element: <Profile />,
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_BACKEND_URL}/user?email=${params.email}`
          ),
      },
      {
        path: "users",
        element: <Users />,
        loader: () => fetch(`${import.meta.env.VITE_BACKEND_URL}/users`),
      },
      { path: "settings", element: <UpdateProfile /> },
    ],
  },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
]);
