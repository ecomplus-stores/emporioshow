import getSections from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/sections'
import getSettings from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/settings'
import getLayout from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/layout'
import getPages from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/pages'
import getBlogPosts from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/blog-posts'
import getRecipesPosts from './collections/recipes-posts.js'
import getExtraPages from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/extra-pages'
import getWidgets from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/widgets'

export default options => {
  console.log('custom cms config')
  
  options.sections = getSections(options).concat([{
    label: 'Alpix Lista de Produtos',
    name: 'apx_productList',
    widget: 'object',
    fields: [
      {
        label: 'Produtos',
        name: 'products',
        widget: 'list',
        field: {
          label: 'SKU do produto',
          name: 'product_id',
          widget: 'select',
          options: options.state.routes
            .filter(({ sku }) => typeof sku === 'string')
            .map(({ _id, sku }) => ({
              label: sku,
              value: _id
            }))
        }
      },
      {
        label: 'Título',
        required: false,
        name: 'title',
        widget: 'string'
      },
      {
        label: 'Descrição',
        required: false,
        name: 'description',
        widget: 'text'
      },
      {
        label: 'Texto do Botão',
        required: false,
        name: 'btn_text',
        widget: 'string'
      },
      {
        label: 'Link do Botão',
        required: false,
        name: 'btn_link',
        widget: 'string'
      }
    ]
  }])

  return {
    backend: {
      name: 'git-gateway',
      branch: 'master',
      commit_messages: {
        create: 'Create {{collection}} “{{slug}}”',
        update: 'Update {{collection}} “{{slug}}”',
        delete: 'Delete {{collection}} “{{slug}}”',
        uploadMedia: 'Upload “{{path}}”',
        deleteMedia: '[skip ci] Delete “{{path}}”',
        openAuthoring: '{{message}}'
      }
    },
    logo_url: 'https://ecom.nyc3.digitaloceanspaces.com/storefront/cms.png',
    locale: 'pt',
    load_config_file: Boolean(window.CMS_LOAD_CONFIG_FILE),
    media_folder: `${options.baseDir}template/public/img/uploads`,
    public_folder: '/img/uploads',
    slug: {
      encoding: 'ascii',
      clean_accents: true,
      sanitize_replacement: '-'
    },
    collections: [
      getSettings(options),
      getLayout(options),
      getPages(options),
      getBlogPosts(options),
      getRecipesPosts(options),
      getExtraPages(options),
      getWidgets(options)
    ]
  }
}
