import { JSX, children } from "solid-js"
import { styled } from "solid-styled-components"

type BlankProps = {
  children?: JSX.Element
}

const Blank = (props: BlankProps) => {
  const c = children(() => props.children)
  return <BlackTag>{c()}</BlackTag>
}

const BlackTag = styled("div")`
  height: 100vh;
  width: 100%;
`

export default Blank
