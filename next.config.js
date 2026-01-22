/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repositoryName = process.env.GITHUB_REPOSITORY_NAME || 'amins_home'

const nextConfig = {
  output: 'export',
  basePath: isProd ? `/${repositoryName}` : '',
  assetPrefix: isProd ? `/${repositoryName}` : '',
  images: {
    unoptimized: true, // GitHub Pages는 이미지 최적화를 지원하지 않음
  },
  trailingSlash: true,
}

module.exports = nextConfig
