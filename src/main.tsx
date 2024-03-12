import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';

import { LandingPage } from './app/landingPage';
import { mapLoader, MapViewer } from './app/mapViewer';
import ErrorPage from "./error-page";
import "./index.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "mapViewer/:filter",
    element: <MapViewer />,
    errorElement: <ErrorPage />,
    loader: mapLoader,
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
