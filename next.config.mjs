/** @type {import('next').NextConfig} */
const nextConfig = {
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
