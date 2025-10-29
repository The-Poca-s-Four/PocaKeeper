import React from "react";
import { DownloadOutlined, GithubOutlined } from "@ant-design/icons";
import { Button } from "antd";

function Header() {
  return (
    <>
      <div>
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
