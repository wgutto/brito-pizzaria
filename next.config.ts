import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // Habilitando imagens de um domínio dinâmico baseado em variável de ambiente
    remotePatterns: [
      new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/**`),
    ]
  }
};

export default nextConfig;
