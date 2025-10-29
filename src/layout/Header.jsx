import React from "react";
import { DownloadOutlined, GithubOutlined } from "@ant-design/icons";
import { Button } from "antd";
import logo from "../assets/logo.png";

function Header() {
  return (
    <>
      <div>
        <img src={logo} alt="ZeroBase Logo" />
        <h1>ZeroBase</h1>
        <h2>Know your limit for a better end-of-month.</h2>
        <h3>
          A smart budgeting app for students with unstable incomes and scattered
          expenses.
        </h3>
        <a href="/path/to/your.apk" download>
          <Button type="primary" icon={<DownloadOutlined />}>
            Download APK
          </Button>
        </a>
      </div>
      <div>
        <a
          href="https://github.com/The-Poca-s-Four"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button icon={<GithubOutlined />}>View GitHub</Button>
        </a>
      </div>
    </>
  );
}

export default Header;
