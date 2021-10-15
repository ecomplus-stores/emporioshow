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
        label: 'Opções',
        name: 'options',
        widget: 'list',
        fields: [
          {
            label: 'Nome da Opção',
            name: 'option_name',
            widget: 'string'          
          },
          {
            label: 'Ícone',
            name: 'imagem',
            widget: 'image'
          }
        ]
      },
    ]
  })