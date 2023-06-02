/** @type {import('next').NextConfig} */

// @see https://www.npmjs.com/package/next-pwa
const withPWA = require('next-pwa')({
  dest: 'public',
})

const nextConfig = {}

module.exports = withPWA(nextConfig)
