
良好的代码规范有助于项目的维护，为了防止一些不规范的代码 commit并push到远端,我们可以在git命令执行前用一些钩子来检测并阻止。现在主要有两种git钩子插件：husky（jquery与next.js都在用），pre-commit(antd在用)。

## 代码规范检测工具

### ESLint

Eslint 提供了 ECMAScript/JavaScript 规范的代码校验，我们可以根据团队的代码风格进行配置，也可以使用开源的配置方案，本文会采用 [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) 来配置。

eslint-config-airbnb默认导出包含所有的ESLint规则，包括ECMAScript 6+和React。它默认包含eslint，eslint-plugin-import，eslint-plugin-react，eslint-plugin-react-hooks，和eslint-plugin-jsx-a11y。

#### 配置
- <b>插件</b>  
[eslint-plugin-html](https://www.npmjs.com/package/eslint-plugin-html)：html检查  
[eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) ：校验 React   
[eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)：校验 import/export 语法，防止文件路径错误及导出名称的问题
[eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)：提供 jsx 元素可访问性校验  
[eslint-plugin-flowtype](https://www.npmjs.com/package/eslint-plugin-flowtype)：js 静态类型检查工具。  
[eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)：根据 Hooks API 校验 Hooks 的使用  

- <b>语言选项</b>  
&emsp;&emsp;对于 ES6 语法，使用 { "parserOptions": { "ecmaVersion": 6 } }；  
&emsp;&emsp;对于新的 ES6 全局变量，使用 { "env":{ "es6": true } }

- <b>解析器</b>  
    &emsp;&emsp;[Babel-ESLint](https://www.npmjs.com/package/babel-eslint) - 一个对Babel解析器的包装，使其能够与 ESLint 兼容。   


.eslintrc.js 文件示例：
```js
{
    extends: ["airbnb", "eslint:recommended"],
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            "jsx": true
        }
    },
    plugins: ['react-hooks'],
    rules: {
        "semi": "error"
    }
}
```

```json
//  package.json
{
    "scripts":{
        "eslint": "eslint --fix --ext .js,.jsx src"
    }
}
```
### Stylelint

比较流行且开源的CSS lint方案：csslint、SCSS-Lint、Stylelint。

Stylelint优势：
其支持 Less、Sass 这类预处理器。
团队使用less在社区活跃度上，有非常多的第三方插件。
在Facebook，Github，WordPress 等公司得到实践，能够覆盖很多场景。

```json
//  package.json
{
    "scripts":{
        "stylelint": "stylelint \"./src/**/*.{css,less}\" --fix"
    }
}
```


## 代码风格统一工具

### Prettier

Prettier是一个能够完全统一你和同事代码风格的利器，能保证代码的可读性。支持js,jsx,css风格统一。

安装prettier
```
npm i -D prettier
```
配合ESLint检测代码风格,安装插件：

```
npm i -D eslint-plugin-prettier
```
eslint-plugin-prettier插件会调用prettier对代码进行风格检查，原理是先使用prettier对你的代码进行格式化，然后与格式化之前的代码进行对比，如果过出现了不一致，这个地方就会被prettier进行标记。
接下来，我们需要在rules中添加，"prettier/prettier": "error"，表示被prettier标记的地方抛出错误信息。

```js
//.eslintrc.js
{
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

```json
// package.json
{
    "scripts":{
        "format": "prettier --write \"./src/**/*.{js,jsx,json}\""
    }
}
```


## 代码提交前检测工具

### husky

husky能够防止不规范代码被commit、push、merge等等。

下载工具:
```
npm install husky --save-dev
```
或
```
yarn add husky --dev
```

```json
// package.json
    {
        "husky": {
            "hooks": {
                "pre-commit": "npm test",
                "pre-push": "npm test",
                "...": "..."
            }
        }
    }
```


## 终版配置文件

### .eslintrc.js

```js
module.exports = {
    extends: ['react-app', 'eslint:recommended'],
    parser: "babel-eslint", // 解析器,默认使用Espree解析器
    parserOptions: {
        ecmaVersion: 6, //ES的版本，默认为5
        sourceType: 'module', //指定源代码存在的位置，script | module，默认为script。
        ecmaFeatures: {  //指定要使用其他那些语言对象
            'jsx': true 
        } 
    },

    plugins: ['prettier', 'react-hooks'],

    rules: {
        'prettier/prettier': 'warn', // 对于prettier报错进行warn提醒
        'arrow-parens': ['error', 'as-needed'], // 箭头函数参数只有一个时，可以省略参数的括号，否则error提示
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 生产环境中不允许使用
        'no-console': 'off', // 允许使用console
        'react/jsx-no-target-blank': 'off', // a链接允许直接使用_blank
        'jsx-a11y/anchor-has-content': 'off',
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        'jsx-a11y/anchor-is-valid': 'off'
    }
}

```

### .stylelintrc

```js
{
    "extends": ["stylelint-config-standard", "stylelint-config-recess-order"],
    "ignoreFiles": ["src/**/*.jsx"],
    "rules": {
        "indentation": 4,

        "number-leading-zero": "never",

        "string-quotes": "double",

        "declaration-block-trailing-semicolon": "always",

        "length-zero-no-unit": true,

        "declaration-empty-line-before": [
            "never",
            { ignore: [ "after-declaration" ] }
        ],
        "rule-empty-line-before": [
            "always",
            { except: [ "after-single-line-comment", "first-nested" ] }
        ],
        "block-closing-brace-empty-line-before": [ "never" ],
        "at-rule-empty-line-before": [
            "always",
            { ignore: [ "inside-block", "blockless-after-same-name-blockless" ] }
        ],
        "max-empty-lines": 1,
        "no-eol-whitespace": true,
        "no-missing-end-of-source-newline": true,

        "unit-case": "lower",
        "color-hex-case": "upper",
        "value-keyword-case": "lower",
        "function-name-case": "lower",
        "property-case": "lower",
        "at-rule-name-case": "lower",
        "selector-pseudo-class-case": "lower",
        "selector-pseudo-element-case": "lower",
        "selector-type-case": "lower",
        "media-feature-name-case": "lower",

        "block-opening-brace-space-before": "always",
        "comment-whitespace-inside": "always",
        "declaration-colon-space-after": "always",
        "declaration-colon-space-before": "never",
        "declaration-block-semicolon-space-before": "never",
        "function-comma-space-after": "always",
        "selector-combinator-space-before": "always",
        "selector-combinator-space-after": "always",
        "selector-list-comma-space-before": "never",
        "selector-descendant-combinator-no-non-space": true,
        "value-list-comma-space-after": "always",
        "value-list-comma-space-before": "never",
        "media-feature-colon-space-after": "always",
        "media-feature-colon-space-before": "never",
        "no-descending-specificity": null
    }
}

```

### .prettierrc.js

```js
module.exports = {
    printWidth: 150, // 设置prettier单行输出（不折行）（最大）长度

    tabWidth: 4, // 设置工具每一个水平缩进的空格数

    useTabs: false, // 使用tab（制表位）缩进而非空格

    semi: true, // 在语句末尾添加分号

    singleQuote: true, // 使用单引号而非双引号

    trailingComma: 'none', // 在任何可能的多行中输入尾逗号

    bracketSpacing: true, // 在对象字面量声明所使用的的花括号后（{）和前（}）输出空格

    arrowParens: 'avoid', // 为单行箭头函数的参数添加圆括号，参数个数为1时可以省略圆括号

    jsxBracketSameLine: true, // 在多行JSX元素最后一行的末尾添加 > 而使 > 单独一行（不适用于自闭和元素）

    rangeStart: 0, // 只格式化某个文件的一部分

    rangeEnd: Infinity, // 只格式化某个文件的一部分

    filepath: 'none', // 指定文件的输入路径，这将被用于解析器参照

    requirePragma: false, // (v1.7.0+) Prettier可以严格按照按照文件顶部的一些特殊的注释格式化代码，这些注释称为“require pragma”(必须杂注)

    insertPragma: false, //  (v1.8.0+) Prettier可以在文件的顶部插入一个 @format的特殊注释，以表明改文件已经被Prettier格式化过了。

    proseWrap: 'preserve', // (v1.8.2+)

    jsxBracketSameLine: false, // jsx闭合标签在同一行
}

```

### package.json

```json
{
    "scripts": {
        "format": "prettier --write \"./src/**/*.{js,jsx,json}\"",
        "lint": "run-p eslint stylelint", // 需要下载 npm-run-all 插件
        "eslint": "eslint --fix --ext .js,.jsx src",
        "stylelint": "stylelint \"./src/**/*.{css,less}\" --fix"
    },
    "husky": {
        "hooks": {
            "pre-commit": "npm run format && npm run lint && git add ."
        }
    },
    "devDependencies": {
        "babel-eslint": "^10.0.3",
        "eslint": "^6.8.0",
        "eslint-config-react-app": "^5.1.0",
        "eslint-plugin-flowtype": "^4.6.0",
        "eslint-plugin-html": "^6.0.0",
        "eslint-plugin-import": "^2.20.0",
        "eslint-plugin-jsx-a11y": "^6.2.3",
        "eslint-plugin-prettier": "^3.1.2",
        "eslint-plugin-react": "^7.18.0",
        "eslint-plugin-react-hooks": "^2.3.0",
        "eslint-friendly-formatter": "^4.0.1",
        
        "prettier": "^1.19.1",
        "stylelint": "^13.0.0",
        "stylelint-config-recess-order": "^2.0.3",
        "stylelint-config-standard": "^19.0.0",
        ...
    }
    
}
```

