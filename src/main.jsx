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
import Firme from "./routes/firme.jsx";
import Firma from "./routes/firma.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/mentor",
        element: <Mentor />,
        children: [
            {
                element: <Firme />,
                index: true,
            },
            {
                path: 'firma/:companyId',
                element: <Firma />,
            }
        ]
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
