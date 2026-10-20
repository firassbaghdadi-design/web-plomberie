import { readFileSync } from "node:fs";

const redirects = JSON.parse(readFileSync(new URL("./redirects.json", import.meta.url), "utf8"));
const indexable = process.env.NEXT_PUBLIC_INDEXABLE === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return redirects.map(({ from, to }) => ({ source: from, destination: to, statusCode: 301 }));
  },
  async headers() {
    const security = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
    ];
    if (!indexable) security.push({ key: "X-Robots-Tag", value: "noindex, nofollow" });
    return [{ source: "/:path*", headers: security }];
  },
};

export default nextConfig;
