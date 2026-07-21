import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

// Pin the workspace root so an unrelated lockfile in a parent directory
// does not confuse Turbopack's root detection.
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  turbopack: { root: projectRoot },
  poweredByHeader: false,
  reactStrictMode: true,
  // Serve /public images as-is. Zero /_next/image optimization calls,
  // so no per-transformation cost on Vercel. Source JPGs are pre-sized.
  images: { unoptimized: true },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      // Static image assets: cache for a year, immutable.
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

// The .com -> .org 308 redirect is set at the Vercel domain level so it
// runs at the CDN edge, before any function invocation. See project domain
// configuration for nikhaarfoundation.com and www.nikhaarfoundation.com.

export default nextConfig;
