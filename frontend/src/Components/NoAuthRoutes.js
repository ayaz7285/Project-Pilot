import React,{useContext} from "react";
import Login from "./Login";
import NotFound from "./NotFound";
import AuthContext from "./AuthContext";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Route, Outlet, Link, Navigate } from "react-router-dom";

export default function NoAuthRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);


  return (<RouterProvider router={router}>
          </RouterProvider>);
}
