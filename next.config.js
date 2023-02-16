/** @type {import('next').NextConfig} */
// eslint-disable-next-line no-undef
module.exports = {
  pageExtensions: [
    'page.tsx',
    'page.ts'
  ],

  reactStrictMode: true,
  swcMinify: true,

  compiler: {
    styledComponents: true
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/welcome',
        permanent: false
      },
    ];
  },
};
