/** @type {import('next').NextConfig} */
// GitHub Pages는 항상 basePath가 필요함 (리포지토리 이름)
const repositoryName = process.env.GITHUB_REPOSITORY_NAME || process.env.NEXT_PUBLIC_BASE_PATH || 'amins_home'
const isGitHubPages = process.env.NODE_ENV === 'production' || process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  output: 'export',
  basePath: isGitHubPages ? `/${repositoryName}` : '',
  assetPrefix: isGitHubPages ? `/${repositoryName}` : '',
  images: {
    unoptimized: true, // GitHub Pages는 이미지 최적화를 지원하지 않음
  },
  trailingSlash: true,
}

module.exports = nextConfig
