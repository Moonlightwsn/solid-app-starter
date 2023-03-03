import { useRoutes } from "@solidjs/router"

import routes from "./router/routes"

import type { Component } from "solid-js"

const App: Component = () => {
  const Route = useRoutes(routes)
  return <Route />
}

export default App
