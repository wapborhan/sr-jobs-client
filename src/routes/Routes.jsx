import { createBrowserRouter } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";
// Layout
import Root from "../layout/Root";
import DashLayout from "../layout/DashLayout";
// Pages
import ErrorPage from "../components/pages/error/ErrorPage";
import * as page from "./";
import * as loadFunc from "./loadFunct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <page.HomePage /> },
      { path: "job", element: <page.Job /> },
      { path: "jobs-categorie", element: <page.Categories /> },
      {
        path: "job/:id",
        element: (
          // <PrivateRoutes>
          <page.JobDetails />
          // </PrivateRoutes>
        ),
        loader: loadFunc.jobDetailsLoader,
      },
      { path: "company", element: <page.Company /> },
      {
        path: "company/:id",
        element: <page.CompanyDetails />,
        loader: loadFunc.companyDetailsLoader,
      },

      { path: "/blogs", element: <page.Blogs /> },
      { path: "/about", element: <page.About /> },
      { path: "/terms", element: <page.Terms /> },
      { path: "/privacy", element: <page.Privacy /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "home", element: <page.Dashboard /> },
      { path: "company/add", element: <page.AddCompany /> },
      { path: "company/view", element: <page.ViewCompany /> },
      {
        path: "company/edit/:id",
        element: <page.UpdateCompany />,
        loader: loadFunc.companyDetailsLoader,
      },
      { path: "jobs/add", element: <page.AddJobs /> },
      {
        path: "jobs/view",
        element: <page.ViewJobs />,
        loader: loadFunc.allJobsFetch,
      },
      {
        path: "jobs/edit/:id",
        element: <page.UpdateJob />,
        loader: loadFunc.jobDetailsLoader,
      },
      { path: "bookmarks", element: <page.BookMarkJobs /> },
      {
        path: "users",
        element: <page.Users />,
        loader: loadFunc.allusersFetch,
      },
      {
        path: "my-jobs",
        element: (
          <PrivateRoutes>
            <page.MyJobs />
          </PrivateRoutes>
        ),
      },

      {
        path: "profile/",
        element: <page.Profile />,
        loader: loadFunc.profileLoader,
      },
      {
        path: "profile/update",
        element: <page.UpdateProfile />,
        loader: loadFunc.profileLoader,
      },
    ],
  },
  { path: "/signin", element: <page.SignIn /> },
  { path: "/signup", element: <page.SignUp /> },
]);
