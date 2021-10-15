import '@ecomplus/storefront-template/template/js/lib/config'
import EcomRouter from '@ecomplus/storefront-router'
import initNetlifyCms from '@ecomplus/storefront-template/template/js/netlify-cms/init'

// https://developers.e-com.plus/client/ecomClient.html#.store
import { store } from '@ecomplus/client'

document.title = `Admin ~ ${document.title}`

const state = {}

new EcomRouter().list()
  .then(routes => {
    state.routes = routes
  })
  .catch(err => {
    console.error(err)
    state.routes = []
  })

  .finally(() => {
    store({ url: '/grids' })
      .then(({ data }) => {
        state.grids = data.result
      })
      .catch(err => {
        console.error(err)
        state.grids = []
      })

      .finally(() => {
        console.log('alpix')
        console.log(state)
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
  })
