import { mergeProps, children, JSX } from "solid-js"
import { styled } from "solid-styled-components"

type FooterProps = {
  height?: number
  class?: string
  children?: JSX.Element
}

const Footer = (props: FooterProps) => {
  const merged = mergeProps({ height: 80 }, props)
  const c = children(() => merged.children)
  return (
    <FooterTag class={merged.class} height={merged.height}>
      {c()}
    </FooterTag>
  )
}

const FooterTag = styled("footer")<{ height: number }>`
  flex-shrink: 0;
  width: 100%;
  height: ${(props) => props.height}px;
`

export default Footer
