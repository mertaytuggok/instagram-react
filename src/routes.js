import { PrivateRoute } from "Components/PrivateRoute";
import AuthLayout from "Pages/Auth";
import Home from "Pages/Home";
import MainLayout from "Pages/Layout";
import { Login } from "Pages/Auth/Login";
import { Register } from "Pages/Auth/Register";
import { ProfileLayout } from "Pages/Profile";
import ProfilePost from "Pages/Profile/Components/Post";
import ProfileTagged from "Pages/Profile/Components/tagged";
import Logout from "Pages/Logout";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    auth: true,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: ":username",
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <ProfilePost />,
          },
          {
            path: "tagged",
            element: <ProfileTagged />,
          },
        ],
      },
    ],
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
