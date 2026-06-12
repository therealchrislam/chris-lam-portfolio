/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    // Static export has no image optimization server; serve images as-is.
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
