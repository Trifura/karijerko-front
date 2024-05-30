import {createBrowserRouter, RouterProvider} from "react-router-dom";

// Pages
import AboutUs from "./root/about-us.jsx";
import ConfirmEmail from "./auth/confirm-email.jsx";
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
import Portfolio from "./user/portfolio.jsx";
import Project from "./user/project.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Dashboard from "./company/dashboard.jsx";

// Loaders
import {fetchCompanies} from "./legacy/firme/firme.js";


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
        path: "/companies",
        element: <Companies />,
    },
    // CompanyView changes depending on if the user is logged in or not
    {
        path: "/company/:companySlug",
        element: <CompanyView />,
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
        path: "/register-firma",
        element: <RegisterFirma />,
    },
    {
        path: "/confirm-email",
        element: <ConfirmEmail />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "/reset-password",
        element: <ResetPassword />,
    },

    // ACCOUNT
    {
        path: "/account",
        element: <ProtectedRoute> <Account /> </ProtectedRoute>,
    },
    {
        path: "/profile",
        element: <ProtectedRoute> <Profile /> </ProtectedRoute>,
    },

    // USER
    {
        path: "/feed",
        element: <ProtectedRoute> <Feed /> </ProtectedRoute>,
    },
    {
        path: "/portfolio",
        element: <ProtectedRoute> <Portfolio /> </ProtectedRoute>,
        children: [
            {
                path: "project/:projectId",
                element: <ProtectedRoute> <Project /> </ProtectedRoute>,
            }
        ]
    },
    {
        path: "/dashboard",
        element: <ProtectedRoute> <Dashboard /> </ProtectedRoute>,
    }
]);
export default function Routes() {
    return (
        <RouterProvider router={router} />
    )
}
