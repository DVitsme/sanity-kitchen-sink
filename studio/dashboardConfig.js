export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f4dffcc90bc06a2bb6cb6d3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-8fru13u7',
                  apiId: 'b7808396-b893-4465-af80-2718d08d63d0'
                },
                {
                  buildHookId: '5f4dffcc67e48b9cb67840e8',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-k1uwcx4t',
                  apiId: 'f74ba974-181e-458d-9cd1-175bcb8ecb4e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DVitsme/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-k1uwcx4t.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
