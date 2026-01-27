const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  outputFileTracingRoot:
    process.env.NODE_ENV === "production"
      ? path.join(__dirname, "..", "..")
      : __dirname,

  // Webpack alias for @
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.join(__dirname, "src"),
    };
    return config;
  },
};

module.exports = nextConfig;
