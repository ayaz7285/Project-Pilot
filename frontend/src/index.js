import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import NotFound from "./Components/NotFound";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import Teams from "./Components/Teams";
import Tasks from "./Components/Tasks";
import Login from "./Components/Login";
import DashBoard from "./Components/DashBoard";
import Projects from "./Components/Projects";
import EditProfile from "./Components/EditProfile";
import CreateTask from "./Components/CreateTask";
import CreateProject from "./Components/CreateProject";
import CreateTeam from "./Components/CreateTeam";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: "home",
        element: <DashBoard />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "teams",
        element: <Teams />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "editprofile",
        element: <EditProfile />,
      },
      {
        path: "createTask",
        element: <CreateTask />,
      },
      {
        path: "createProject",
        element: <CreateProject />,
      },
      {
        path: "createTeam",
        element: <CreateTeam />,
      },
    ],
  },
  {
    path:"/login",
    element:<Login/>,
  },
  {
    path:"/register",
    element:<Register/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

