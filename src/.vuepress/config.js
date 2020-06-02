module.exports = {
    title: 'Blogs',  // 设置网站标题
    description:'Welcome to my blogs',
    base:'/MyBlogs/',
    repo:
    'https://github.com/sweetyangtian/MyBlogs', // 添加 github 链接
    dest:'./docs',
    plugins: ['@vuepress/back-to-top'],
    themeConfig: {
        displayAllHeaders: true,
        nav: [
          {
            text: '开发', 
            items: [
              { text: '开发规范', link: '/develop/' },
              { text: '工具函数', link: '/utils/' },
              { text: '开发工具', link: '/tools/' },
            ]
          },
          { 
            text: '移动端', 
            items: [
              { text: '移动端', link: '/mobile/' },
              { text: '微信小程序', link: '/wechat/' },
             
            ]
          },

          {
            text: '框架',
            items:[
              { text: 'Vue', link: '/vue/', sidebarDepth: 3 },
            ]
          },
          { text: '基础', link:'/basis/', sidebarDepth: 3 }

        ],
        // 侧边栏
        sidebar:{
          '/develop/':[
            {
              title: '开发规范',   // 必要的
              children: [
                ['', 'GIT'],
                ['css','CSS'],
                ['js','JS']
              ]
            },
            ['tools', '检查工具'],
            ['commit','检查方案']
          ],

          '/tools/':[
            ['', '在线工具'],
            ['git','Git'],
            ['svn','SVN'],
            ['nvmWindows','nvmWindows']
          ],
          '/utils/':[
            ['', '常用校验'],
            ['exportAjax', '工具类']
          ],
          '/wechat/':[
            ['', '入门须知'],
            ['taro', '爬坑'],
            ['dev', '常见业务场景'],
            {
              title:'页面截图',
              collapsable: false,
              sidebarDepth: 0,
              children:[
                'html2canvas',
                ['share','小程序'],
              ]
            }
            
            
          ],
          '/mobile/':[
            {
              title:'入门基础',
              sidebarDepth: 3,
              children:[
                '',
                'question'
              ]
            }
           
          ],
          '/vue/':[
            ['', '项目合集'],
            ['laravel','Laravel']
          ],
          '/basis/':[
            ['','资源网站'],
            ['css','CSS'],
            ['sass','SASS']
          ]
        }

    }
}