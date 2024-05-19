import {createBrowserRouter, RouterProvider} from "react-router-dom";

// Components
import Root from "./root.jsx";
import Error from "./error.jsx";
import Mentor from "./mentor.jsx";
import Firme from "./firme/firme.jsx";
import Firma from "./firma/firma.jsx";
import Login from "./login/login.jsx";
import Register from "./register/register.jsx";

// Loaders
import {fetchCompanies} from "./firme/firme.js";
import {fetchCompany} from "./firma/firma.js";
import ProtectedRoute from "./ProtectedRoute.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        loader: fetchCompanies,
    },
    {
        path: "/mentor",
        element: <ProtectedRoute> <Mentor /> </ProtectedRoute>,
        children: [
            {
                element: <Firme />,
                index: true,
                loader: fetchCompanies,
            },
            {
                path: 'firma/:companyId',
                element: <Firma />,
                loader: fetchCompany,
            }
        ]
    },



    {
        path: "/login",
        element: <Login />,
    },

    {
        path: "/register",
        element: <Register />,
    }
]);
export default function Routes() {
    return (
        <RouterProvider router={router} />
    )
}
