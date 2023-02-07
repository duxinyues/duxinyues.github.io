---
sidebar_position: 3
id: Electron：BrowserView使用方法
title: Electron：BrowserView使用方法
authors: duxinyues
tags: [Electron]
---
我们知道，使用BrowserWindow来创建一个新的窗口，那么如果想在窗口中战胜斯更多的web内容，比如嵌入其他网站的内容，那就使用BrowserView了。

BrowserView的位置是相对于父窗口，比如：

![在这里插入图片描述](https://img-blog.csdnimg.cn/6e234370e2174925b19ae52da64fc8bc.png)

代码如下：

```javascript
      const win = new BrowserWindow({ width: 800, height: 600 });
      const view = new BrowserView();
      win.setBrowserView(view);
      view.setAutoResize({
        
      })
      view.setBounds({ x: 0, y: 0, width: 800, height: 800 });
      view.webContents.loadURL('https://duxinyue.blog.csdn.net/?type=blog');
```
BrowserView创建的对象有这几个属性：

1. webContents：主要是负责渲染和控制网页，比如我们要在网页中加载一个连接：`view.webContents.loadURL('https://duxinyue.blog.csdn.net/?type=blog');`
2. setBounds()，调整视图的位置和大小的，也可以移动到窗口边界，比如：设置代码：
```javascript
view.setBounds({ x: -50, y: 0, width: 800, height: 800 });
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/b8252396f2594ae7856a430e22fad98e.png)

视图超出了窗口边界。
3. setAutoResize，设置视图自适应大小的，比如我们点击窗口的最大化时候，视图的尺寸能够和窗口的大小自动变化。

setAutoResize接收的参数是一个对象，有以下几个属性：

> width： boolean（可选） - 如果为true，视图宽度跟随窗口变化。 默认值为 false
height： boolean(可选) - 如果 true，视图的高度将增长和缩小 与窗口。 默认值为 false
horizontal： boolean (可选) - 如果为 true，视图的x轴和宽度将随着窗口的大小变化等比例缩放。 默认值为 false
vertical：boolean(可选) - 如果 true，视图的y位置和高度将增长 和收缩比例与窗口。 默认值为 false。

4. setBackgroundColor方法是设置视图的背景颜色，默认是白色。


关于BrowserView的完整设置如下：

```javascript
      const win = new BrowserWindow({ width: 800, height: 600 });
      const view = new BrowserView();
      win.setBrowserView(view);
      view.setAutoResize({
        width:true,
        height:true,
        horizontal:true,
        vertical:true,
      })
      view.setBounds({ x: 0, y: 0, width: 800, height: 800 });
      view.setBackgroundColor("rgb(32,54,132)")
      view.webContents.loadURL('https://duxinyue.blog.csdn.net/?type=blog');
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/13821922fb5144578b775d2320f44b8d.png)

这就是BrowserView的相关设置。