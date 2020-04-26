(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{396:function(t,s,a){"use strict";a.r(s);var n=a(18),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-eslint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-eslint"}},[t._v("#")]),t._v(" 1. ESLint")]),t._v(" "),a("p",[t._v("ESLint 是在 ECMAScript/JavaScript 代码中识别和报告模式匹配的工具，它的目标是保证代码的一致性和避免错误。官方网站："),a("a",{attrs:{href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint.org/"),a("OutboundLink")],1),t._v("   ，中文网站："),a("a",{attrs:{href:"https://eslint.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint.cn/"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("b",[t._v("先决条件：Node.js (>=6.14), npm version 3+。")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install eslint --save-dev\n\neslint --init\n")])])]),a("h4",{attrs:{id:"配置eslint的两种主要的方法："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置eslint的两种主要的方法："}},[t._v("#")]),t._v(" 配置ESLint的两种主要的方法：")]),t._v(" "),a("p",[t._v("1、配置注释 - 使用JavaScript注释将配置信息直接嵌入到文件中。")]),t._v(" "),a("p",[t._v("2、配置文件 - 使用下面任一的文件来为全部的目录和它的子目录指定配置信息。")]),t._v(" "),a("p",[t._v("  A、"),a("b",[t._v("javascript：使用.eslintrc.js文件并导出一个包含配置的对象。")]),a("br"),t._v("\n  B、YAML：.eslintrc.yaml或者.eslintrc. "),a("br"),t._v("\n  C、yml JSON：.eslintrc.json，并且此文件允许使用JS形式的注释 "),a("br"),t._v("\n  D、废弃的用法：.eslintrc，此文件可以是JSON或者YAML "),a("br"),t._v("\n  E、package.json：在package.json文件中创建eslintConfig属性，所有的配置包含在此属性中。")]),t._v(" "),a("p",[t._v("Ps： 这些文件的优先级则是按照以上出现的顺序（.eslintrc.js > .eslintrc.yaml > .eslintrc.yml > .eslintrc.json > .eslintrc > package.json）。")]),t._v(" "),a("p",[t._v("使用官方推荐的 .eslintrc.js 格式就好。")]),t._v(" "),a("h4",{attrs:{id:"规则的错误等级有三种："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规则的错误等级有三种："}},[t._v("#")]),t._v(" 规则的错误等级有三种：")]),t._v(" "),a("ul",[a("li",[t._v('"off" 或者 0：关闭规则。')]),t._v(" "),a("li",[t._v('"warn" 或者 1：打开规则，并且作为一个警告（不影响exit code）。')]),t._v(" "),a("li",[t._v('"error" 或者 2：打开规则，并且作为一个错误（exit code将会是1）。')])]),t._v(" "),a("h4",{attrs:{id:"配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),a("ul",[a("li",[a("b",[t._v("插件")])])]),t._v(" "),a("p",[t._v("在配置文件里配置插件时，可以使用 plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀。")]),t._v(" "),a("p",[t._v("支持 JSX 语法并不等同于支持 React，官方推荐使用 "),a("a",{attrs:{href:"https://github.com/yannickcr/eslint-plugin-react",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-plugin-react"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("ul",[a("li",[a("b",[t._v("语言选项")])])]),t._v(" "),a("p",[t._v("支持 ES6 语法并不意味着同时支持新的 ES6 全局变量或类型:"),a("br"),t._v('\n  对于 ES6 语法，使用 { "parserOptions": { "ecmaVersion": 6 } }；'),a("br"),t._v('\n  对于新的 ES6 全局变量，使用 { "env":{ "es6": true } }')]),t._v(" "),a("ul",[a("li",[a("b",[t._v("解析器")])])]),t._v(" "),a("p",[t._v("ESLint 默认使用Espree作为其解析器，与 ESLint 兼容的解析器有："),a("br"),t._v("\n   - "),a("a",{attrs:{href:"https://www.npmjs.com/package/esprima",target:"_blank",rel:"noopener noreferrer"}},[t._v("Esprima"),a("OutboundLink")],1),a("br"),t._v("\n   - "),a("a",{attrs:{href:"https://www.npmjs.com/package/babel-eslint",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel-ESLint"),a("OutboundLink")],1),t._v(" - 一个对Babel解析器的包装，使其能够与 ESLint 兼容。"),a("br"),t._v("\n   - "),a("a",{attrs:{href:"https://www.npmjs.com/package/@typescript-eslint/parser",target:"_blank",rel:"noopener noreferrer"}},[t._v("@typescript-eslint/parser"),a("OutboundLink")],1),t._v(" - 将 TypeScript 转换成与 estree 兼容的形式，以便在ESLint中使用。")]),t._v(" "),a("p",[t._v(".eslintrc.js 文件示例：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    parser"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-eslint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"parserOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ecmaVersion"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sourceType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ecmaFeatures"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jsx"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"semi"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  package.json")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"eslint"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint --fix --ext .js,.jsx src"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"项目应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目应用"}},[t._v("#")]),t._v(" 项目应用")]),t._v(" "),a("p",[t._v("Eslint 提供了 ECMAScript/JavaScript 规范的代码校验，我们可以根据团队的代码风格进行配置，也可以使用开源的配置方案，例如 "),a("a",{attrs:{href:"https://www.npmjs.com/package/eslint-config-airbnb",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-config-airbnb"),a("OutboundLink")],1),t._v(" 来配置。")]),t._v(" "),a("p",[t._v("eslint-config-airbnb 默认包含eslint，eslint-plugin-react，eslint-plugin-import，eslint-plugin-jsx-a11y，和eslint-plugin-react-hooks。")]),t._v(" "),a("p",[t._v("推荐以下插件："),a("br"),t._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/eslint-plugin-html",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-plugin-html"),a("OutboundLink")],1),t._v("：校验 html"),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/yannickcr/eslint-plugin-react",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-plugin-react"),a("OutboundLink")],1),t._v(" ：校验 React"),a("br"),t._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/eslint-plugin-import",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-plugin-import"),a("OutboundLink")],1),t._v("：校验 import/export 语法，防止文件路径错误及导出名称的问题"),a("br"),t._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/eslint-plugin-jsx-a11y",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-plugin-jsx-a11y"),a("OutboundLink")],1),t._v("：提供 jsx 元素可访问性校验"),a("br"),t._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/eslint-plugin-flowtype",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-plugin-flowtype"),a("OutboundLink")],1),t._v("：js 静态类型检查工具。"),a("br"),t._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/eslint-plugin-react-hooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-plugin-react-hooks"),a("OutboundLink")],1),t._v("：根据 Hooks API 校验 Hooks 的使用")]),t._v(" "),a("p",[t._v("解析器选择 "),a("a",{attrs:{href:"https://www.npmjs.com/package/babel-eslint",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel-ESLint"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("文件示例：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .eslintrc.js ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"airbnb"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint:recommended"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用开源的配置方案 airbnb")]),t._v("\n    parser"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-eslint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    parserOptions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ecmaVersion"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        sourceType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        ecmaFeatures"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jsx"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-hooks'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"semi"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  package.json")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"eslint"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint --fix --ext .js,.jsx src"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_2-stylelint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-stylelint"}},[t._v("#")]),t._v(" 2. Stylelint")]),t._v(" "),a("p",[t._v("比较流行且开源的CSS lint方案：csslint、SCSS-Lint、Stylelint。")]),t._v(" "),a("p",[t._v("Stylelint优势：")]),t._v(" "),a("ul",[a("li",[t._v("其支持 Less、Sass 这类预处理器。")]),t._v(" "),a("li",[t._v("团队使用less在社区活跃度上，有非常多的第三方插件。")]),t._v(" "),a("li",[t._v("在Facebook，Github，WordPress 等公司得到实践，能够覆盖很多场景。")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  package.json")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"stylelint"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stylelint \\"./src/**/*.{css,less}\\" --fix"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_3-prettier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-prettier"}},[t._v("#")]),t._v(" 3. Prettier")]),t._v(" "),a("p",[t._v("Prettier是一个代码风格统一工具，支持js,jsx,css风格统一。")]),t._v(" "),a("p",[t._v("安装：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm i -D prettier\n")])])]),a("p",[t._v("配合ESLint检测代码风格，安装插件：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm i -D eslint-plugin-prettier\n")])])]),a("p",[t._v('eslint-plugin-prettier 插件会调用prettier对代码进行风格检查，原理是先使用prettier对你的代码进行格式化，然后与格式化之前的代码进行对比，如果过出现了不一致，这个地方就会被prettier进行标记。\n接下来，我们需要在rules中添加，"prettier/prettier": "error"，表示被prettier标记的地方抛出错误信息。')]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//.eslintrc.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prettier"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prettier/prettier"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"format"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prettier --write \\"./src/**/*.{js,jsx,json}\\""')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_4-husky"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-husky"}},[t._v("#")]),t._v(" 4. husky")]),t._v(" "),a("p",[t._v("husky是一个代码提交前的检测工具，能够防止不规范代码被commit、push、merge等等。")]),t._v(" "),a("p",[t._v("良好的代码规范有助于项目的维护，为了防止一些不规范的代码 commit并push到远端,我们可以在git命令执行前用一些钩子来检测并阻止。现在主要有两种git钩子插件：husky（jquery与next.js都在用），pre-commit(antd在用)。")]),t._v(" "),a("p",[t._v("下载：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install husky --save-dev\n")])])]),a("p",[t._v("或")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("yarn add husky --dev\n")])])]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"husky"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hooks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pre-commit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pre-push"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"..."')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);