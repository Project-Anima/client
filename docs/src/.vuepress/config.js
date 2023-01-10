const { description } = require('../../package')

module.exports = {

  title: 'Anima Guide',
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   */

  head: [
    ['meta', { name: 'theme-color', content: '#191414' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/logo-transparent.png',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,

    nav: [
      {
        text: 'Twitter',
        link: 'https://twitter.com/@Anima'
      },
      {
        text: 'Medium',
        link: 'https://medium.com/@Anima'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/project-anima '
      }
    ],

    sidebar: {

      '/guide/': [
        {
          title: 'Welcome',
          collapsable: false,
          children: [
            'welcome',
          ]
        },
        {
          title: 'Artist\'s Guide',
          collapsable: false,
          children: [
            'how_to_upload',
            'tracking_art',
            'collect_revenue'
          ]
        },
        {
          title: 'Reader\'s Guide',
          collapsable: false,
          children: [
            'browsing',
            'investing',
          ]
        }
      ],


    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
