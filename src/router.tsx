import { Routes, Route } from "react-router-dom";

import NotFound from "./pages/404";
import Login from "./pages/login";
import Register from "./pages/register";
import Index from "./pages/index";
import BaseLayout from "./layout/BaseLayout";

import User from "./pages/user";
import Wallet from "./pages/wallet";
import Shop from "./pages/shop";
import Node from "./pages/node";
import Subscription from "./pages/subscription";
import Invite from "./pages/invite";
import Ticket from "./pages/ticket";

const routerConfig = [
  {
    path: "*",
    element: <NotFound />,
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
    path: "/",
    element: <Index />,
  },
  {
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
];

const Router = () => {
  return (
    <Routes>
      {routerConfig.map((value) => {
        return value.path ? (
          <Route path={value.path} element={value.element} />
        ) : (
          <Route path={value.path} element={value.element}>
            {value.children?.map((child) => {
              return <Route path="/" element={child.element} />;
            })}
          </Route>
        );
      })}
    </Routes>
  );
};

export default Router;
