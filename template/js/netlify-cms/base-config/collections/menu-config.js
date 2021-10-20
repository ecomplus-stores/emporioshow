export default ({ baseDir, sections, state }) => ({
    name: 'menu-config',
    label: 'Configuração do Menu',
    folder: `${baseDir}content/menu-config`,
    extension: 'json',
    create: true,
    slug: '{{slug}}',
    fields: [
      {
        label: 'Categoria Principal',
        name: 'title',
        widget: 'select',
        options: state.routes
          .filter(({ resource, name }) => resource === 'categories')
          .map(({ name, path }) => ({
            label: name,
            value: path.slice(1)
          }))
      },      
      {
        label: 'Categorias em Destaque',
        name: 'categories',
        widget: 'list',
        required:false,
        fields: [
          {
            label: 'Categorias',
            name: 'category',
            widget: 'object',
            required:false,
            fields: [
              {
                label: 'Categoria',
                name: 'slug',
                widget: 'select',
                options: state.routes
                  .filter(({ resource, name }) => resource === 'categories')
                  .map(({ name, path }) => ({
                    label: name,
                    value: path.slice(1)
                  }))
              },   
              {
                label: 'Nome',
                required:false,
                name: 'name_to_replace',
                widget: 'string'          
              },
              {
                label: 'Imagem em Destaque',
                name: 'image',
                widget: 'image'
              }
            ]
          },          
        ]
      },
      {
        label: 'Filtros em Destaque',
        name: 'filters',
        widget: 'list',
        required:false,
        fields: [
          {
            label: 'Nome da Opção',
            name: 'option',
            widget: 'object',
            required:false,
            fields: [
              {
                label: 'Nome para Exibição',
                required:false,
                name: 'title',
                widget: 'string'          
              },
              {
                label: 'Item',
                name: 'grid',
                widget: 'select',
                options: state.grids
                  .map(({ _id, title }) => ({
                    label: title,
                    value: _id
                  }))
              }              
            ]
          },          
        ]
      },
    ]
  })
