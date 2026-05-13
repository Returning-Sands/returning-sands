import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Returning Sands — A Sudanese Cultural Heritage Campaign & Film";

export default async function OpengraphImage() {
  const bg = readFileSync(join(process.cwd(), "public/img/bridge.jpg"));
  const bgDataUrl = `data:image/jpeg;base64,${bg.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          backgroundColor: "#0a1825",
        }}
      >
        <img
          src={bgDataUrl}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.7,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(10,24,37,0.55) 0%, rgba(10,24,37,0.2) 30%, rgba(10,24,37,0.92) 100%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: 72,
            height: "100%",
            color: "#faf5ec",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: 5,
              color: "#d4b886",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            A Sudanese Cultural Heritage Campaign · 2026–2027
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 168,
                lineHeight: 0.88,
                fontFamily: "serif",
                letterSpacing: -3,
              }}
            >
              Returning
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 168,
                lineHeight: 0.88,
                fontFamily: "serif",
                fontStyle: "italic",
                color: "#d4b886",
                letterSpacing: -3,
              }}
            >
              Sands
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              fontSize: 22,
            }}
          >
            <span
              style={{
                display: "flex",
                color: "#f1e8d4",
                maxWidth: 640,
                lineHeight: 1.35,
              }}
            >
              A campaign & short documentary by Paris Quetzal Sistilli and Yusef Bushara
            </span>
            <span
              style={{
                display: "flex",
                color: "#d4b886",
                fontSize: 20,
                letterSpacing: 2,
              }}
            >
              returningsands.org
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
