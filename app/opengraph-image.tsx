import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// PLACEHOLDER — replace this entire component with your final artwork image.
// To use a static image instead: drop a 1200x630 PNG named `opengraph-image.png`
// into the /app directory and delete this file. Next.js picks it up automatically.

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#111111",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Brand */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <p
            style={{
              color: "#555555",
              fontSize: "22px",
              textTransform: "uppercase",
              letterSpacing: "6px",
              margin: 0,
              fontFamily: "sans-serif",
            }}
          >
            Benson High School · Design &amp; Construction Academy
          </p>

          <h1
            style={{
              color: "#ffffff",
              fontSize: "100px",
              fontWeight: "bold",
              margin: 0,
              lineHeight: 1,
              fontFamily: "sans-serif",
            }}
          >
            The Carrot
          </h1>

          <p
            style={{
              color: "#888888",
              fontSize: "30px",
              margin: 0,
              lineHeight: 1.4,
              textAlign: "center",
              fontFamily: "sans-serif",
            }}
          >
            Advertise with us. Support Benson High design students.
          </p>
        </div>

        {/* Placeholder watermark */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            display: "flex",
            background: "rgba(255,255,255,0.06)",
            padding: "8px 18px",
            borderRadius: "4px",
          }}
        >
          <p
            style={{
              color: "#444444",
              fontSize: "14px",
              margin: 0,
              fontFamily: "monospace",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Placeholder artwork — replace with final design
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
