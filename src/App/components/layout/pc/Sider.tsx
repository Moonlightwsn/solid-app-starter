import { mergeProps, children, JSX } from "solid-js"
import { styled } from "solid-styled-components"

type SiderProps = {
  width?: number
  class?: string
  children?: JSX.Element
}

const Sider = (props: SiderProps) => {
  const merged = mergeProps({ width: 200 }, props)
  const c = children(() => merged.children)
  return (
    <SiderTag class={merged.class} width={merged.width}>
      {c()}
    </SiderTag>
  )
}

const SiderTag = styled("aside")<{ width: number }>`
  flex-shrink: 0;
  width: ${(props) => props.width}px;
  height: 100%;
  overflow: auto;
`

export default Sider
