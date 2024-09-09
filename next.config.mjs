/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/products',
        destination: '/',
        permanent: true,
      },
    ];
  },
  poweredByHeader: false,
};

export default nextConfig;
