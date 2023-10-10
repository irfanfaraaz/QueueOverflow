/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      mdxRs: true,
      serverActions: true,
      serverComponentsExternalPackages: ["mongoose"],
    },
}

module.exports = nextConfig
