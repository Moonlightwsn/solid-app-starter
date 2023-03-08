import { lazy } from "solid-js"
import { Navigate } from "@solidjs/router"

import type { RouteDefinition } from "@solidjs/router"

const routes: RouteDefinition[] = [
  {
    path: "/pc",
    children: [
      {
        path: "sider",
        component: lazy(() => import("@/App/layout/pc/SiderLayout")),
        children: [
          {
            path: "home",
            component: lazy(() => import("@/App/pages/Home")),
          },
          {
            path: "about",
            component: lazy(() => import("@/App/pages/About")),
          },
        ],
      },
      {
        path: "header",
        component: lazy(() => import("@/App/layout/pc/HeaderLayout")),
        children: [
          {
            path: "home",
            component: lazy(() => import("@/App/pages/Home")),
          },
          {
            path: "about",
            component: lazy(() => import("@/App/pages/About")),
          },
        ],
      },
    ],
  },
  {
    path: "/mobile",
    children: [
      {
        path: "bg",
        component: lazy(() => import("@/App/layout/mobile/BgImageLayout")),
        children: [
          {
            path: "home",
            component: lazy(() => import("@/App/pages/Home")),
          },
          {
            path: "about",
            component: lazy(() => import("@/App/pages/About")),
          },
        ],
      },
    ],
  },
  {
    path: "/pc/sider",
    element: () => <Navigate href="/pc/sider/home" />,
  },
  {
    path: "/pc",
    element: () => <Navigate href="/pc/sider" />,
  },
  {
    path: "/mobile/bg",
    element: () => <Navigate href="/mobile/bg/home" />,
  },
  {
    path: "/mobile",
    element: () => <Navigate href="/mobile/bg" />,
  },
  {
    path: "/",
    element: () => <Navigate href="/pc" />,
  },
]

export default routes
