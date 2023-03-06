import { Outlet } from "@solidjs/router"
import { css } from "solid-styled-components"

import Blank from "../../components/layout/Blank"
import Layout from "../../components/layout/pc"

const headerHeight = 64
const siderWidth = 200

const SiderLayout = () => {
  return (
    <Blank>
      <Layout direction="row">
        <Layout.Sider class={SiderClass} width={siderWidth}></Layout.Sider>
        <Layout>
          <Layout.Header
            class={HeaderClass}
            fixed
            height={headerHeight}
          ></Layout.Header>
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
  padding: ${String(headerHeight + 24)}px 48px 24px ${String(siderWidth + 48)}px;
`

const FooterClass = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default SiderLayout
