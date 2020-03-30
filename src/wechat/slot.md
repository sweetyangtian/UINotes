## 插槽slot

自定义组件时slot你不管放在什么位置，渲染时就是都是直接追加在你自定义内容的后面，而且放的位置不一样，虽然都是追加在后面，但是有些样式不生效，布局乱掉，位置乱掉。

代码举例：

```jsx
// children.jsx
<View className='children'>我是一个子组件</View>

 // parent.jsx
<View className='parent' >
    <View className='header'>header</View>
    <View className='content'>
      <children/>
    </View>
</View>
```
小程序渲染结构：
```jsx
// 预期渲染效果
<View className='parent' >
    <View className='header'>header</View>
    <View className='content'>
        <View className='children'>我是一个子组件</View>
    </View>
</View>
// 实际渲染效果
<View className='parent' >
    <View className='header'>header</View>
    <View className='content'></View>
    <View className='children'>我是一个子组件</View>
</View>
```

封装一个tabs组件：
```jsx
// 使用
// index.jsx
<Tabs list={['职位', '团队']} onChange={index => setTab(index)} >
    <TabsPane index={0} current={tab}>
       <Position />
    </TabsPane>
    <TabsPane index={1} current={tab}>
      <Product /> 
    </TabsPane>
</Tabs>
```
```jsx
// tabs.jsx
<view className="tabs">
  <view className="tabs-header">
      这里切换当前tabs，执行onChange
  </view>
  <View className="tabs-body">
    <slot>这里放TabsPane * n </slot>
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
    display:block;
    &.active{
        display:none;
    }
}
```

好了，思路清晰，代码很快写好了，美滋滋一看效果，凉凉~~    
小朋友~~ 你是否有许多问号 ~~

你预想的TabsPane结构是这样的：

```jsx
<View className="tabs-pane active" >
    <Position />
</View>
<View className="tabs-pane" >
    <Product /> 
</View>
```
实际渲染结构：

```jsx
<View className="tabs-pane active" ></View>
<Position />
<View className="tabs-pane" ></View>
<Product /> 
```
解决办法：
```scss
// scss
.tabs-pane {
    height: 0;
    overflow: hidden;
    &.active{
        height: auto;
    }
}
```