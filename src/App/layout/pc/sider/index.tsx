import { Outlet } from "@solidjs/router"
import { styled } from "solid-styled-components"
import SideBar from "./SideBar"

const Sider = () => {
  return (
    <SiderTag>
      <SideBar />
      <ContentTag>
        <Outlet />
      </ContentTag>
    </SiderTag>
  )
}

const SiderTag = styled("div")`
  display: flex;
  height: 100%;
`
const ContentTag = styled("div")`
  flex-grow: 1;
  background: #f5f5f5;
`

export default Sider
