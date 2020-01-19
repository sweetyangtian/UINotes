# ESLint 

ESLint 是在 ECMAScript/JavaScript 代码中识别和报告模式匹配的工具，它的目标是保证代码的一致性和避免错误。

【官方网站】：[eslint.org/](https://eslint.org/)  【中文网站】：[eslint.cn/](https://eslint.cn/)

>先决条件：Node.js (>=6.14), npm version 3+。
```
npm install eslint --save-dev

eslint --init
```

#### 配置ESLint的两种主要的方法：

1、配置注释 - 使用JavaScript注释将配置信息直接嵌入到文件中。

2、配置文件 - 使用下面任一的文件来为全部的目录和它的子目录指定配置信息。

&emsp;&emsp;A、<b>javascript：使用.eslintrc.js文件并导出一个包含配置的对象。</b>  
&emsp;&emsp;B、YAML：.eslintrc.yaml或者.eslintrc.   
&emsp;&emsp;C、yml JSON：.eslintrc.json，并且此文件允许使用JS形式的注释   
&emsp;&emsp;D、废弃的用法：.eslintrc，此文件可以是JSON或者YAML   
&emsp;&emsp;E、package.json：在package.json文件中创建eslintConfig属性，所有的配置包含在此属性中。

Ps： 这些文件的优先级则是按照以上出现的顺序（.eslintrc.js > .eslintrc.yaml > .eslintrc.yml > .eslintrc.json > .eslintrc > package.json）。

使用官方推荐的 .eslintrc.js 格式就好。

#### 规则的错误等级有三种：

- "off" 或者 0：关闭规则。
- "warn" 或者 1：打开规则，并且作为一个警告（不影响exit code）。
- "error" 或者 2：打开规则，并且作为一个错误（exit code将会是1）。

#### 配置
- <b>插件</b>

在配置文件里配置插件时，可以使用 plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀。

支持 JSX 语法并不等同于支持 React，官方推荐使用 [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)。

- <b>语言选项</b>

支持 ES6 语法并不意味着同时支持新的 ES6 全局变量或类型:  
&emsp;&emsp;对于 ES6 语法，使用 { "parserOptions": { "ecmaVersion": 6 } }；  
&emsp;&emsp;对于新的 ES6 全局变量，使用 { "env":{ "es6": true } }

- <b>解析器</b>

ESLint 默认使用Espree作为其解析器，与 ESLint 兼容的解析器有：  
    &emsp;&emsp; - [Esprima](https://www.npmjs.com/package/esprima)  
    &emsp;&emsp; - [Babel-ESLint](https://www.npmjs.com/package/babel-eslint) - 一个对Babel解析器的包装，使其能够与 ESLint 兼容。  
    &emsp;&emsp; - [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) - 将 TypeScript 转换成与 estree 兼容的形式，以便在ESLint中使用。  



.eslintrc.js 文件示例：
```js
{
    parser: "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
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