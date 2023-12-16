// import React
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App
import App from "./App";
import "./styles/index.scss";

// imports pages
import Connection from "./pages/Connection";
// import Home from "./pages/Home";
// import Rules from "./pages/Rules";
// import Profile from "./pages/Profile";
// import Idea from "./pages/Idea";

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Connection />,
      },
      // {
      //   path: "/home",
      //   element: <Home />,
      //   children: [
      //     {
      //       path: "/profile/:id",
      //       element: <Profile />,
      //     },
      //     {
      //       path: "/Idea",
      //       element: <Idea />,
      //     },
      //   ],
      // },
      // {
      //   path: "/rules",
      //   element: <Rules />,
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
