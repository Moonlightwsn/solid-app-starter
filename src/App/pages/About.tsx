import type { Component } from "solid-js"
import { styled } from "solid-styled-components"

const About: Component = () => {
  return <AboutTag>About Page</AboutTag>
}

const AboutTag = styled("div")`
  background: #ffffff;
`

export default About
