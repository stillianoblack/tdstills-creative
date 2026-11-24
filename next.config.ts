import type { NextConfig } from "next";

/**
 * Report-only until a full production pass confirms Next.js inline hydration
 * scripts, same-origin fonts, and privacy-enhanced YouTube embeds.
 * Violations are visible in the browser console and do not block rendering.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://i.ytimg.com",
  "font-src 'self'",
  "media-src 'self' blob:",
  "frame-src https://www.youtube-nocookie.com",
  "connect-src 'self' https://www.youtube-nocookie.com https://www.youtube.com",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
].join("; ");

const securityHeaders: Array<{ key: string; value: string }> = [
  {
    key: "Content-Security-Policy-Report-Only",
    value: contentSecurityPolicy,
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
];

if (process.env.NODE_ENV === "production") {
  securityHeaders.push({
    key: "Strict-Transport-Security",
    value: "max-age=31536000",
  });
}

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/product",
        destination: "https://tarusstills.com/product",
        permanent: true,
      },
      {
        source: "/products",
        destination: "https://tarusstills.com/product",
        permanent: true,
      },
      {
        source: "/work/amira-learning",
        destination: "https://tarusstills.com/work/amira-learning",
        permanent: true,
      },
      {
        source: "/work/caidens-courage",
        destination: "https://tarusstills.com/work/caidens-courage",
        permanent: true,
      },
      {
        source: "/work/genius-sports",
        destination: "https://tarusstills.com/work/genius-sports",
        permanent: true,
      },
      {
        source: "/work/hbcugo",
        destination: "https://tarusstills.com/work/hbcugo",
        permanent: true,
      },
      {
        source: "/work/montagecms",
        destination: "https://tarusstills.com/work/montagecms",
        permanent: true,
      },
      {
        source: "/work/state-farm",
        destination: "https://tarusstills.com/work/state-farm",
        permanent: true,
      },
      {
        source: "/work/about",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/film-content",
        destination: "/film",
        permanent: true,
      },
      {
        source: "/how-i-lead",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
