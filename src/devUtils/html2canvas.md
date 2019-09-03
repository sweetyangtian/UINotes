# html2canvas

实现功能：HTML页面保存为图片，常见于H5活动页的结尾页分享。
官方github地址：[https://github.com/niklasvh/html2canvas](https://github.com/niklasvh/html2canvas)

第一步：html转为canvas

```js
html2canvas(document.body).then(function(canvas) {
    document.body.appendChild(canvas);
});
```

第二步：canvas转image

转换方法有两种：

方法1：基于原生canvas的toDataURL方法将canvas输出为data: URI类型的图片地址，再将该图片地址赋值给image元素的src属性
 
方法2：借助第三方库[Canvas2Image.js](https://github.com/hongru/canvas2image)，调用其convertToImage方法

```js
Canvas2Image.convertToImage(canvasObj, width, height, type)
```

## 图片的清晰度优化方案
:::tip 
最终图片的清晰度取决于第一步中html转换成的canvas的清晰度。
:::
其基本原理为：
将canvas的属性width和height属性放大为2倍，并设置style 控制页面显示的大小

    <canvas width="320" height="180" style="width:160px;height:90px;"></canvas>











