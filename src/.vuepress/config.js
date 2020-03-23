module.exports = {
    title: 'Blogs',  // 设置网站标题
    description:'Welcome to my blogs',
    base:'/MyBlogs/',
    repo:
   'https://github.com/sweetyangtian/MyBlogs', // 添加 github 链接
   dest:'./docs',
    themeConfig: {
      displayAllHeaders: true,
      nav: [
        { text: '微信小程序', link: '/wechat/' },
        { text: '开发规范', link: '/develop/' },
        { text: '开发工具', link: '/tools/' },
        { text: '工具函数', link: '/utils/' },
      ],
      // 侧边栏
      sidebar:{
        '/develop/':[
          ['', 'GIT'],
          ['css','CSS'],
          ['js','JS'],
          ['tools', '检查工具'],
          ['commit','检查方案']
        ],
        '/tools/':[
          ['', '在线工具'],
          ['git','Git'],
          ['nvmWindows','nvmWindows']
        ],
        '/utils/':[
          ['', '常用校验'],
          ['exportAjax', '工具类'], 
          ['html2canvas', 'html2canvas'],
        ],
        '/wechat/':[
          ['', '开发须知'],
          ['taro', 'Taro']
         
        ]
      }
  
    }
  }