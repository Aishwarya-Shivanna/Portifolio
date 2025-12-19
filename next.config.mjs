/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Portifolio",
  assetPrefix: "/Portifolio/",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aishwarya-shivanna.github.io",
        pathname: "/Portifolio/**",
      },
    ],
  },
};
export default nextConfig;
