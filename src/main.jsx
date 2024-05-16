import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from "./error-page.jsx";
import Root from "./routes/root.jsx";
import Mentor from "./routes/mentor.jsx";
import Firme from "./routes/firme/firme.jsx";
import Firma from "./routes/firma/firma.jsx";
import {fetchCompanies} from "./routes/firme/firme.js";
import {fetchCompany} from "./routes/firma/firma.js";
import {fetchLogin} from "./routes/login/login.js";
import Login from "./routes/login/login.jsx"

import {fetchRegister} from "./routes/register/register.js";
import Register from "./routes/register/register.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: fetchCompanies,
    },
    {
        path: "/mentor",
        element: <Mentor />,
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
        path: "/prijava",
        element: <Login />,
        loader: fetchLogin,
        
    },

    {
        path: "/registracija",
        element: <Register />,
        loader: fetchLogin,
        
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
