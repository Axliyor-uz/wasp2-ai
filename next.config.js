
/** @type {import('next').NextConfig} */
const path = require('path');


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  // Tell Next.js we are using Turbopack
  turbopack: {
    root: __dirname + '/wasp2-ai',
  },
webpack: (config) => {
    config.resolve.alias['@'] = require('path').resolve(__dirname, 'src');
    return config;
  // Keep webpack config for VS Code/IDE, but Turbopack will ignore it

  },
};

module.exports = nextConfig;
