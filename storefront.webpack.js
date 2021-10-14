const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './html/TheProduct.html': path.resolve(__dirname, 'template/js/custom-js/html/TheProduct.html'),
      './html/ProductGallery.html': path.resolve(__dirname, 'template/js/custom-js/html/ProductGallery.html'),
      './js/ProductGallery.js': path.resolve(__dirname, 'template/js/custom-js/html/ProductGallery.js'),
      './scss/ProductGallery.scss': path.resolve(__dirname, 'template/js/custom-js/html/ProductGallery.scss'),
      './base-config/': path.resolve(__dirname, 'template/js/netlify-cms/base-config.js')
    }
  }
})
