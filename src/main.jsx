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
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
