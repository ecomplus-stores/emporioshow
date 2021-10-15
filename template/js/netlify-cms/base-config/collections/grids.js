export default ({ baseDir, sections }) => ({
    name: 'recipe-receitas',
    label: 'Receitas',
    folder: `${baseDir}content/recipes`,
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
        field: [
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