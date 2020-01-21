## 渐进式Web应用

图灵社区PWA开发实战[http://www.ituring.com.cn/book/tupubarticle/24758](http://www.ituring.com.cn/book/tupubarticle/24758)

优势：
无连接状态下的可用性;
加载速度快;
推送通知;
主屏幕快捷方式;
###  service worker技术
任何渐进式 Web 应用的核心都是 service worker 技术。

service worker 是一种脚本，可以通过注册它来控制你站点中的一个或多个页面。一旦安装完毕，service worker 就会独立存在，而不是属于某个浏览器窗口或者标签页。

service worker 可以监听并响应在其控制之下的所有页面的事件。向 Web 请求文件等事件，可以被它拦截、修改、传递并返回给页面。


>WebApp

WebApp是指基于Web的系统和应用，其作用是向广大的最终用户发布一组复杂的内容和功能。Web APP说白了就是一个针对Iphone、Android优化后的web站点，它使用的技术无非就是HTML或HTML5、CSS3、JavaScript，服务端技术JAVA、PHP、ASP。不能整合设备的核心功能，比如发文本信息，也不能充分使用APP Store进行销售和更新

>PWA（Progressive Web App）

PWA（Progressive Web App）是一种理念，使用多种技术来增强web app的功能，可以让网站的体验变得更好，能够模拟一些原生功能，比如通知推送。在移动端利用标准化框架，让网页应用呈现和原生应用相似的体验。
PWA不能包含原生OS相关代码。PWA仍然是网站，只是在缓存、通知、后台功能等方面表现更好。Electron程序相当于包裹OS原生启动器（Launcher）的网站，未来，许多Electron程序可能转化为PWA。

>WAP网站(old)

WAP网站的页面语言是WML，后来的升级版WAP 2.0（也就是所谓的3G版）是XHTML。用户可以借助支持GPRS上网功能的手机，通过WAP获取信息。
WAP的早期版本的页面语言是WML，WML是一种纯粹的页面标记语言，它是一种从HTML继承而来基于XML的标记语言，代码的编写结构比HTML严格。

WAP网站的推广方式比较简单，主要靠口碑，群发信息，WAP论坛，友链，WAP网址大全推广，WAP界基本不存在SEO，主流WEB搜索引擎都有WEB转码功能，可以将WEB网站转码为WAP内容供手机浏览。WAP也有很多手机搜索引擎，例如易查，易搜，悟空等等。

WAP的盈利方式主要靠SP点播业务和WAP广告联盟，SP点播业务就是短信点播，彩信，铃声下载，包月服务等
