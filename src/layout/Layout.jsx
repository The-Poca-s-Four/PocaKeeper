import React from "react";
import Header from "./Header.jsx";
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
          colorPrimary: "#F5BA13",
        },
      }}
    >
      <Header collapsed={collapsed} />
      <Layout className="h-screen">
        <Content className="overflow-y-hidden">
          {/* Main content goes here */}
          <Outlet />
        </Content>
      </Layout>
      <Footer collapsed />
    </ConfigProvider>
  );
}

export default AppLayout;
