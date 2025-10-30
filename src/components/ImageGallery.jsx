import React from "react";
import { Image } from "antd";

function ImageGallery({ images = [] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1rem",
        padding: "1rem 0",
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            textAlign: "center",
            backgroundColor: "#2a2a2a",
            borderRadius: "12px",
            padding: "1.5rem",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            border: "1px solid #333333",
            transition: "all 200ms ease-in-out",
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "4px",
            }}
            preview={{
              mask: "Preview",
            }}
          />
          <h4
            style={{
              margin: "0.5rem 0 0 0",
              color: "#ffffff",
              fontWeight: "600",
            }}
          >
            {image.title}
          </h4>
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
