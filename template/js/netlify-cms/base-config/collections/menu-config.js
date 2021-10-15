export default ({ baseDir, sections }) => ({
    name: 'menu-config',
    label: 'Configuração do Menu',
    folder: `${baseDir}content/menu-config`,
    extension: 'json',
    create: true,
    slug: '{{slug}}',
    fields: [
      {
        label: 'Categoria Principal',
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
                options: state.grids
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
      }
      // {
      //   label: 'Filtros',
      //   name: 'filters',
      //   widget: 'list',
      //   required:false,
      //   fields: [
      //     {
      //       label: 'Nome da Opção',
      //       name: 'option',
      //       widget: 'object',
      //       required:false,
      //       fields: [
      //         {
      //           label: 'Grade',
      //           name: 'grid',
      //           widget: 'select',
      //           options: state.routes
      //             .filter(({ resource, name }) => resource === 'categories')
      //             .map(({ name, path }) => ({
      //               label: name,
      //               value: path.slice(1)
      //             }))
      //         }              
      //       ]
      //     },          
      //   ]
      // },
    ]
  })