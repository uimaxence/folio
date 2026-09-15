import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Anciennes URL du site en trois pages. 301 explicite (DESIGN.md §11).
    return [
      { source: "/referencement-local", destination: "/accompagnement", statusCode: 301 },
      { source: "/performance", destination: "/", statusCode: 301 },
      { source: "/realisations", destination: "/#realisations", statusCode: 301 },
      { source: "/etudes-de-cas/fenetres-sur-loir", destination: "/realisations/fenetres-sur-loir", statusCode: 301 },
      { source: "/etudes-de-cas/:path*", destination: "/#realisations", statusCode: 301 },
      { source: "/design", destination: "/", statusCode: 301 },
    ];
  },
};

export default nextConfig;
