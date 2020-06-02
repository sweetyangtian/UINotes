## Html2Canvas

- 实现功能：   
HTML页面保存为图片，常见于H5活动页分享。
官方github地址：[https://github.com/niklasvh/html2canvas](https://github.com/niklasvh/html2canvas)

- 原理：   
将DOM改写为canvas，然后利用canvas的toDataURL方法实现将DOM输出为包含图片展示的data url，将URL赋值给img标签src即可

- 注意：
    - 适用于web端、H5等有dom结构的页面
    - 注意图片元素加载完成后再调用 html2canvas
    - 浏览器有滚动条时，或者元素需要定位时，需要指定截图的起始位置
    - 图片中有链接地址时，设置useCORS属性可保证图片的加载

- 重要参数：

| 参数          | 默认值        | 描述  |
| ------------- |:-------------:| -----:|
| useCORS       | false         |    用来设置是否允许使用跨域的图片进行访问 |
| x	            | element x-offset	| 裁剪画布x坐标
| y	            | element y-offset	| 裁剪画布y坐标
| scrollX	    | element scrollX	| 渲染元素时使用的x滚动位置
| scrollY	    | element scrollY	| 渲染元素时使用的y滚动位置
| windowWidth	| Window.innerWidth	| 渲染元素时使用的窗口宽度
| windowHeight	| Window.innerHeght	| 染时使用的窗口高度 Element

### :chestnut: web端整个页面截图

```js
html2canvas(document.body, {
    useCORS: true,
    width: window.screen.availWidth,
    height: window.screen.availHeight,
    windowWidth: document.body.scrollWidth,
    windowHeight: document.body.scrollHeight,
    x:0,
    y: window.scrollY
}).then(canvas => {
    const url = canvas.toDataURL(); // canvas转url，赋值给image元素的src属性
});
```


<!-- ### :chestnut: H5页面截图

简单模拟，存在小问题，H5页面的时候使用定位占据整个窗口宽高即可 -->
<!-- <ClientOnly>
<ShareOne/>
</ClientOnly> -->


