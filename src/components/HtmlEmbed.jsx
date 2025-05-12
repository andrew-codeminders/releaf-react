import React from "react";

export default function HTMLEmbed({ htmlPath }) {
  return (
    <iframe
      src={htmlPath}
      style={{ width: "100%", height: "100dvh", border: "none" }}
    />
  );
}
