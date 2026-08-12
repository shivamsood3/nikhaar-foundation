import { ImageResponse } from "next/og";

// 192x192 (multiple of 48) is Google's preferred favicon size for search
// results. Ships alongside icon.svg so browsers pick the format they prefer.
export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#0d5c55 0%,#08403b 100%)",
          borderRadius: 42,
        }}
      >
        <svg
          width="128"
          height="128"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 3c5.5 6.2 8.6 10.8 8.6 15A8.6 8.6 0 0 1 16 26.6 8.6 8.6 0 0 1 7.4 18C7.4 13.8 10.5 9.2 16 3Z"
            fill="#ffffff"
          />
          <path
            d="M12 18.4a4 4 0 0 0 4 4"
            stroke="#0d5c55"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
