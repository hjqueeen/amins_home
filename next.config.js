/** @type {import('next').NextConfig} */
// GitHub Pages는 항상 basePath가 필요함 (리포지토리 이름)
const repositoryName = process.env.GITHUB_REPOSITORY_NAME || process.env.NEXT_PUBLIC_BASE_PATH || 'amins_home'
const isGitHubPages = process.env.NODE_ENV === 'production' || process.env.GITHUB_ACTIONS === 'true'
const basePath = isGitHubPages ? `/${repositoryName}` : ''

const nextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true, // GitHub Pages는 이미지 최적화를 지원하지 않음
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

module.exports = nextConfig
