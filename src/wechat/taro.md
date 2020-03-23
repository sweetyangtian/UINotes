# Taro 爬坑

## Tips

* 样式推荐使用scss  
  原因：  
  taro-ui自定义主题需要用scss变量覆盖；  
  taro-ui本身样式采用scss ；  
  使用less无法注入全局变量，暂无解决方案；  


## 引入iconfont
1. 自行下载 Ionicons 字体图标库
2. 编写字体图标库 css
```css
@font-face {
  font-family: "iconfont";
  ...
}

// 注意：直接下载的iconfont文件包内的class为iconfont
.icon {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-wangyi:before {
  content: "\e601";
}
```
3. 在 app.js 中全局引入 iconfont.css
4. 更改微信基础库版本
在开发者工具 设置-项目设置-调试基础库 设置版本 2.2.3 以上
5. 使用 AtIcon
```jsx
<AtIcon prefixClass='icon' value='clock' size='30' color='#F00'></AtIcon>
```

## @tarojs/cli 安装、更新失败

```
npm install -g @tarojs/cli
// or
taro update self
```

卸载后重装，还是一直失败  
报错：匹配不到 xxxx 的版本  
原因：cnpm 上的版本未同步  
解决：用 yarn  或者 移除 镜像   
## 插槽slot

自定义组件时slot你不管放在什么位置，渲染时就是都是直接追加在你自定义内容的后面，而且放的位置不一样，虽然都是追加在后面，但是有些样式不生效，布局乱掉，位置乱掉。

代码举例：

```jsx
// children.jsx
<View className='children'>我是一个子组件</View>
```
```jsx
 // index.jsx
<View className='index' >
    <View className='header'>header</View>
    <View className='content'>{children}</View>
</View>
```
```jsx
// 预期渲染效果
<View className='index' >
    <View className='header'>header</View>
    <View className='content'>
        <View className='children'>我是一个子组件</View>
    </View>
</View>
// 实际渲染效果
<View className='index' >
    <View className='header'>header</View>
    <View className='content'></View>
    <View className='children'>我是一个子组件</View>
</View>
```

封装一个tabs组件：
```jsx
// index.jsx
<Tabs list={['职位', '团队']} onChange={index => setTab(index)} >
    <TabsPane index={0} current={tab}>
       /*职位组件*/ 
       <Position />
    </TabsPane>
    <TabsPane index={1} current={tab}>
        /*团队组件*/ 
      <Product productId={productId} /> 
    </TabsPane>
</Tabs>
```
```jsx
// tabs.jsx
<view className="tabs">
  <view className="tabs-header">
      这里切换当前tabs
  </view>
  <View className="tabs-body">
    <slot>这里放每个tabs的主内容</slot>
  </view>
</view>
```
```jsx
// TabsPane.jsx
<View className={`tabs-pane ${index === current ? 'active' : ''}`} >
    {children}
</View>
// scss
.tabs-pane {
    height: 0;
    overflow: hidden;
    &.active{
        height: auto;
    }
}
```

## 父组件传递class给自定义子组件
【外部样式类】【全局样式类】https://nervjs.github.io/taro/docs/component-style.html

```jsx
/* 父 MyPage.js */
export default class MyPage extends Component {
  render () {
    return <CustomComp className="red-text" />
  }
}
/* 子 CustomComp.js */
export default class CustomComp extends Component {
  static defaultProps = {
    className: ''
  }
  render () {
    return <View className={this.props.className}>这段文本的颜色不会由组件外的 class 决定</View>
  }
}
/* MyPage.scss */
.red-text {
  color: red;
}

```
解决：需要利用 externalClasses 定义段定义若干个外部样式类

```jsx
/* 父 */
export default class MyPage extends Component {
  render () {
    return <CustomComp my-class="red-text" />
  }
}
/* 子*/
export default class CustomComp extends Component {
  static externalClasses = ['my-class']
  render () {
    return <View className="my-class">这段文本的颜色由组件外的 class 决定</View>
  }
}

```



## iphonex 底部小黑条

iphoneX机型底部黑色横条会遮挡住小程序底部tabbar

![iphoneX](../images/clipboard.png)

解决方案：

1. 入口文件，获取机型信息，将手机型号存储为全局变量
```jsx
// app.jsx
import Taro, { Component } from '@tarojs/taro'
import { setGlobalData } from '@/utils/global'

class App extends Component{
    componentWillMount() {
    wx.getSystemInfo({
      success: function(res) {
        console.log('手机型号：' + res.model)
        if (res.model.includes('iPhone X')) {
          setGlobalData('isIphoneX', true)
        }
      }
    })
  }
}
```
```jsx
// global.js
const globalData = {
  isIphoneX: false
}
export function setGlobalData(key, val) {
  globalData[key] = val
}
export function getGlobalData(key) {
  return globalData[key]
}
```
3、组件高度定义为全局变量
```scss
$tabBarHeight: 100px; // 底部导航高度
$iphoneXFoot:68px; // iphoneX底部小黑条

```
4、使用全局变量控制类名
```jsx
// 获取全局变量
const isIphoneX = getGlobalData('isIphoneX')

// 设置class
<View className={`home-index  ${isIphoneX ? 'is-phonex' : ''}`}></View>

```

```scss
// index.scss
.home-index {
    padding: 0 40px 20px + $tabBarHeight;

    &.is-phonex {
        padding: 0 40px 20px + $tabBarHeight + $iphoneXFoot;
    }
}
```

## 自定义tabBar

原因：
1. app.jsx内作以下配置后，只有首页，职位页会显示tabBar，其他页面无法显示tabBar
2. 【首页】想跳转到【职位】页，只能使用 wx.switchTab，但是URL路径后不能带参数

```js
"tabBar": {
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页"
      },
      {
        "pagePath": "pages/jobs/logs",
        "text": "职位"
      }
    ]
  },
```

封装组件:
```jsx
// Tabber.jsx
import Taro, { useState } from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'
import { getGlobalData } from '@/utils/global'

const isIphoneX = getGlobalData('isIphoneX')

const tabList= [
        { 
          title: '首页', 
          iconPrefixClass: 'icon', 
          iconType: 'shouye', 
          selectedIconType: 'shouye1' 
        },
        { 
          title: '热招职位', 
          iconPrefixClass: 'icon', 
          iconType: 'rezhaozhiwei', 
          selectedIconType: 'rezhaozhiwei1' 
        }
      ]
export default function Tabber(props) {
  const [current, setCurrent] = useState(props.current || 0)
  const handleClick = val => {

    setCurrent(val)
    switch (val) {
      case 0:
        Taro.redirectTo({
          url: `/pages/index/index`
        })
        break
      case 1:
        Taro.redirectTo({
          url: `/pages/jobs/index`
        })
        break
      default:
        break
    }
  }

  return (
    <AtTabBar
      className={isIphoneX ? 'is-phonex' : ''}
      fixed
      tabList={tabList}
      fontSize={12}
      iconSize={18}
      onClick={handleClick}
      current={current}
    />
  )
}


```

```scss
// tabber样式
.at-tab-bar {
    height: $tabBarHeight;

    &.is-phonex {
        padding-bottom: $iphoneXFoot !important;
        background: #FFF !important;
    }
}
```

引用了TabBar的页面，由于底部被TabBar遮挡，需要多加一个底部padding

```scss
// index.scss
.home-index {
    padding-bottom: $tabBarHeight;
}
```