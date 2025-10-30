import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        textAlign: "center",
        width: "100%",
        padding: "1rem 0",
        background: "#161b22",
        borderTop: "1px solid rgba(255, 255, 255, 0.18)",
      }}
    >
      <div style={{ color: "#c5f4f856" }}>
        <p> Built with ❤️ by ZeroBase</p>
        <p>Copyright © {year} ZeroBase. All rights reserved.</p>
        <p>Version 1.0.0</p>
      </div>
    </footer>
  );
}

export default Footer;
