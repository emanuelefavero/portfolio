/** @type {import('next').NextConfig} */

// @see https://www.npmjs.com/package/next-pwa
const isProd = process.env.NODE_ENV === 'production'
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,

  // Disable PWA in development
  // disable: !isProd,
})

const nextConfig = {}

// Only use the PWA module in production
module.exports = isProd ? withPWA(nextConfig) : nextConfig
