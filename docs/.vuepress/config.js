module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: 'CodeMax',
  description: 'codemax 的站点',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://t.codingcat.top/static/imgs/logo.png',
    sidebar: {
      '/python/': [
        'base',
        'class'
      ]
    },
    navbar: [
      { text: '首页', link: '/'},
      { text: 'Python', link: '/python/'},
      { text: '计算机网络',
        children: [
          { text: '基础篇', link: '/tcpip/'},
          { text: 'HTTP篇', link: '/tcpip/http'},
          { text: 'TCP篇', link: '/tcpip/tcp'},
          { text: 'UDP篇', link: '/tcpip/udp'},
          { text: 'IP篇', link: '/tcpip/ip'}
        ]
      },
      { text: 'MySQL', link: '/mysql'},
      { text: 'Redis', link: '/redis'},
      { text: '密码学', link: '/cryptography'},
      { text: 'Github', link: 'https://github.com/istommao/itzoo' },
    ]
  },
}