import { lazy } from "solid-js"
import { Navigate } from "@solidjs/router"

import type { RouteDefinition } from "@solidjs/router"

const routes: RouteDefinition[] = [
  {
    path: "/",
    component: lazy(() => import("../layout/Blank")),
    children: [
      {
        path: "/",
        component: lazy(() => import("../layout/pc/sider/index")),
        children: [
          {
            path: "/",
            component: lazy(() => import("../layout/pc/header/index")),
            children: [
              {
                path: "home",
                component: lazy(() => import("../pages/Home")),
              },
              {
                path: "about",
                component: lazy(() => import("../pages/About")),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: () => <Navigate href="/home" />,
  },
]

export default routes
