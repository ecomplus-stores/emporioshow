import '@ecomplus/storefront-template/template/js/lib/config.js'
import EcomRouter from '@ecomplus/storefront-router'
import initNetlifyCms from '@ecomplus/storefront-template/template/netlify-cms/init.js'

document.title = `Admin ~ ${document.title}`

const state = {}

console.log('test alpix')

new EcomRouter().list()
  .then(routes => {
    state.routes = routes
  })
  .catch(err => {
    console.error(err)
    state.routes = []
  })

  .finally(() => {
    if (window.PKG_BASE_DIR === undefined) {
      window.PKG_BASE_DIR = ''
    }
    initNetlifyCms(window.CMS_CUSTOM_CONFIG, {
      baseDir: window.PKG_BASE_DIR,
      state
    }).then(config => {
      console.log('Netlify CMS config:', config)
    })
  })