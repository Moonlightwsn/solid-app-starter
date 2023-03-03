import { Outlet } from "@solidjs/router"
import { css } from "solid-styled-components"

import Blank from "../../components/layout/Blank"
import Layout from "../../components/layout/pc"

const SiderLayout = () => {
  return (
    <Blank>
      <Layout direction="row">
        <Layout.Sider class={SiderClass}></Layout.Sider>
        <Layout>
          <Layout.Header class={HeaderClass}></Layout.Header>
          <Layout.Content class={ContentClass}>
            <Outlet />
            <Layout.Footer class={FooterClass}>
              Solid App Starter ©{new Date().getFullYear()} Created by MoMo
            </Layout.Footer>
          </Layout.Content>
        </Layout>
      </Layout>
    </Blank>
  )
}

const SiderClass = css`
  background: #001529;
`

const HeaderClass = css`
  background: #ffffff;
`

const ContentClass = css`
  background: #f5f5f5;
  padding: 24px 48px;
`

const FooterClass = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default SiderLayout
