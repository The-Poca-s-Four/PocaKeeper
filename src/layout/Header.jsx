import React from "react";
import { DownloadOutlined, GithubOutlined } from "@ant-design/icons";
import { Button } from "antd";
import logo from "../assets/logo.png";
import { Space } from "antd";

function Header() {
  return (
    <header
      style={{
        textAlign: "center",
        padding: "2rem 1rem",
        backgroundColor: "#1a1a1a",
      }}
    >
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {/* Logo Section */}
        <div>
          <img
            src={logo}
            alt="ZeroBase Logo"
            style={{ maxHeight: "80px", marginBottom: "1rem" }}
          />
        </div>

        {/* Text Content */}
        <Space direction="vertical" size="middle">
          <h1 style={{ color: "#ffffff", margin: 0, fontSize: "3rem" }}>
            ZeroBase
          </h1>
          <h2
            style={{
              color: "#b0b0b0",
              margin: 0,
              fontSize: "1.5rem",
              fontWeight: "normal",
            }}
          >
            Know your limit for a better end-of-month.
          </h2>
          <h3
            style={{
              color: "#888",
              margin: 0,
              fontSize: "1rem",
              fontWeight: "normal",
              maxWidth: "600px",
            }}
          >
            A smart budgeting app for students with unstable incomes and
            scattered expenses.
          </h3>
        </Space>

        {/* Action Buttons */}
        <Space direction="horizontal" size="middle" wrap>
          <a href="/path/to/your.apk" download>
            <Button type="primary" icon={<DownloadOutlined />} size="large">
              Download APK
            </Button>
          </a>
          <a
            href="https://github.com/The-Poca-s-Four"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button icon={<GithubOutlined />} size="large">
              View GitHub
            </Button>
          </a>
        </Space>
      </Space>
    </header>
  );
}

export default Header;
