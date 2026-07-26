import type { NextConfig } from "next";

const CSP = [
  "default-src 'self'",
  // Next.js precisa de 'unsafe-inline' e 'unsafe-eval' para hydration
  // Vercel Analytics/Speed Insights carregam script de va.vercel-scripts.com
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
  // next/font/google self-hosta os arquivos em build-time — nao precisa do CDN do Google em runtime
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  // Imagens locais + data URIs para Next.js Image
  "img-src 'self' data: blob:",
  // Google Maps (mapa de localização)
  "frame-src https://maps.google.com https://www.google.com",
  // Beacons de Vercel Analytics/Speed Insights
  "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
  "media-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  // Força HTTPS por 2 anos + subdomínios + preload
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Impede clickjacking — permite somente iframes do mesmo domínio
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // Impede MIME-type sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Política de referrer conservadora
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Impede acesso cross-origin ao window (proteção contra XS-Leaks)
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin-allow-popups",
  },
  // Isola recursos cross-origin
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin",
  },
  // Desabilita funcionalidades de browser não utilizadas
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
  },
  // DNS prefetch para performance
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  // Content Security Policy
  {
    key: "Content-Security-Policy",
    value: CSP,
  },
];

const nextConfig: NextConfig = {
  // Source maps em produção (melhora o item "Missing source maps" do Lighthouse)
  productionBrowserSourceMaps: true,

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 14400,
  },

  compress: true,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
