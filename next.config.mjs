/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
    images: {
      domains: ['via.placeholder.com'],
    },
  };
  
  export default nextConfig;
  
=======
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
>>>>>>> e530acde83769a6b9718f7c2a0663b3186c62399
