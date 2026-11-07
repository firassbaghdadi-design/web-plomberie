const indexable = process.env.NEXT_PUBLIC_INDEXABLE === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    // Anciennes adresses du site actuel : l'accueil et les pages de réalisations numérotées.
    const works = ["02", "03", "04", "05", "06", "07", "08", "09"].map((n) => ({ source: `/realisations${n}.html`, destination: "/realisations.html", permanent: true }));
    return [{ source: "/accueil-MTE.html", destination: "/", permanent: true }, { source: "/accueil-MTE", destination: "/", permanent: true }, ...works];
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
