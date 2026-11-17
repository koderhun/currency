// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Замените 'currency' на реальное имя вашего репозитория на GitHub
  // basePath: '/currency',
  // assetPrefix: '/currency/',
  images: {
    unoptimized: true, // Обязательно для статического экспорта
  },
}

module.exports = nextConfig
