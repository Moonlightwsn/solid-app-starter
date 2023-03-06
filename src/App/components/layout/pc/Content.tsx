import { mergeProps, children, JSX } from "solid-js"
import { styled } from "solid-styled-components"

type ContentProps = {
  class?: string
  children?: JSX.Element
}

const Content = (props: ContentProps) => {
  const c = children(() => props.children)
  return <ContentTag class={props.class}>{c()}</ContentTag>
}

const ContentTag = styled("main")`
  flex: auto;
`

export default Content
