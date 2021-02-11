module.exports = {
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          net: 'empty',
          tls: 'empty',
          cardinal: 'empty',
          fs: 'empty',
        }
      }
  
      return config;
  }
}