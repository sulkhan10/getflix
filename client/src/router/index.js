import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.js";
import Main from "../pages/Main";
import DetailMovie from "../pages/DetailMovie";
import NowPlaying from "../pages/NowPlaying";
import UpComing from "../pages/UpComing";
import TopRated from "../pages/TopRated";
import Popular from "../pages/Popular";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute"; // Import the PrivateRoute component

const router = createBrowserRouter([
  {
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/detailmovie/:id",
        element: <DetailMovie />,
      },
      {
        path: "/nowplaying",
        element: <NowPlaying />,
      },
      {
        path: "/upcoming",
        element: <UpComing />,
      },
      {
        path: "/toprated",
        element: <TopRated />,
      },
      {
        path: "/popular",
        element: (
          <PrivateRoute>
            <Popular />
          </PrivateRoute>
        ),
        // element: <Popular />,
      },
      // Use PrivateRoute to protect routes
      // {
      //   path: "/protected-route",
      //   element: (
      //     <PrivateRoute>
      //       <ProtectedComponent />
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
]);

export default router;
