import getSections from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/sections'
import getSettings from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/settings'
import getLayout from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/layout'
import getPages from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/pages'
import getBlogPosts from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/blog-posts'
import getExtraPages from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/extra-pages'
import getWidgets from '@ecomplus/storefront-template/template/js/netlify-cms/base-config/collections/widgets'

//ALPIX CUSTOM MODULES
import getReceitas from './collections/receitas-posts'
import getGrids from './collections/grids'
import getMenuConfig from './collections/menu-config'

export default options => {
  console.log('custom cms config')
  
  options.sections = getSections(options).concat([
    {
      label: '[ALPIX] - Lista de Produtos A',
      name: 'apx_productList_A',
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
    },
    {
      label: '[ALPIX] - Lista de Produtos B',
      name: 'apx_productList_B',
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
    },
    {
      label: '[ALPIX] - Compre Junto',
      name: 'apx_buyTogether',
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
          label: 'Sub Título',
          required: false,
          name: 'subtitle',
          widget: 'string'
        },
        {
          label: 'Descrição',
          required: false,
          name: 'description',
          widget: 'text'
        }
      ]
    },
    {
      label: '[ALPIX] - Feed Instagram',
      name: 'apx_instafeed',
      widget: 'object',
      fields: [
        {
          label: 'Título',
          required: false,
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Sub Título',
          required: false,
          name: 'subtitle',
          widget: 'string'
        },
        {
          label: 'Descrição',
          required: false,
          name: 'description',
          widget: 'text'
        },
        {
          label: 'Link p/ Chaves do Instagram',
          required: false,
          name: 'instantTokens',
          widget: 'string'
        },
        {
          label: 'Quantidade de Fotos (Desktop)',
          required: false,
          name: 'quantity_desktop',
          widget: 'select',
          options : ["3","4","5","6","7","8","9","10","11","12"]
        },
        {
          label: 'Quantidade de Fotos (Mobile)',
          required: false,
          name: 'quantity_mobile',
          widget: 'select',
          options : ["3","4","5","6","7","8","9","10","11","12"]
        },
        {
          label: 'Grid de Fotos (Desktop)',
          required: false,
          name: 'grid_desktop',
          widget: 'select',
          options : ["3","4","5","6","7","8","9","10","11","12"]
        },
        {
          label: 'Grid de Fotos (Mobile)',
          required: false,
          name: 'grid_mobile',
          widget: 'select',
          options : ["3","4","5","6","7","8","9","10","11","12"]
        }
      ]
    }

])

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
      getReceitas(options),
      getGrids(options),
      getMenuConfig(options),
      getExtraPages(options),
      getWidgets(options)
    ]
  }
}
