import React from "react";
import { Card, Button } from "antd";

/**
 * Component tổng quát hiển thị thẻ thông tin
 * Props:
 * - icon: JSX.Element (icon cần hiển thị)
 * - title: string (tiêu đề chính)
 * - description: string (mô tả phụ)
 * - buttonText: string (nội dung nút)
 * - buttonLink: string (link khi bấm nút)
 */
const Contacts = ({ icon, title, description, buttonText, buttonLink }) => {
  return (
    <Card
      style={{
        width: 350,
        backgroundColor: "#161b22",
        color: "white",
        border: "1px solid #30363d",
        borderRadius: 8,
      }}
      bodyStyle={{ textAlign: "center" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 8,
        }}
      >
        <div style={{ fontSize: 24, color: "#3fb950", marginRight: 8 }}>
          {icon}
        </div>
        <div>
          <div style={{ fontWeight: 600, color: "white" }}>{title}</div>
          <div style={{ fontSize: 13, color: "#8b949e" }}>{description}</div>
        </div>
      </div>
      <Button
        type="default"
        block
        href={buttonLink}
        style={{
          marginTop: 8,
          backgroundColor: "white",
          borderRadius: 6,
          border: "none",
          fontWeight: 500,
        }}
      >
        {buttonText}
      </Button>
    </Card>
  );
};

export default Contacts;
