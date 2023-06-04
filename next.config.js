/** @type {import('next').NextConfig} */

// @see https://www.npmjs.com/package/next-pwa
const isProd = process.env.NODE_ENV === 'production'
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,

  // Disable the PWA module in development
  // disable: !isProd,

  // BEWARE: Lighthouse warning - "Does not register a service worker that controls page and start_url" will remain for now until Next.js app router support it
})

const nextConfig = {}

// Only use the PWA module in production
module.exports = isProd ? withPWA(nextConfig) : nextConfig
