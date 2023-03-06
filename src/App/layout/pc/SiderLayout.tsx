import { createSignal } from "solid-js"
import { Outlet } from "@solidjs/router"
import { css, styled } from "solid-styled-components"

import Blank from "../../components/layout/Blank"
import Layout from "../../components/layout/pc"

const headerHeight = 64
const siderWidth = 200
const siderCollapsedWidth = 80

const [collapsed, setCollapsed] = createSignal<boolean>()
const rightContentMarginLeft = () =>
  collapsed() ? siderCollapsedWidth : siderWidth
const triggerText = () => (collapsed() ? "展开侧边栏" : "收起侧边栏")

const SiderLayout = () => {
  return (
    <Blank>
      <Layout direction="row">
        <Layout.Sider
          class={SiderClass}
          width={siderWidth}
          collapsed={collapsed()}
          collapsedWidth={siderCollapsedWidth}
        ></Layout.Sider>
        <Layout>
          <Layout.Header class={HeaderClass} fixed height={headerHeight}>
            <HeaderContentTag marginLeft={rightContentMarginLeft()}>
              <TriggerButton onClick={() => setCollapsed((c) => !c)}>
                {triggerText()}
              </TriggerButton>
            </HeaderContentTag>
          </Layout.Header>
          <Layout.Content class={ContentClass}>
            <MainContentTag marginLeft={rightContentMarginLeft()}>
              <Outlet />
            </MainContentTag>

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
  margin-top: ${headerHeight.toString()}px;
  padding: 24px 48px 0;
`

const FooterClass = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderContentTag = styled("div")<{ marginLeft: number }>`
  margin-left: ${(props) => props.marginLeft}px;
  padding: 8px 12px;
  height: 100%;
  transition: all 0.2s;
`

const MainContentTag = styled("div")<{ marginLeft: number }>`
  margin-left: ${(props) => props.marginLeft}px;
  transition: all 0.2s;
`

const TriggerButton = styled("button")`
  border: 0;
  border-radius: 6px;
  padding: 4px 15px;
  cursor: pointer;
  font-size: 14px;
  height: 32px;
  background-color: #1677ff;
  color: #fff;
  box-shadow: 0 2px 0 rgb(5 145 255 / 10%);
  &:hover {
    background-color: #4096ff;
  }
`

export default SiderLayout
