module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: 'CodeMax',
  description: 'codemax 的站点',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    sidebarDepth: 2,
    displayAllHeaders: true,
    toc: { includeLevel: [2,3] },
    logo: 'https://t.codingcat.top/static/imgs/logo.png',
    sidebar: {
      '/python/': [
        '',
        'base',
        'class'
      ],
      '/da/': [
        {
          text: '数组 Array',
          collapsible: false,
          children: [
            '/da/array/base'
          ]
        },
        {
          text: '链表 Linked-list',
          collapsible: true,
          children: [
            '/da/linkedlist/reverse'
          ]
        },
        {
          text: '栈 Stack',
          collapsible: true,
          children: [
            '/da/stack/base',
            '/da/stack/minStack'
          ]
        },
        {
          text: '队列 Queue',
          collapsible: true,
          children: [
            '/da/queue/base'
          ]
        },
        {
          text: '二叉树 Binary tree',
          collapsible: true,
          children: [
            '/da/binarytree/base',
            '/da/binarytree/preorder.traverse',
            '/da/binarytree/inorder.traverse',
            '/da/binarytree/postorder.traverse',
            '/da/binarytree/level.traverse'
          ]
        },        
      ],
    },
    navbar: [
      { text: '首页', link: '/'},
      { text: 'Python', link: '/python/'},
      { text: '数据结构与算法', link: '/da/'},
      { text: '计算机网络',
        children: [
          { text: '基础篇', link: '/tcpip/'},
          { text: 'HTTP篇', link: '/tcpip/http'},
          { text: 'TCP篇', link: '/tcpip/tcp'},
          { text: 'UDP篇', link: '/tcpip/udp'},
          { text: 'IP篇', link: '/tcpip/ip'}
        ]
      },
      {
        text: '数据库',
        children: [
          { text: 'MySQL 篇', link: '/mysql'},
          { text: 'Redis 篇', link: '/redis'},
        ]
      },
      // { text: '密码学', link: '/cryptography'},
      { text: 'Github', link: 'https://github.com/istommao/itzoo' },
    ]
  },
}