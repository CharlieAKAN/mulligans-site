/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ✅ Automatically generates static output
  images: {
    unoptimized: true, // ✅ Fix for Cloudflare Pages & Netlify static hosting
  },
};

module.exports = nextConfig;
