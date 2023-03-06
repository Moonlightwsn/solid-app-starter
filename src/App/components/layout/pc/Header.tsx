import { mergeProps, children, JSX } from "solid-js"
import { styled } from "solid-styled-components"

type HeaderProps = {
  height?: number
  fixed?: boolean | number
  class?: string
  children?: JSX.Element
}

const Header = (props: HeaderProps) => {
  const merged = mergeProps({ fixed: false, height: 64 }, props)
  const c = children(() => merged.children)
  return (
    <HeaderTag class={merged.class} fixed={merged.fixed} height={merged.height}>
      {c()}
    </HeaderTag>
  )
}

const HeaderTag = styled("header")<{ height: number; fixed: boolean | number }>(
  (props) => {
    let fixedStyle = ""
    if (props.fixed) {
      const top = typeof props.fixed === "number" ? props.fixed : 0
      fixedStyle = `
        position: fixed;
        top: ${top}px;
      `
    }
    return `
      ${fixedStyle}
      flex-shrink: 0;
      z-index: 1000;
      width: 100%;
      height: ${props.height}px;
    `
  }
)

export default Header
