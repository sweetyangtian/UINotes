(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{399:function(t,s,a){"use strict";a.r(s);var n=a(18),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[t._v("#")]),t._v(" 基础")]),t._v(" "),a("h2",{attrs:{id:"设置meta标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置meta标签"}},[t._v("#")]),t._v(" 设置meta标签")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("initial-scale=1,width=device-width,user-scalable=no,maximum-scale=1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("applicable-device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("pc,mobile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"页面尺寸适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面尺寸适配"}},[t._v("#")]),t._v(" 页面尺寸适配")]),t._v(" "),a("h3",{attrs:{id:"网易做法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网易做法"}},[t._v("#")]),t._v(" 网易做法")]),t._v(" "),a("p",[t._v("css中使用的尺寸与设计稿保持一致。将页面宽度设为屏幕宽度，通过设置html的font-size与使用rem实现尺寸与设计稿一致")]),t._v(" "),a("p",[t._v("● 假设设计稿宽度为640px，那么以设计稿为准，设置body的宽度为640px")]),t._v(" "),a("p",[t._v("● 由于使用rem单位，因此需要设置html标签的font-size")]),t._v(" "),a("p",[t._v("● 为计算方便，取100px为参照，所以body的宽度为6.4rem")]),t._v(" "),a("p",[t._v("● 由于设备的dip!=设计稿宽度，因此font-size=deviceWidth/6.4")]),t._v(" "),a("p",[t._v("● css尺寸为：设计稿标注尺寸/100")]),t._v(" "),a("h3",{attrs:{id:"淘宝做法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#淘宝做法"}},[t._v("#")]),t._v(" 淘宝做法")]),t._v(" "),a("p",[t._v("页面大小与设计稿保持一致。设置meta viewport中的 scale 保证页面大小与设计稿一致，使用rem")]),t._v(" "),a("p",[t._v("● meta viewport中device-width的算法为：设备的物理分辨率 / (devicePixelRatio * scale)")]),t._v(" "),a("p",[t._v("● 而每台设备的devicePixelRatio可通过 window.devicePixelRatio 获取")]),t._v(" "),a("p",[t._v("● JavaScript动态计算设置scale，包括initial-scale，maximum-scale，minimum-scale")]),t._v(" "),a("p",[t._v("● 动态设置html的font-size，为屏幕分辨率/10")]),t._v(" "),a("p",[t._v("● css尺寸为：设计稿标注尺寸/html的font-size")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("适配-flexible方案-淘宝"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"字号用px来作为单位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字号用px来作为单位"}},[t._v("#")]),t._v(" 字号用px来作为单位")]),t._v(" "),a("div",{staticClass:"language-sass extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sass"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@function")]),t._v(" px($val) {")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[t._v("    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@return")]),t._v(" $val/$basewidth*16"),a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("+")]),t._v("rem;")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable-line"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$basewidth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("640px; "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("设计稿宽度")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("px(86px);")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("原理：选择16作为因子，font-size = W / 16；比例为640/16=40;所以，页面rem换算为：设计稿px值/40;")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("640")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("640")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"postcss插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postcss插件"}},[t._v("#")]),t._v(" PostCss插件")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/postcss-px2rem",target:"_blank",rel:"noopener noreferrer"}},[t._v("postcss-px2rem"),a("OutboundLink")],1),t._v("，"),a("a",{attrs:{href:"https://juejin.im/post/5bf66282f265da61542d4338",target:"_blank",rel:"noopener noreferrer"}},[t._v("移动端postcss-px2rem配置"),a("OutboundLink")],1)]),t._v(" "),a("ol",[a("li",[t._v("安装")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install postcss-px2rem -S\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("在webpack配置中加入这个插件")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LoaderOptionsPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    vue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      postcss"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'postcss-px2rem'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'remUnit'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'baseDpr'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// remUnit: 100意思为1rem=100px，因为100比较好计算所以这里写100")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("对html的font-size进行动态设置")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" win")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    \n  \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" docEl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  \tresizeEvt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'orientationchange'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" window "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'orientationchange'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'resize'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  \t"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("recalc")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("       \n      \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" clientWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" docEl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("clientWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n      \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clientWidth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("640")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n          docEl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n          docEl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clientWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("640")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("        \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addEventListener"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n\twin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resizeEvt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" recalc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n\tdoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DOMContentLoaded'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" recalc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("使用")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#box")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 44px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                //会被postcss-px2rem插件转换，相当于0.44rem\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 24px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*no*/")]),t._v("      //如果不想用插件转换可以用"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*no*/")]),t._v("标识符\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("a",{attrs:{href:"https://juejin.im/entry/5aa09c3351882555602077ca",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何在Vue项目中使用vw实现移动端适配-----大漠"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000006140042",target:"_blank",rel:"noopener noreferrer"}},[t._v("移动端H5图片上传的那些坑"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"调试工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调试工具"}},[t._v("#")]),t._v(" 调试工具")]),t._v(" "),a("p",[t._v("VConsole，npm 地址 "),a("a",{attrs:{href:"https://www.npmjs.com/package/vconsole",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.npmjs.com/package/vconsole"),a("OutboundLink")],1),t._v("，专为手机web 页面量身设计的网页前端调试面板。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 下载")]),t._v("\nnpm install vconsole\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 然后js代码中")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VConsole "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vconsole/dist/vconsole.min.js'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//import vconsole")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" vConsole "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VConsole")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化")]),t._v("\n")])])]),a("p",[t._v("或者，直接下载js文件引入。\n注意：VConsole 只是 vConsole 的原型，而非一个已实例化的对象。所以在手动 new 实例化之前，vConsole 不会被插入到网页中。")]),t._v(" "),a("h2",{attrs:{id:"爬坑合集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#爬坑合集"}},[t._v("#")]),t._v(" 爬坑合集")]),t._v(" "),a("h3",{attrs:{id:"移动端爬坑记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端爬坑记"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"http://blog.csdn.net/crper/article/details/51902681",target:"_blank",rel:"noopener noreferrer"}},[t._v("移动端爬坑记"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("● Flex兼容")]),t._v(" "),a("p",[t._v("● IOS的H5页面scroll不流畅解决方案")]),t._v(" "),a("p",[t._v("● IOS 遮罩层较好方案")]),t._v(" "),a("p",[t._v("● IOS滚动窗滑动到底部还能弹窗拖拉的奇葩修复")]),t._v(" "),a("p",[t._v("● ios和android下触摸元素时出现半透明灰色遮罩")]),t._v(" "),a("p",[t._v("● IOS 默认输入框内阴影重置")]),t._v(" "),a("p",[t._v("● 旋转屏幕时，字体大小调整的问题")]),t._v(" "),a("p",[t._v("● 默认启用GPU渲染页面")]),t._v(" "),a("p",[t._v("● transition闪屏")]),t._v(" "),a("p",[t._v("● placeholder的颜色值改变")]),t._v(" "),a("p",[t._v("● 移动端禁止选中内容")]),t._v(" "),a("p",[t._v("● IOS禁止保存或拷贝图像")]),t._v(" "),a("p",[t._v("● 常用的移动端meta")]),t._v(" "),a("p",[t._v("● IOS中input键盘事件调用缓慢")]),t._v(" "),a("p",[t._v("● 页面高度渲染错误")]),t._v(" "),a("p",[t._v("● 怪异悬浮的表单")]),t._v(" "),a("h3",{attrs:{id:"_1px-问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1px-问题"}},[t._v("#")]),t._v(" 1px 问题")]),t._v(" "),a("p",[t._v("使用postcss-write-svg插件")]),t._v(" "),a("div",{staticClass:"language-sass extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sass"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@svg")]),t._v(" 1px-border {")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[t._v("  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2px;")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[t._v("  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@rect")]),t._v(" {")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[t._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" var(--color, black);")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[t._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("; "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".example {")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[t._v("  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid transparent;")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[t._v("  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" svg(1px-border param(--color #00b1ff)) 2 2 stretch;")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("或者")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@svg")]),t._v(" square {")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[t._v("    "),a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@rect")]),t._v(" {")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[t._v("        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" var(--color, black);")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[t._v("        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[t._v("        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#example {")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property-line"}},[t._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" white svg(square param(--color #00b1ff));")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"处理图片清晰度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理图片清晰度"}},[t._v("#")]),t._v(" 处理图片清晰度")]),t._v(" "),a("p",[t._v("用同等比例的图片在PC机上很清楚，但是手机上很模糊，是devicePixelRatio作怪，因为手机分辨率太小，想让图片在手机里显示更为清晰，必须使用2x的背景图（一般情况都是用2倍）。\n例如一个div的宽高是100，背景图必须得200，然后background-size:contain;，这样显示出来的图片就比较清晰了。")]),t._v(" "),a("h3",{attrs:{id:"调用安卓或者ios的拨号功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用安卓或者ios的拨号功能"}},[t._v("#")]),t._v(" 调用安卓或者ios的拨号功能")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tel:10010"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("10010"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"ios下页面启动时设置默认显示图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios下页面启动时设置默认显示图片"}},[t._v("#")]),t._v(" iOS下页面启动时设置默认显示图片")]),t._v(" "),a("p",[t._v("iOS下页面启动时设置默认显示图片，避免加载时的白屏。")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("apple-touch-startup-image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("start.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("h3",{attrs:{id:"某些android手机圆角失效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#某些android手机圆角失效"}},[t._v("#")]),t._v(" 某些Android手机圆角失效")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-clip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" padding-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"禁止复制、选中文本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#禁止复制、选中文本"}},[t._v("#")]),t._v(" 禁止复制、选中文本")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("Element")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-user-select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-moz-user-select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-khtml-user-select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("user-select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);