import type { Component } from "solid-js"
import { Router, Routes, Route, A, Navigate } from "@solidjs/router"

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
        <nav>
          <A href="/tab1">TAB 1</A>
          <A href="/tab2">TAB 2</A>
          <A href="/tab3">TAB 3</A>
        </nav>
        <Routes>
          <Route path="/tab1" component={() => <p>TAB 1</p>} />
          <Route path="/tab2" component={() => <p>TAB 2</p>} />
          <Route path="/tab3" component={() => <p>TAB 3</p>} />
          <Route path="/" element={<Navigate href="/tab1" />} />
        </Routes>
      </Header>
    </AppWrap>
  )
}

export default () => (
  <Router>
    <App />
  </Router>
)
