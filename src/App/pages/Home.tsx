import { For } from "solid-js"
import { styled } from "solid-styled-components"

const Home = () => {
  return (
    <HomeTag>
      <For each={Array.from({ length: 100 })}>
        {(_, index) => <p>Home Page {index}</p>}
      </For>
    </HomeTag>
  )
}

const HomeTag = styled("div")``

export default Home
