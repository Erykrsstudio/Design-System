/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/projects/vultr-design-system",
  assetPrefix: "/projects/vultr-design-system/",
  trailingSlash: true,
};

export default nextConfig;
