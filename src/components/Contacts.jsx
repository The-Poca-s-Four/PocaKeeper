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
        backgroundColor: "#2a2a2a",
        color: "white",
        border: "1px solid #333333",
        borderRadius: 12,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        transition: "all 200ms ease-in-out",
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
        <div style={{ fontSize: 24, color: "#ffffff", marginRight: 8 }}>
          {icon}
        </div>
        <div>
          <div style={{ fontWeight: 600, color: "#ffffff" }}>{title}</div>
          <div style={{ fontSize: 13, color: "#cccccc" }}>{description}</div>
        </div>
      </div>
      <Button
        type="default"
        block
        href={buttonLink}
        style={{
          marginTop: 12,
          backgroundColor: "#333333",
          color: "#ffffff",
          borderRadius: 8,
          border: "1px solid #444444",
          fontWeight: 500,
          transition: "all 200ms ease-in-out",
        }}
      >
        {buttonText}
      </Button>
    </Card>
  );
};

export default Contacts;
