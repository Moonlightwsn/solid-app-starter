import { lazy } from "solid-js"
import { Navigate } from "@solidjs/router"

import type { RouteDefinition } from "@solidjs/router"

const routes: RouteDefinition[] = [
  {
    path: "/",
    component: lazy(() => import("../layout/pc/SiderLayout")),
    children: [
      {
        path: "/home",
        component: lazy(() => import("../pages/Home")),
      },
      {
        path: "/about",
        component: lazy(() => import("../pages/About")),
      },
    ],
  },
  {
    path: "/headerlayout",
    component: lazy(() => import("../layout/pc/HeaderLayout")),
    children: [
      {
        path: "/home",
        component: lazy(() => import("../pages/Home")),
      },
      {
        path: "/about",
        component: lazy(() => import("../pages/About")),
      },
    ],
  },
  {
    path: "/",
    element: () => <Navigate href="/home" />,
  },
]

export default routes
