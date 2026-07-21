import { ImageResponse } from "next/og";

export const alt =
  "Nikhaar Foundation. Water conservation, clean air, and children's welfare in Delhi. 12A, 80G and CSR-1 registered.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 84px",
          background:
            "linear-gradient(135deg, #08403b 0%, #0d5c55 55%, #0f6a62 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              background: "rgba(255,255,255,0.14)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
            }}
          >
            💧
          </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: -0.5 }}>
              Nikhaar Foundation
            </div>
            <div
              style={{
                marginTop: 8,
                fontSize: 14,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              Delhi, India · Registered NGO
            </div>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: -1.2,
              maxWidth: 980,
            }}
          >
            Water, clean air, and children.
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 30,
              lineHeight: 1.35,
              color: "rgba(255,255,255,0.78)",
              maxWidth: 900,
            }}
          >
            A high impact NGO in Delhi, working close to the ground on the
            problems a community can least afford to go without.
          </div>
        </div>

        {/* Footer badges */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {["12A registered", "80G tax deductible", "CSR-1 · CSR00107287"].map(
            (chip) => (
              <div
                key={chip}
                style={{
                  padding: "12px 22px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.24)",
                  fontSize: 20,
                  fontWeight: 600,
                  letterSpacing: 0.2,
                }}
              >
                {chip}
              </div>
            ),
          )}
          <div style={{ flex: 1 }} />
          <div style={{ fontSize: 20, color: "rgba(255,255,255,0.6)" }}>
            nikhaarfoundation.org
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
