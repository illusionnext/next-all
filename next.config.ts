import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  crossOrigin: "anonymous",
  // development: {
  //   appDir: true,
  //   runtime: "edge"
  // },
  reactStrictMode: true,

  transpilePackages: ["three"], // transpile three.js

  experimental: {
    authInterrupts: true, // forbidden, unauthorized, and expired sessions
    reactCompiler: true,

    cssChunking: true,
    inlineCss: true,
    useLightningcss: true,
    viewTransition: true,

    ppr: "incremental",
    dynamicIO: true,
    useCache: true,
    staleTimes: {
      dynamic: 30,
      static: 180,
    },

    staticGenerationRetryCount: 1,
    staticGenerationMaxConcurrency: 8,
    staticGenerationMinPagesPerWorker: 25,

    typedRoutes: true,

    urlImports: ["https://example.com/assets/", "https://cdn.skypack.dev"],

    webVitalsAttribution: ["LCP", "FID", "CLS", "TTFB", "FCP", "INP"],
  },
};

export default nextConfig;
