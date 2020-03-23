(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{82:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h2",{attrs:{id:"eslint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#eslint","aria-hidden":"true"}},[t._v("#")]),t._v(" ESLint")]),n("p",[t._v("ESLint 是在 ECMAScript/JavaScript 代码中识别和报告模式匹配的工具，它的目标是保证代码的一致性和避免错误。官方网站："),n("a",{attrs:{href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint.org/")]),t._v("   ，中文网站："),n("a",{attrs:{href:"https://eslint.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint.cn/")])]),n("p",[n("b",[t._v("先决条件：Node.js (>=6.14), npm version 3+。")])]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("npm install eslint --save-dev\n\neslint --init\n")])]),n("h3",{attrs:{id:"配置eslint的两种主要的方法："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置eslint的两种主要的方法：","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置ESLint的两种主要的方法：")]),n("p",[t._v("1、配置注释 - 使用JavaScript注释将配置信息直接嵌入到文件中。")]),n("p",[t._v("2、配置文件 - 使用下面任一的文件来为全部的目录和它的子目录指定配置信息。")]),n("p",[t._v("  A、"),n("b",[t._v("javascript：使用.eslintrc.js文件并导出一个包含配置的对象。")]),n("br"),t._v("\n  B、YAML：.eslintrc.yaml或者.eslintrc. "),n("br"),t._v("\n  C、yml JSON：.eslintrc.json，并且此文件允许使用JS形式的注释 "),n("br"),t._v("\n  D、废弃的用法：.eslintrc，此文件可以是JSON或者YAML "),n("br"),t._v("\n  E、package.json：在package.json文件中创建eslintConfig属性，所有的配置包含在此属性中。")]),n("p",[t._v("Ps： 这些文件的优先级则是按照以上出现的顺序（.eslintrc.js > .eslintrc.yaml > .eslintrc.yml > .eslintrc.json > .eslintrc > package.json）。")]),n("p",[t._v("使用官方推荐的 .eslintrc.js 格式就好。")]),n("h3",{attrs:{id:"规则的错误等级有三种："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#规则的错误等级有三种：","aria-hidden":"true"}},[t._v("#")]),t._v(" 规则的错误等级有三种：")]),n("ul",[n("li",[t._v('"off" 或者 0：关闭规则。')]),n("li",[t._v('"warn" 或者 1：打开规则，并且作为一个警告（不影响exit code）。')]),n("li",[t._v('"error" 或者 2：打开规则，并且作为一个错误（exit code将会是1）。')])]),n("h3",{attrs:{id:"配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置文件")]),n("ul",[n("li",[n("b",[t._v("插件")])])]),n("p",[t._v("在配置文件里配置插件时，可以使用 plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀。")]),n("p",[t._v("支持 JSX 语法并不等同于支持 React，官方推荐使用 "),n("a",{attrs:{href:"https://github.com/yannickcr/eslint-plugin-react",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-plugin-react")]),t._v("。")]),n("ul",[n("li",[n("b",[t._v("语言选项")])])]),n("p",[t._v("支持 ES6 语法并不意味着同时支持新的 ES6 全局变量或类型:"),n("br"),t._v('\n  对于 ES6 语法，使用 { "parserOptions": { "ecmaVersion": 6 } }；'),n("br"),t._v('\n  对于新的 ES6 全局变量，使用 { "env":{ "es6": true } }')]),n("ul",[n("li",[n("b",[t._v("解析器")])])]),n("p",[t._v("ESLint 默认使用Espree作为其解析器，与 ESLint 兼容的解析器有："),n("br"),t._v("\n   - "),n("a",{attrs:{href:"https://www.npmjs.com/package/esprima",target:"_blank",rel:"noopener noreferrer"}},[t._v("Esprima")]),n("br"),t._v("\n   - "),n("a",{attrs:{href:"https://www.npmjs.com/package/babel-eslint",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel-ESLint")]),t._v(" - 一个对Babel解析器的包装，使其能够与 ESLint 兼容。"),n("br"),t._v("\n   - "),n("a",{attrs:{href:"https://www.npmjs.com/package/@typescript-eslint/parser",target:"_blank",rel:"noopener noreferrer"}},[t._v("@typescript-eslint/parser")]),t._v(" - 将 TypeScript 转换成与 estree 兼容的形式，以便在ESLint中使用。")]),n("p",[t._v(".eslintrc.js 文件示例：")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    parser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-eslint"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"parserOptions"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ecmaVersion"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sourceType"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ecmaFeatures"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jsx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rules"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"semi"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  package.json")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"eslint"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint --fix --ext .js,.jsx src"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("h3",{attrs:{id:"项目应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目应用","aria-hidden":"true"}},[t._v("#")]),t._v(" 项目应用")]),n("p",[t._v("Eslint 提供了 ECMAScript/JavaScript 规范的代码校验，我们可以根据团队的代码风格进行配置，也可以使用开源的配置方案，例如 "),n("a",{attrs:{href:"https://www.npmjs.com/package/eslint-config-airbnb",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-config-airbnb")]),t._v(" 来配置。")]),n("p",[t._v("eslint-config-airbnb 默认包含eslint，eslint-plugin-react，eslint-plugin-import，eslint-plugin-jsx-a11y，和eslint-plugin-react-hooks。")]),n("p",[t._v("推荐以下插件："),n("br"),n("a",{attrs:{href:"https://www.npmjs.com/package/eslint-plugin-html",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-plugin-html")]),t._v("：校验 html"),n("br"),n("a",{attrs:{href:"https://github.com/yannickcr/eslint-plugin-react",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-plugin-react")]),t._v(" ：校验 React"),n("br"),n("a",{attrs:{href:"https://www.npmjs.com/package/eslint-plugin-import",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-plugin-import")]),t._v("：校验 import/export 语法，防止文件路径错误及导出名称的问题"),n("br"),n("a",{attrs:{href:"https://www.npmjs.com/package/eslint-plugin-jsx-a11y",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-plugin-jsx-a11y")]),t._v("：提供 jsx 元素可访问性校验"),n("br"),n("a",{attrs:{href:"https://www.npmjs.com/package/eslint-plugin-flowtype",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-plugin-flowtype")]),t._v("：js 静态类型检查工具。"),n("br"),n("a",{attrs:{href:"https://www.npmjs.com/package/eslint-plugin-react-hooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-plugin-react-hooks")]),t._v("：根据 Hooks API 校验 Hooks 的使用")]),n("p",[t._v("解析器选择 "),n("a",{attrs:{href:"https://www.npmjs.com/package/babel-eslint",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel-ESLint")]),t._v("。")]),n("p",[t._v("文件示例：")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .eslintrc.js ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"airbnb"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint:recommended"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用开源的配置方案 airbnb")]),t._v("\n    parser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-eslint"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    parserOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ecmaVersion"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        sourceType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        ecmaFeatures"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jsx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-hooks'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    rules"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"semi"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  package.json")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"eslint"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint --fix --ext .js,.jsx src"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("h2",{attrs:{id:"stylelint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#stylelint","aria-hidden":"true"}},[t._v("#")]),t._v(" Stylelint")]),n("p",[t._v("比较流行且开源的CSS lint方案：csslint、SCSS-Lint、Stylelint。")]),n("p",[t._v("Stylelint优势：")]),n("ul",[n("li",[t._v("其支持 Less、Sass 这类预处理器。")]),n("li",[t._v("团队使用less在社区活跃度上，有非常多的第三方插件。")]),n("li",[t._v("在Facebook，Github，WordPress 等公司得到实践，能够覆盖很多场景。")])]),n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  package.json")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"stylelint"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stylelint \\"./src/**/*.{css,less}\\" --fix"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("h2",{attrs:{id:"prettier"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prettier","aria-hidden":"true"}},[t._v("#")]),t._v(" Prettier")]),n("p",[t._v("Prettier是一个代码风格统一工具，支持js,jsx,css风格统一。")]),n("p",[t._v("安装：")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("npm i -D prettier\n")])]),n("p",[t._v("配合ESLint检测代码风格，安装插件：")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("npm i -D eslint-plugin-prettier\n")])]),n("p",[t._v('eslint-plugin-prettier 插件会调用prettier对代码进行风格检查，原理是先使用prettier对你的代码进行格式化，然后与格式化之前的代码进行对比，如果过出现了不一致，这个地方就会被prettier进行标记。\n接下来，我们需要在rules中添加，"prettier/prettier": "error"，表示被prettier标记的地方抛出错误信息。')]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//.eslintrc.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugins"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prettier"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rules"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prettier/prettier"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"format"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prettier --write \\"./src/**/*.{js,jsx,json}\\""')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("h2",{attrs:{id:"husky"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#husky","aria-hidden":"true"}},[t._v("#")]),t._v(" husky")]),n("p",[t._v("husky是一个代码提交前的检测工具，能够防止不规范代码被commit、push、merge等等。")]),n("p",[t._v("良好的代码规范有助于项目的维护，为了防止一些不规范的代码 commit并push到远端,我们可以在git命令执行前用一些钩子来检测并阻止。现在主要有两种git钩子插件：husky（jquery与next.js都在用），pre-commit(antd在用)。")]),n("p",[t._v("下载：")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("npm install husky --save-dev\n")])]),n("p",[t._v("或")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("yarn add husky --dev\n")])]),n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"husky"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hooks"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pre-commit"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm test"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pre-push"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm test"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"..."')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);