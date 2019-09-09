module.exports = {
    title: '笔记文档',  // 设置网站标题
    description: '随便写写的随手笔记',
    base:'/UINotes/',
    repo:
   'https://github.com/sweetyangtian/UINotes', // 添加 github 链接
   dest:'./docs',
    themeConfig: {
      displayAllHeaders: true,
      nav: [
        { text: '开发规范', link: '/develop/' },
        { text: '工具', link: '/devUtils/' },
      ],
      // 侧边栏
      sidebar:{
        '/commonCom/':[
          ['','FormField'],
          ['ExportList','ExportList'],
          ['Filter','Filter'],
          ['Ellipsis','Ellipsis']
        ],
        '/develop/':[
          ['', 'GIT'],
          ['js','JS'],
          ['css','CSS']
        ],
        '/devUtils/':[
          ['', '在线工具'],
          ['exportAjax', '工具类'], 
          ['html2canvas', 'html2canvas'],
          ['git','Git'],
          ['nvmWindows','nvm-Windows']
        ]
      }
  
    }
  }