export default ({ baseDir, sections, state }) => ({
    name: 'gridIcons',
    label: 'Ícones de Características',
    folder: `${state.baseDir}content/gridIcons`,
    extension: 'json',
    create: true,
    slug: '{{slug}}',
    fields: [
      {
        label: 'Identificação do grid',
        name: 'title',
        widget: 'select',
        options: state.grids
          .map(({ grid_id, title }) => ({
            label: title,
            value: grid_id
          }))
      },      
      {
        label: 'Ícone Padrão',
        name: 'image',
        widget: 'image'
      },
      {
        label: 'Opções',
        name: 'options',
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
                label: 'Nome da Opção',
                name: 'name',
                widget: 'string'          
              },
              {
                label: 'Ícone',
                name: 'image',
                widget: 'image'
              }
            ]
          },          
        ]
      },
    ]
  })