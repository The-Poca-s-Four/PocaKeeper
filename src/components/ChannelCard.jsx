import React from "react";

function ChannelCard(props) {
  return (
    <div
      className="term"
      style={{
        backgroundColor: "#1f2937",
        borderRadius: "3px",
        padding: "2rem",
        minWidth: "280px",
        maxWidth: "100%",
        width: "auto",
        color: "white",
        boxShadow: "0 2px 0 rgba(0, 0, 0, 0.05), 0 5px 20px rgba(0, 0, 0, 0.1)",
        border: "1px solid #374151",
      }}
    >
      {/* Header with big icon and title */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          marginBottom: "1rem",
        }}
      >
        <span
          className="emoji"
          style={{
            fontSize: "400%",
            margin: "0",
            display: "block",
          }}
        >
          {props.iconBig}
        </span>
        <h2
          style={{
            fontSize: "200%",
            fontWeight: "900",
            margin: "0",
            color: "#2ec2b0",
          }}
        >
          {props.title}
        </h2>
      </div>

      {/* List of content items */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {props.contents &&
          props.contents.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
              }}
            >
              <span
                style={{
                  color: "#2ec2b0",
                  fontSize: "16px",
                  marginTop: "2px",
                  flexShrink: 0,
                }}
              >
                {item.iconSmall || "✓"}
              </span>
              <div>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    margin: "0 0 0.25rem 0",
                    color: "#2ec2b0",
                  }}
                >
                  {item.subtitle}
                </h3>
                <p
                  style={{
                    fontSize: "92.5%",
                    color: "#9ca3af",
                    margin: "0",
                    lineHeight: "1.666",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ChannelCard;
