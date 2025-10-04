/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    formats: ['image/webp', 'image/avif'],
    qualities: [75, 85, 90, 95],
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;