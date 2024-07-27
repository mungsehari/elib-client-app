/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.xlibris.com",
      },
    ],
  },
};

export default nextConfig;
