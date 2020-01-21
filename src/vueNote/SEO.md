
## 打包优化
>[相关文章](https://my.oschina.net/sunshineS/blog/1583563)

```js
const contStateMent = r => require.ensure(['./components/contStateMent.vue'], () => r(require('./components/contStateMent.vue')));
```


## 调试

> Vue.js devtools开发工具的使用

在Chrome或Firefox浏览器的扩展插件仓库里搜vue devtool,
或者使用debugger和sourcemap调试Vue组件

[https://www.zhihu.com/question/41127712](https://www.zhihu.com/question/41127712)

> 针对vue-cli webpack官方脚手架
```js
//打开build/webpack.dev.conf.js文件
devtool: '#cheap-module-eval-source-map'
//将其修改为：
devtool: '#eval-source-map '
//在chrome的webpack云文件下就可看到vue源文件,也可以在chrome用 ’ctrl(command) + p‘，输入文件名搜索
```
> 开发阶段解决跨域问题

[https://www.mmxiaowu.com/article/584820e1d4352863efb55458](https://www.mmxiaowu.com/article/584820e1d4352863efb55458)
  1. 用jsonp
  2. 让后端设置Access-Control-Allow-Origin
  3. 使用nodejs做代理