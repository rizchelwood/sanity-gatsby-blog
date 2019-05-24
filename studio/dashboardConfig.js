export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5ce845b9cc81f1967512e3ff',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pt17q1n6',
                  apiId: '4d690adc-f08f-4ba4-a316-70a98707c8b9'
                },
                {
                  buildHookId: '5ce845ba7c43b69bf7b36891',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-duku8zzv',
                  apiId: '0cea3b49-2c90-44d2-a001-e4c894439a66'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rizchelwood/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-duku8zzv.netlify.com', category: 'apps'}
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
