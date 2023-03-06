import { mergeProps, children, JSX } from "solid-js"
import { styled } from "solid-styled-components"

type SiderProps = {
  width?: number
  fixed?: boolean | number
  collapsed?: boolean
  collapsedWidth?: number
  class?: string
  children?: JSX.Element
}

const Sider = (props: SiderProps) => {
  const merged = mergeProps(
    { fixed: true, width: 200, collapsed: false, collapsedWidth: 80 },
    props
  )
  const c = children(() => merged.children)
  return (
    <SiderTag
      class={merged.class}
      fixed={merged.fixed}
      width={merged.collapsed ? merged.collapsedWidth : merged.width}
    >
      {c()}
    </SiderTag>
  )
}

const SiderTag = styled("aside")<{ width: number; fixed: boolean | number }>(
  (props) => {
    let fixedStyle = ""
    if (props.fixed) {
      const left = typeof props.fixed === "number" ? props.fixed : 0
      fixedStyle = `
        position: fixed;
        left: ${left}px;
      `
    }
    return `
      ${fixedStyle}
      flex-shrink: 0;
      z-index: 1001;
      width: ${props.width}px;
      height: 100%;
      overflow: auto;
      transition: all .2s;
    `
  }
)

export default Sider
