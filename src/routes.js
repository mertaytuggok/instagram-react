import { PrivateRoute } from "Components/PrivateRoute";
import AuthLayout from "Pages/Auth";
import { Login } from "Pages/Auth/Login";
import { Register } from "Pages/Auth/Register";

const { Home } = require("Pages/Home");

const routes = [
  {
    path: "/",
    element: <Home />,
    auth: true,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];
const authCheck = (routes) =>
  routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route?.children) {
      route.children = authCheck(route.children);
    }
    return route;
  });
export default authCheck(routes);
