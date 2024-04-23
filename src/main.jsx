import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from "./error-page.jsx";
import Root, { loader as rootLoader } from "./routes/root.jsx";
import JobAdView, {loader as jobAdLoader} from "./Components/job-ad/JobAdView.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        children: [
            {
                path: "oglas/:jobAdId",
                element: <JobAdView />,
                loader: jobAdLoader,
            },
        ],
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
