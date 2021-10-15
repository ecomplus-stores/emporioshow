export default ({ baseDir, sections }) => ({
    name: 'gridIcons',
    label: 'Ícones de Características',
    folder: `${baseDir}content/gridIcons`,
    extension: 'json',
    create: true,
    slug: '{{slug}}',
    fields: [
      {
        label: 'ID do grid',
        name: 'title',
        widget: 'string'
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
        fields: [
          {
            label: 'Nome da Opção',
            name: 'option',
            widget: 'object',
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