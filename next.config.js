/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  // Prevent 404 error on public folder assets (like pdf files)
  assetPrefix: isProd ? 'https://emanuelefavero.com' : '',
}

module.exports = nextConfig
