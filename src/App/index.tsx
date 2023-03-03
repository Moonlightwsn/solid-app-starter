import { styled } from "solid-styled-components"
import { useRoutes } from "@solidjs/router"

import routes from "./router/routes"
import logo from "../assets/logo.svg"

import type { Component } from "solid-js"

const App: Component = () => {
  const Route = useRoutes(routes)

  return (
    <AppTag>
      <LogoTag src={logo} alt="logo" />
      <Route />
    </AppTag>
  )
}

const AppTag = styled("div")`
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LogoTag = styled("img")`
  animation: logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export default App
