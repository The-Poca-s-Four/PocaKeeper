// MainSection.jsx
import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function MainSection({
  heading = "Get in Touch",
  subheading,
  children,
  gap = 24,
  minItemWidth = 320,
}) {
  const items = React.Children.toArray(children);

  return (
    <section style={{ padding: "48px 0" }}>
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <Title style={{ marginBottom: 8, color: "#ffffff" }}>{heading}</Title>
        {subheading && (
          <Paragraph style={{ color: "#b0b0b0" }}>{subheading}</Paragraph>
        )}
      </div>

      {/* 👇 CSS Grid để tự wrap và center items */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fit, minmax(${minItemWidth}px, 1fr))`,
          gap: gap,
          justifyItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {items.map((child, idx) => (
          <div
            key={idx}
            style={{ width: "100%", maxWidth: `${minItemWidth}px` }}
          >
            {child}
          </div>
        ))}
      </div>
    </section>
  );
}
