module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};
