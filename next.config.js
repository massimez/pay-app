/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "en",
    locales: ['en','ru']
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
