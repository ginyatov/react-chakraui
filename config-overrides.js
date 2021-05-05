const path = require('path')
module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@components': path.resolve(__dirname, 'src/components'),
      '@img': path.resolve(__dirname, 'src/assets/images'),
      '@ui': path.resolve(__dirname, 'src/components/ui'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@styles': path.resolve(__dirname, 'src/assets/styles'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@theme': path.resolve(__dirname, 'src/theme'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@templates': path.resolve(__dirname, 'src/templates'),
    },
  }
  return config
}
