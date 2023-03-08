import { Outlet } from "@solidjs/router"
import { styled } from "solid-styled-components"
import bg from "@/assets/bg.jpeg"

const BgImageLayout = () => {
  return (
    <BgImageLayoutTag bg={bg}>
      <Outlet />
    </BgImageLayoutTag>
  )
}

const BgImageLayoutTag = styled("div")<{ bg: string }>`
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-position: center;
  background-clip: border-box;
  background-origin: border-box;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  overflow: auto;
`

export default BgImageLayout
