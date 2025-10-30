import React from "react";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import { Layout, ConfigProvider } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#333333",
          colorBgBase: "#1a1a1a",
          colorTextBase: "#ffffff",
          colorBorder: "#333333",
          colorBgContainer: "#2a2a2a",
        },
      }}
    >
      <div style={{ backgroundColor: "#1a1a1a", minHeight: "100vh" }}>
        <Header collapsed={collapsed} />
        <Body collapsed />
        <Layout style={{ backgroundColor: "#1a1a1a" }}>
          <Content style={{ backgroundColor: "#1a1a1a" }}>
            {/* Main content goes here */}
            <Outlet />
          </Content>
        </Layout>
        <Footer collapsed />
      </div>
    </ConfigProvider>
  );
}

export default AppLayout;
