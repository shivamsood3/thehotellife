import { ImageResponse } from "next/og";

export const alt =
  "The Hotel Life: an editorial guide to the world's most extraordinary hotels";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PLUM = "#4A1D34";
const CYAN = "#00A6DE";
const ORANGE = "#F58220";
const LINEN = "#F7F5F4";

/**
 * Social share card in the brand system: plum field, the door hanger mark
 * reversed out in linen with the cyan dot, and the wordmark in Outfit's two
 * weights. Satori has no mask support, so the hanger is composed from
 * layered rounded shapes rather than an SVG mask.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          background: PLUM,
          padding: "0 90px",
          borderBottom: `14px solid ${CYAN}`,
        }}
      >
        {/* Door hanger mark */}
        <div
          style={{
            position: "relative",
            display: "flex",
            width: 208,
            height: 330,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 208,
              height: 330,
              background: LINEN,
              borderRadius: 59,
              display: "flex",
            }}
          />
          {/* hook keyhole, punched in plum */}
          <div
            style={{
              position: "absolute",
              left: 74,
              top: -2,
              width: 59,
              height: 97,
              background: PLUM,
              borderRadius: 30,
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 60,
              top: 50,
              width: 87,
              height: 87,
              background: PLUM,
              borderRadius: 44,
              display: "flex",
            }}
          />
          {/* accent dot */}
          <div
            style={{
              position: "absolute",
              left: 80,
              top: 222,
              width: 49,
              height: 49,
              background: CYAN,
              borderRadius: 25,
              display: "flex",
            }}
          />
        </div>

        {/* Wordmark and line */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              lineHeight: 1,
              color: LINEN,
              fontWeight: 300,
              letterSpacing: -2,
            }}
          >
            The
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              lineHeight: 1.02,
              color: LINEN,
              fontWeight: 700,
              letterSpacing: -3,
            }}
          >
            Hotel Life
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 30,
              width: 96,
              height: 5,
              background: ORANGE,
            }}
          />
          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 27,
              color: "rgba(247,245,244,0.72)",
              maxWidth: 620,
              lineHeight: 1.4,
            }}
          >
            Honest reviews of the world&apos;s most extraordinary hotels.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
