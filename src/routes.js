import { lazy } from "solid-js";

import Home from "./pages/home";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/works",
    component: lazy(() => import("./pages/works")),
  },
  {
    path: "**",
    component: lazy(() => import("./errors/404")),
  },
];
