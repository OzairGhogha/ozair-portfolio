/** @type {import('next').NextConfig} */

module.exports = {
  headers: async () => [
      {
          // list more extensions here if needed; these are all the resources in the `public` folder including the subfolders
          source: '/:all*(svg|jpg|png)',
          locale: false,
          headers: [
              {
                  key: 'Cache-Control',
                  value: 'public, max-age=31536000, stale-while-revalidate',
              },
          ],
      },
  ],
}


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
