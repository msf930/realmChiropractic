import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const linkAlias = path.resolve(__dirname, "app/components/Link.tsx");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // No built-in next.config flag to disable Link prefetch globally — alias next/link instead.
  turbopack: {
    resolveAlias: {
      "next/link": linkAlias,
    },
  },
  webpack: (config) => {
    config.resolve.alias["next/link"] = linkAlias;
    return config;
  },
  // Serve images from /public directly — avoids a separate edge request per image via /_next/image
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*\\.(jpg|jpeg|png|gif|ico|svg|webp|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
