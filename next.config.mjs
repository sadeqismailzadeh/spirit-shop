/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },

  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
