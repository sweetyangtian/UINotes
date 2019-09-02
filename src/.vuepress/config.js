module.exports = {
    title: '笔记文档',  // 设置网站标题
    base:'/UINotes/',
    repo:
   'https://github.com/sweetyangtian/UINotes', // 添加 github 链接
   dest:'./docs',
    themeConfig: {
      displayAllHeaders: true,
      // 添加导航栏  { text: '框架', link: '/' }
      nav: [
        { text: '公共组件', link: '/commonCom/' },
  
      ],
      // 每个导航栏对应不同侧边栏
      sidebar:{
        '/commonCom/':[
          ['','公共组件'],
          ['ExportList','ExportList'],
          ['Filter','Filter'],
          ['formField','formField']
        ],
      }
  
    }
  }