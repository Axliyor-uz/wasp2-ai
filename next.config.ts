import type { NextConfig } from "next";
const path = require('path');
const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // outputFileTracingRoot: path.join(__dirname, '../../'),
  outputFileTracingRoot: process.env.NODE_ENV === 'production' 
    ? path.join(__dirname, '..', '..') 
    : __dirname,
};

module.exports = nextConfig;
