import { lazy } from "solid-js"
import { Navigate } from "@solidjs/router"

import type { RouteDefinition } from "@solidjs/router"

const routes: RouteDefinition[] = [
  {
    path: "/home",
    component: lazy(() => import("../pages/Home")), // Home,
  },
  {
    path: "/about",
    component: lazy(() => import("../pages/About")), // About,
  },

  {
    path: "/",
    element: () => <Navigate href="/home" />,
  },
]

export default routes
