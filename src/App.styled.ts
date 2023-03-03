import { styled } from "solid-styled-components"

export const AppWrap = styled("div")`
  text-align: center;
`

export const Header = styled("header")`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export const Logo = styled("img")`
  animation: logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`

export const Link = styled("a")`
  color: #b318f0;
`
