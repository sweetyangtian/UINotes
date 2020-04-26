## 小程序端
- 使用场景：
    - 保存网页截图，反馈错误
    - 招聘网站，职位详情页，生成海报长图分享职位
    - ......


- 调研：
    - [painter](https://github.com/Kujiale-Mobile/Painter)：能够相对布局，满足使用场景；（:heavy_check_mark:选用）
    - [taro-plugin-canvas](https://taro-ext.jd.com/plugin/view/5d23051670a0f46a87c9785b)：不支持动态文字内容展示，影响布局；（弃用）
    - html2canvas：依赖浏览器window对象，小程序端无此对象；（弃用）
    - [wxm2canvas](https://developers.weixin.qq.com/community/develop/doc/0002a4b2900e50e18bc72046554406)：只支持ios不支持安卓；（弃用）
    
- Painter 的优势
    - 功能全，支持文本、图片、矩形、qrcode 类型的 view 绘制
    - 布局全，支持多种布局方式，如 align（对齐方式）、rotate（旋转）
    - 支持圆角，其中图片，矩形，和整个画布支持 borderRadius 来设置圆角
    - 杠杠的性能优化，我们对网络素材图片加载实现了一套 LRU 存储机制，不用重复下载素材图片。
    - 杠杠的容错，因为某些特殊情况会导致 Canvas 绘图不完整。我们对此加入了对结果图片进行检测机制，如果绘图出错会进行重绘。

  ps: 采用 Taro + Painter实践

 ### 使用 Painter

1. 引入代码
下载painter核心代码，[https://github.com/Kujiale-Mobile/PainterCore.git ](https://github.com/Kujiale-Mobile/PainterCore.git )

2. 作为自定义组件引入
```js
"usingComponents":{
  "painter":"/components/painter/painter"
}
```
3. 组件接收 palette 字段作为画图数据的数据源, 图案数据以json形式存在，推荐使用“皮肤模板”的方法进行传递，示例代码如下：

```jsx
<painter palette="{{data}}" bind:imgOK="onImgOK" />
```