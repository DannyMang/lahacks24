/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['via.placeholder.com'],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/landingpage",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
