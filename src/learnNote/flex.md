## 5 种常见 flex 布局

[https://juejin.im/post/5a1d0198f265da43052e5c52](https://juejin.im/post/5a1d0198f265da43052e5c52)
```html
<!-- 经典的上-中-下布局 -->
<body>
  	<header>HEADER</header>
  	<article>CONTENT</article>
  	<footer>FOOTER</footer>
</body>
body {  min-height: 100vh;  display: flex;  flex-direction: column;}
article {  flex: auto;}
```
```html
<!-- 上-中-下 header不滚动 -->
<body>
  <header>HEADER</header>
  <article>CONTENT</article>
  <footer>FOOTER</footer>
</body>
body { min-height: 100vh; display: flex; flex-direction: column; padding-top: 60px; }
header { height: 60px; position: fixed; top: 0; left: 0; right: 0; padding: 0; }
article { flex: auto; height: 1000px; }
```

```html
<!-- 中左宽固定 -->
<body>
  <header>HEADER</header>
  <div class="content">
    <aside>ASIDE</aside>
 	  <article>CONTENT</article>
  </div>
  <footer>FOOTER</footer>
</body>
body { min-height: 100vh; display: flex; flex-direction: column; }
 .content { flex: auto; display: flex; }
.content article { flex: auto; }
```
```html
<body>
  <aside>ASIDE</aside>
  <div class="content">
    <header>HEADER</header>
 	  <article>CONTENT</article>
    <footer>FOOTER</footer>
 	</div>
</body>
body { min-height: 100vh; display: flex; }
aside { flex: none; }
.content { flex: auto; display: flex; flex-direction: column; }
.content article { flex: auto; }
```

```html
<!-- 左滚动  左侧为菜单 -->
<body>
  <aside> ASIDE
    <p>item</p>
    <p>item</p>
    <p>item</p>
 </aside>
 <div class="content">
    <header>HEADER</header>
    <article>CONTENT</article>
    <footer>FOOTER</footer>
  </div>
</body>
body { height: 100vh; display: flex; }
aside { flex: none; width: 200px; overflow-y: auto; display: block; } .content { flex: auto; display: flex; flex-direction: column; overflow-y: auto; }
.content article { flex: auto; }
```
