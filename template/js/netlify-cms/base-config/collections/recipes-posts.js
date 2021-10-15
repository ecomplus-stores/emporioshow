export default ({ baseDir, sections }) => ({
    name: 'receitas',
    label: 'Receitas',
    folder: `${baseDir}content/receitas`,
    extension: 'json',
    create: true,
    slug: '{{slug}}',
    fields: [
      {
        label: 'Produto',
        name: 'title',
        widget: 'string'
      },       
      {
        label: 'Imagem em Destaque',
        name: 'imagem',
        widget: 'image'
      },
      {
        label: 'Tempo de Preparo',
        name: 'tempo_de_preparo',
        widget: 'string'
      }, 
      {
        label: 'Dificuldade',
        name: 'dificuldade',
        widget: 'select',
        options : ['Fácil','Média','Difícil']
      },
      {
        label: 'Serve Até',
        name: 'serve_ate',
        widget: 'select',
        options : ["1 pessoa", "2 pessoas", "3 pessoas", "4 pessoas", "5 pessoas", "6 pessoas", "7 pessoas", "8 pessoas", "9 pessoas", "10 pessoas"]
      },
      {
        label: 'Ingredientes',
        name: 'ingredientes',
        widget: 'markdown'
      },  
      {
        label: 'Modo de Preparo',
        name: 'preparo',
        widget: 'markdown'
      },
      {
        label: 'Seções',
        name: 'sections',
        required: false,
        hint: 'Por padrão o layout será composto por breadcrumbs, título e corpo do post',
        widget: 'list',
        types: [
          {
            label: 'Corpo do post',
            name: 'blog-post',
            widget: 'object',
            fields: [
              {
                label: 'Exibir conteúdo do post',
                name: 'enabled',
                widget: 'boolean',
                default: true
              }
            ]
          }
        ].concat(sections)
      }
    ]
  })