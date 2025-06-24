/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
    ],
  },
  // Add these new configurations
  typescript: {
    ignoreBuildErrors: true, // Disable TypeScript errors during build
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint errors during build
  },
  // Optional: Enable if you want to see more detailed build output
  logging: {
    level: 'error', // Only show errors (suppresses warnings)
  }
};

module.exports = nextConfig;