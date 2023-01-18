/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
  images: {
    domains: ['cdn.nba.com']
  }
}

module.exports = nextConfig
