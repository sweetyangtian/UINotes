# 微信小程序开发须知

## 插槽slot
自定义组件时slot你不管放在什么位置，渲染时就是都是直接追加在你自定义内容的后面，而且放的位置不一样，虽然都是追加在后面，但是有些样式不生效，布局乱掉，位置乱掉。

[围观踩坑 go >>](/wechat/taro.html#插槽slot)

## 自定义tabbar
自定义tabbar时，page不会像原来那样高度只到tabbar之上，page区域会拉升到屏幕最底部，tabbar会覆盖一部分的内容。

[围观踩坑 go >>](/wechat/taro.html#自定义tabbar)

## 自定义顶部导航栏navbar
* 没有官方方案，只能自己使用cover-view来自定义
* 胶囊按钮不同手机的位置就是不一样和单位转换无关（通过 wx.getMenuButtonBoundingClientRect()可获取坐标位置，坐标信息以屏幕左上角为原点），如果老板要居中......
* 自定义navbar和tabbar一样会使page拉伸到顶部，难点不是给page加个上边距，而是你需要下拉刷新的时候是从page的顶部开始的，你的下拉完全被自定义navbar挡住了。别跟我说设置margin，下拉刷新就是用的margin，冲突的。
* 最后还是原生组件层级导致的，你的navbar必须是最后渲染才行，要不然会被其他覆盖，你上滑时就知道了。我想过其他的方案，比如干脆navbar加个slot，把页面内容都放到slot，然后你就知道第二个坑哪里来的了。没办法还是修改布局得了。

可参考文章：   
[快狗打车 - 自定义导航栏](https://juejin.im/post/5ca563f8f265da307a16133b)   
[小灰 - 小程序自定义导航栏适配](https://segmentfault.com/a/1190000018733860)   
[小白 - 小程序自定义单页面、全局导航栏](https://blog.fundebug.com/2019/06/22/customize-wechat-miniprogram-navigation/
)
## 限制

* DOM节点不超过16000个
* 代码编译后大小不超过2M，图片素材最好上传cdn

## 分享卡片尺寸
 只要是 5:4 就能正常显示。推荐尺寸：标清 375 * 300，高清 750 * 600

## 打包过大

* 小图片(几k-几10k的)，不是很多的，可以放在小程序里
*  大图片统一用网络地址
*  类库js最好用min版的
*  相同的逻辑代码，提取出来做成公共代码
*  需要npm安装的第三方类库，建议用云函数
*  使用分包，将一些功能放到分包中，首页就留一些首页数据展示等的功能就行，比如说登录相关的可以做成一个分包，官网文档：https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/basic.html

## pages

```js

{
  "pages": ["pages/index/index", "pages/logs/logs"]
}

```
pages不能单独抽出到一个文件，以下方法不行：

```js
// pages.js
 export const pagesList = ["pages/index/index", "pages/logs/logs"]

 // app.js

 import {pagesList} from './pages.js'

 {
  "pages": pagesList
}
```
## scroll-view 标签

scroll-view 标签对 dispay:flex 无效
```
<scroll-view
    scroll-x="true"
    class="scroll-view-demo"
>
    <view class="item" wx:for="{{[1,2,3,4,5,6,7,8,9,10,11,12,13,14]}}" wx:key="{{index}}">
        {{item}}
    </view>
</scroll-view>

```

```scss

page {
  width: 100%;
  height: 100%;
  background: #17448E;
}
.scroll-view-demo {
  display: flex;
  flex-direction: row;
  .item {
    width: 80rpx;
    height: 80rpx;
    border: solid 1px #fff;
    display: flex;
    color: #fff;
    font-size: 36rpx;
    justify-content: center;
    align-items: center;
    border-radius: 40rpx;
    margin-left: 50rpx;
  }
}
```
凉凉~~~

解决：
```scss
.item {
  display: inline-block;
}
```
