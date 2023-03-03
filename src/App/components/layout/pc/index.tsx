import { JSX, children, mergeProps } from "solid-js"
import { styled } from "solid-styled-components"

import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import Sider from "./Sider"

type LayoutDirection = "row" | "column"

type LayoutProps = {
  children?: JSX.Element
  direction?: LayoutDirection
}

const Layout = (props: LayoutProps) => {
  const merged = mergeProps({ direction: "column" }, props)
  const c = children(() => merged.children)
  return (
    <LayoutTag direction={merged.direction as LayoutDirection}>{c()}</LayoutTag>
  )
}

const LayoutTag = styled("section")<{ direction: LayoutDirection }>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  height: 100%;
  width: 100%;
`

Layout.Header = Header
Layout.Content = Content
Layout.Footer = Footer
Layout.Sider = Sider

export default Layout
