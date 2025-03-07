import { RouteObject } from "react-router";
import Login from "../pages/Login";
import ProtectedRoute from "../auth/ProtectedRoute";
import Home from "../pages/Home";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
];
