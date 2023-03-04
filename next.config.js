/** @type {import('next').NextConfig} */
// eslint-disable-next-line no-undef
module.exports = {
  pageExtensions: ['page.tsx'],

  reactStrictMode: true,

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
