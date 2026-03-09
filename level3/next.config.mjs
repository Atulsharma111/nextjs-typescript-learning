/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        hostname: 'www.google.com',
      },
      {
        hostname:'plus.unsplash.com'
      }
    ],
  },
};

export default nextConfig;
