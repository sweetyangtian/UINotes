module.exports = {
    title: '笔记文档',  // 设置网站标题
    description: '随便写写的随手笔记',
    base:'/MyNotes/',
    repo:
   'https://github.com/sweetyangtian/MyNotes', // 添加 github 链接
   dest:'./docs',
    themeConfig: {
      displayAllHeaders: true,
      nav: [
        { text: '学习', link: '/develop/' },
        { text: '开发规范', link: '/develop/' },
        { text: '开发工具', link: '/devUtils/' },
      ],
      // 侧边栏
      sidebar:{
        '/develop/':[
          ['css','CSS'],
          ['js','JS'],
          ['', 'GIT'],
          ['commit','代码检查方案'],
          ['eslient','ESLint']
        ],
        '/devUtils/':[
          ['', '在线工具'],
          ['exportAjax', '工具类'], 
          ['html2canvas', 'html2canvas'],
          ['git','Git'],
          ['nvmWindows','nvmWindows']
        ]
      }
  
    }
  }