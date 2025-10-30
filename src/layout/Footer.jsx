import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        textAlign: "center",
        width: "100%",
        padding: "2rem 0",
        background: "#1a1a1a",
        borderTop: "1px solid #333333",
      }}
    >
      <div style={{ color: "#cccccc" }}>
        <p> Built with ❤️ by ZeroBase</p>
        <p>Copyright © {year} ZeroBase. All rights reserved.</p>
        <p>Version 1.0.0</p>
      </div>
    </footer>
  );
}

export default Footer;
