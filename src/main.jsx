import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import Error from "./routes/error.jsx";
import Root from "./routes/root.jsx";
import Mentor from "./routes/mentor.jsx";
import Firme from "./routes/firme/firme.jsx";
import Firma from "./routes/firma/firma.jsx";
import {fetchCompanies} from "./routes/firme/firme.js";
import {fetchCompany} from "./routes/firma/firma.js";
import {fetchLogin} from "./routes/login/login.js";
import Login from "./routes/login/login.jsx"

import Register from "./routes/register/register.jsx"
import {GoogleOAuthProvider} from "@react-oauth/google";

import { Provider } from "react-redux";
import store from "./core/store/index.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
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
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </GoogleOAuthProvider>
    </React.StrictMode>
)
