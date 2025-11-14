/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const basePath = process.env.BASE_PATH || ''

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true, // GitHub Pages 需要禁用图片优化
  },
  trailingSlash: true,
}

module.exports = nextConfig

