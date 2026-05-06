import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
    optimizeCss: true,
    /** Стили в production попадают в документ без отдельных render-blocking CSS-файлов. */
    inlineCss: true,
  },
};

export default nextConfig;
