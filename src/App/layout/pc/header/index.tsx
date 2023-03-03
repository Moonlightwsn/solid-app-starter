import { mergeProps, children, JSX } from "solid-js"
import { Outlet } from "@solidjs/router"
import { styled } from "solid-styled-components"

type HeaderProps = {
  height?: number
  children?: JSX.Element
}

const Header = (props: HeaderProps) => {
  const merged = mergeProps({ height: 64 }, props)
  const c = children(() => merged.children)
  return (
    <HeaderWrap>
      <HeaderTag height={merged.height}>{c()}</HeaderTag>
      <ContentTag>
        <Outlet />
      </ContentTag>
    </HeaderWrap>
  )
}

const HeaderWrap = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const HeaderTag = styled("div")<{ height: number }>`
  flex-shrink: 0;
  width: 100%;
  height: ${(props) => props.height}px;
  background: #ffffff;
`

const ContentTag = styled("div")`
  flex-grow: 1;
  overflow: auto;
`

export default Header
