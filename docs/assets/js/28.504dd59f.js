(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{62:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),a("p",[t._v("自定义组件时slot你不管放在什么位置，渲染时就是都是直接追加在你自定义内容的后面，而且放的位置不一样，虽然都是追加在后面，但是有些样式不生效，布局乱掉，位置乱掉。")]),a("p",[a("router-link",{attrs:{to:"/wechat/taro.html#插槽slot"}},[t._v("围观踩坑 go >>")])],1),t._m(2),a("p",[t._v("自定义tabbar时，page不会像原来那样高度只到tabbar之上，page区域会拉升到屏幕最底部，tabbar会覆盖一部分的内容。")]),a("p",[a("router-link",{attrs:{to:"/wechat/taro.html#自定义tabbar"}},[t._v("围观踩坑 go >>")])],1),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),a("p",[t._v("只要是 5:4 就能正常显示。推荐尺寸：标清 375 * 300，高清 750 * 600")]),t._m(9),t._m(10),t._m(11),t._m(12),a("p",[t._v("pages不能单独抽出到一个文件，以下方法不行：")]),t._m(13),t._m(14),a("p",[t._v("scroll-view 标签对 dispay:flex 无效")]),t._m(15),t._m(16),a("p",[t._v("凉凉~~~")]),a("p",[t._v("解决：")]),t._m(17)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"微信小程序开发须知"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序开发须知","aria-hidden":"true"}},[this._v("#")]),this._v(" 微信小程序开发须知")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"插槽slot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插槽slot","aria-hidden":"true"}},[this._v("#")]),this._v(" 插槽slot")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"自定义tabbar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义tabbar","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义tabbar")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"自定义顶部导航栏navbar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义顶部导航栏navbar","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义顶部导航栏navbar")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("没有官方方案，只能自己使用cover-view来自定义")]),s("li",[this._v("胶囊按钮不同手机的位置就是不一样和单位转换无关（通过 wx.getMenuButtonBoundingClientRect()可获取坐标位置，坐标信息以屏幕左上角为原点），如果老板要居中......")]),s("li",[this._v("自定义navbar和tabbar一样会使page拉伸到顶部，难点不是给page加个上边距，而是你需要下拉刷新的时候是从page的顶部开始的，你的下拉完全被自定义navbar挡住了。别跟我说设置margin，下拉刷新就是用的margin，冲突的。")]),s("li",[this._v("最后还是原生组件层级导致的，你的navbar必须是最后渲染才行，要不然会被其他覆盖，你上滑时就知道了。我想过其他的方案，比如干脆navbar加个slot，把页面内容都放到slot，然后你就知道第二个坑哪里来的了。没办法还是修改布局得了。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("可参考文章："),s("br"),s("a",{attrs:{href:"https://juejin.im/post/5ca563f8f265da307a16133b",target:"_blank",rel:"noopener noreferrer"}},[this._v("快狗打车 - 自定义导航栏")]),s("br"),s("a",{attrs:{href:"https://segmentfault.com/a/1190000018733860",target:"_blank",rel:"noopener noreferrer"}},[this._v("小灰 - 小程序自定义导航栏适配")]),s("br"),s("a",{attrs:{href:"https://blog.fundebug.com/2019/06/22/customize-wechat-miniprogram-navigation/",target:"_blank",rel:"noopener noreferrer"}},[this._v("小白 - 小程序自定义单页面、全局导航栏")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#限制","aria-hidden":"true"}},[this._v("#")]),this._v(" 限制")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("DOM节点不超过16000个")]),s("li",[this._v("代码编译后大小不超过2M，图片素材最好上传cdn")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"分享卡片尺寸"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分享卡片尺寸","aria-hidden":"true"}},[this._v("#")]),this._v(" 分享卡片尺寸")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"打包过大"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包过大","aria-hidden":"true"}},[this._v("#")]),this._v(" 打包过大")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("小图片(几k-几10k的)，不是很多的，可以放在小程序里")]),s("li",[this._v("大图片统一用网络地址")]),s("li",[this._v("类库js最好用min版的")]),s("li",[this._v("相同的逻辑代码，提取出来做成公共代码")]),s("li",[this._v("需要npm安装的第三方类库，建议用云函数")]),s("li",[this._v("使用分包，将一些功能放到分包中，首页就留一些首页数据展示等的功能就行，比如说登录相关的可以做成一个分包，官网文档：https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/basic.html")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"pages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pages","aria-hidden":"true"}},[this._v("#")]),this._v(" pages")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/index/index"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/logs/logs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pages.js")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pagesList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/index/index"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/logs/logs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app.js")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("pagesList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./pages.js'")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pagesList\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"scroll-view-标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scroll-view-标签","aria-hidden":"true"}},[this._v("#")]),this._v(" scroll-view 标签")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('<scroll-view\n    scroll-x="true"\n    class="scroll-view-demo"\n>\n    <view class="item" wx:for="{{[1,2,3,4,5,6,7,8,9,10,11,12,13,14]}}" wx:key="{{index}}">\n        {{item}}\n    </view>\n</scroll-view>\n\n')])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("page ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #17448E"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".scroll-view-demo ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-direction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 80rpx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 80rpx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" solid 1px #fff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 36rpx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 40rpx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50rpx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])}],!1,null,null,null);s.default=e.exports}}]);