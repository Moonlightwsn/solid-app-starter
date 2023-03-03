import { useRoutes } from "@solidjs/router"

import routes from "./router/routes"

const App = () => {
  const Route = useRoutes(routes)
  return <Route />
}

export default App
