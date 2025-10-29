import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        textAlign: "center",
        width: "100%",
        padding: "1rem 0",
        background: "#ffffff",
        borderTop: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <div style={{ color: "#280404ff" }}>
        <p> Built with ❤️ by ZeroBase</p>
        <p>Copyright © {year} ZeroBase. All rights reserved.</p>
        <p>Version 1.0.0</p>
      </div>
    </footer>
  );
}

export default Footer;
