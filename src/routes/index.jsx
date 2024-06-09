import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import AboutUs from "./root/about-us.jsx";
import VerifyEmail from "./auth/verify-email.jsx";
import ForgotPassword from "./auth/forgot-password.jsx";
import ResetPassword from "./auth/reset-password.jsx";
import Companies from "./root/companies.jsx";
import Root from "./root/index.jsx";
import Error from "./error.jsx";
import Login from "./auth/login.jsx";
import Register from "./auth/register.jsx";
import RegisterFirma from "./auth/register-firma.jsx";
import CompanyView from "./user/company-view.jsx";
import Account from "./account/index.jsx";
import Profile from "./account/profile.jsx";
import Feed from "./user/feed.jsx";
import Search from "./user/search.jsx";
import Portfolio from "./user/portfolio.jsx";
import Project from "./user/project.jsx";
import Dashboard from "./company/dashboard.jsx";
import Contact from "./root/contact.jsx"
import Notification from "./root/Notification.jsx";

// Loaders
import { fetchCompanies } from "./user/feed.js";
import { fetchCompany } from "./user/company-view.js";

// Protected Routes
import ProtectedRoute from "./ProtectedRoute.jsx";
import ProtectedRouteCompany from "./ProtectedRouteCompany.jsx";
import ProtectedRouteUser from "./ProtectedRouteUser.jsx";

const router = createBrowserRouter([
  // ROOT
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    loader: fetchCompanies,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/companies",
    element: <Companies />,
  },
  // CompanyView changes depending on if the user is logged in or not
  {
    path: "/company/:companySlug",
    element: <CompanyView />,
    loader: fetchCompany,
  },



  // AUTH
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/register-company",
    element: <RegisterFirma />,
  },
  {
    path: "/verify-email",
    element: <VerifyEmail />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },

  //GLOBAL SEARCH
  {
    path: "/search",
    element: (
      <Search />
    ),
    loader: fetchCompanies,
  },

  // ACCOUNT
  {
    path: "/account",
    element: (
      <ProtectedRoute>
        <Account />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRouteUser>
        <Profile />
      </ProtectedRouteUser>
    ),
  },

  // USER
  {
    path: "/feed",
    element: (
      <ProtectedRouteUser>
        <Feed />
      </ProtectedRouteUser>
    ),
  },
  {
    path: "/portfolio",
    element: (
      <ProtectedRoute>
        <Portfolio />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "project/:projectId",
        element: (
          <ProtectedRoute>
            <Project />
          </ProtectedRoute>
        ),
      },
    ],
  },

  // COMPANY
  {
    path: "/dashboard",
    element: (

      <ProtectedRouteCompany>
        <Dashboard />
        </ProtectedRouteCompany>
    ),
  },
  {
    path: "/company-notification",
    element: (

      <ProtectedRouteCompany>
        <Notification />
        </ProtectedRouteCompany>
    ),
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
