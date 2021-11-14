import { Routes, Route } from "react-router-dom";

// 主路由
import NotFound from "./pages/404";
import Index from "./pages/index";

// AuthLayout
import AuthLayout from "./layout/AuthLayout";
// 子路由
import Login from "./pages/login";
import Register from "./pages/register";
import ResetPassword from "./pages/reset_password";
// BaseLayout
import BaseLayout from "./layout/BaseLayout";
// 子路由
import User from "./pages/user";
import Wallet from "./pages/wallet";
import Shop from "./pages/shop";
import Node from "./pages/node";
import Subscription from "./pages/subscription";
import Invite from "./pages/invite";
import Ticket from "./pages/ticket";

const routerConfig = [
  {
    path: "/",
    element: <Index />,
  },
  {
    key: "AuthLayout",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/reset_password",
        element: <ResetPassword />,
      },
    ],
  },
  {
    key: "BaseLayout",
    element: <BaseLayout />,
    children: [
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/node",
        element: <Node />,
      },
      {
        path: "/subscription",
        element: <Subscription />,
      },
      {
        path: "/invite",
        element: <Invite />,
      },
      {
        path: "/ticket",
        element: <Ticket />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const Router = () => {
  return (
    <Routes>
      {routerConfig.map((value) => {
        return value.path ? (
          <Route key={value.path} path={value.path} element={value.element} />
        ) : (
          <Route key={value.key} element={value.element}>
            {value.children?.map((value) => {
              console.log(value);
              return (
                <Route
                  key={value.path}
                  path={value.path}
                  element={value.element}
                />
              );
            })}
          </Route>
        );
      })}
    </Routes>
  );
};

export default Router;
