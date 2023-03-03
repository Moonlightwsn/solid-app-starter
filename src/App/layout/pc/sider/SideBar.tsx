import { mergeProps, children, JSX } from "solid-js"
import { styled } from "solid-styled-components"

type SideBarProps = {
  width?: number
  children?: JSX.Element
}

const SideBar = (props: SideBarProps) => {
  const merged = mergeProps({ width: 200 }, props)
  const c = children(() => merged.children)
  return <SideBarTag width={merged.width}>{c()}</SideBarTag>
}

const SideBarTag = styled("div")<{ width: number }>`
  width: ${(props) => props.width}px;
  height: 100%;
  background: #001529;
  overflow: auto;
`

export default SideBar
