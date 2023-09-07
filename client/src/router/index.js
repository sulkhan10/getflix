import Main from "../pages/Main";
import DetailMovie from "../pages/DetailMovie";
import NowPlaying from "../pages/NowPlaying";
import UpComing from "../pages/UpComing";
import TopRated from "../pages/TopRated";
import Popular from "../pages/Popular";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../pages/Home.js";

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
        element: <Popular />,
      },
    ],
  },
]);

export default router;
