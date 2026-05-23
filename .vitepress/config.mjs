import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Bisheng Wang",
  description: "Personal Homepage",
  cleanUrls: true,

  themeConfig: {
    siteTitle: false,

    // 1. 顶部导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'PerCS', link: '/percs' },
      { text: 'Project', link: '/project' },
      { text: 'Code', link: '/code' },
      { text: 'Data', link: '/data-page' },
      { text: 'CV', link: '/cv' }
    ],

    // 2. 多侧边栏精细匹配
    sidebar: {
      // 当处于首页（包括其锚点）时，显示首页导航
      // 🎯 当处于独立的项目页 /project 时，展示属于该页面的内部目录
      '/project': [
        {
          //text: 'Project Content',
          items: [
            { text: 'Overview', link: '/project#overview' },      /* 修复：指向 project 页面内部的锚点 */
            { text: 'OCTA Segmentation', link: '/project#octa' } /* 修复：避免使用空格和特殊字符作为锚点 ID */
          ]
        }
      ],

      '/': [
        {
          items: [
            { text: 'About Me', link: '/#about' },
            { text: 'News', link: '/#news' },
            { text: 'Publications', link: '/#publications' },
            { text: 'Code', link: '/#code' },
            { text: 'Data', link: '/#data' },
            { text: 'Contact', link: '/#contact' }
          ]
        }
      ]
    }, // 👈 🌟 之前就是这里漏掉了一个右大括号和逗号，导致整个配置崩塌！

    // 3. 其他全局配置项
    socialLinks: [
      { icon: 'github', link: 'https://github.com/BishengWangMW' }
    ],
    outline: { label: 'On this page', level: [2, 3] },
    footer: {
      message: 'Built with VitePress',
      copyright: '© 2026 Bisheng Wang'
    }
  }
})