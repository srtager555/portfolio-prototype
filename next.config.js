/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: [
    {
      protocol: "https",
      hostname: "i.ibb.co",
      port: "",
      pathname: "/**",
    },
  ],
};

module.exports = nextConfig;
