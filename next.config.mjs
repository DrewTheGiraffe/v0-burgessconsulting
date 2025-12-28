/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/v0-burgessconsulting',
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
