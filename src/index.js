import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Form23Page from "./Pages/Form23Page";
import TeamPage from "./Pages/TeamPage";
import AboutUs from "./Pages/AboutUs";
import Qube2Space from "./Pages/Qube2Space";
import Navbar from "./Components/Nav";
import Footer from "./Components/Footer";
import { Route } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([

  {
    path: "form230",
    element: <Form23Page />,
  },
  {
    path: "team",
    element: <TeamPage />,
  },
  {
    path: "AboutUs",
    element: <AboutUs />
  },
  {
    path: "qube2space",
    element: <Qube2Space />
  },
  {
    path: "/",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
