import { mergeProps, children, JSX } from "solid-js"
import { styled } from "solid-styled-components"

type HeaderProps = {
  height?: number
  class?: string
  children?: JSX.Element
}

const Header = (props: HeaderProps) => {
  const merged = mergeProps({ fixed: true, height: 64 }, props)
  const c = children(() => merged.children)
  return (
    <HeaderTag class={merged.class} height={merged.height}>
      {c()}
    </HeaderTag>
  )
}

const HeaderTag = styled("header")<{ height: number }>(
  (props) => `
    flex-shrink: 0;
    width: 100%;
    height: ${props.height}px;
  `
)

export default Header
