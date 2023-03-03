import type { Component } from "solid-js"

import { AppWrap, Header, Logo, Link } from "./App.styled"

import logo from "./logo.svg"

const App: Component = () => {
  return (
    <AppWrap>
      <Header>
        <Logo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </Link>
      </Header>
    </AppWrap>
  )
}

export default App
