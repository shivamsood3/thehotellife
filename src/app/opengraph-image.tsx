import { ImageResponse } from "next/og";

export const alt = "The Hotel Life — an editorial guide to the world's most extraordinary hotels";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #1a1714 0%, #26201a 100%)",
          padding: "72px 80px",
          borderTop: "10px solid #a9852f",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#c19a45",
            fontWeight: 600,
          }}
        >
          Est. 2016 · The World&apos;s Finest Hotels
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 128,
              lineHeight: 1,
              color: "#faf8f4",
              fontWeight: 700,
            }}
          >
            The Hotel Life
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 36,
              lineHeight: 1.3,
              color: "rgba(250,248,244,0.72)",
              maxWidth: 900,
            }}
          >
            An editorial guide to the world&apos;s most extraordinary hotels.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "rgba(250,248,244,0.6)",
          }}
        >
          <span style={{ display: "flex", color: "#c19a45", letterSpacing: 3 }}>THEHOTELLIFE.COM</span>
          <span style={{ display: "flex" }}>Honest reviews · Insider guides</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
