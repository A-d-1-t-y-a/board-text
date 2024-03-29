/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["3.bp.blogspot.com", "lh3.googleusercontent.com"],
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
};

module.exports = nextConfig;
