import { Outlet } from "@solidjs/router"
import { styled } from "solid-styled-components"

const Blank = () => (
  <BlackTag>
    <Outlet />
  </BlackTag>
)

const BlackTag = styled("div")`
  height: 100vh;
  width: 100%;
`

export default Blank
