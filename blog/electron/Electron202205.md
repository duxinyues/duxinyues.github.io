---
sidebar_position: 5
id: Electron：菜单
title: Electron：菜单
authors: duxinyues
tags: [Electron]
---
Electron创建一个窗口，会默认具备系统菜单，例如：

![在这里插入图片描述](https://img-blog.csdnimg.cn/983a5ecbe8a7497794b06ad27cdd3f11.png)

默认提供了文件、编辑、视图、窗口和帮助五个主菜单以及主菜单的子菜单，实际上这些默认的菜单，往往需要我们重新定义。

我们在创建窗口的时候，设置frame为false，就是隐藏默认的标题栏和菜单。
如果只想隐藏菜单呢，就是通过设置autoHideMenuBar：true，但是在用户打开窗口后，按一下Alt键，默认菜单就恢复。在这样的情况下，我们可以自定义一个系统菜单来覆盖electron默认的菜单。效果如下图：

![在这里插入图片描述](https://img-blog.csdnimg.cn/569aa3361f4c46cd88a7c3f5091318ad.png)

定义自己的菜单，需要使用electron内置的Menu模块，通过Menu.buildFromTemplate方法来创建菜单对象，通过Menu.setApplicationMenu方法来给窗口设置系统菜单。

所设置的菜单对象的label属性，表示是显示的文本，可以通过设置click属性，给对应的菜单添加点击事件。还有一个属性是role，属性可选值为paste、undo、redo、cut、copy、delete、selectAll、reload、minimize、close、quit等等。但是设置role后，click属性就失效了。

## HTML右键菜单
在web应用中，我们可以在页面上设置右键菜单的功能，大致思路是：
1. 创建的菜单目录：

```html
<div id="menu"> 
	<div class="menu">1</div>
	<div class="menu">2</div>
	<div class="menu">3</div>
	<div class="menu">4</div>
</div>
```
```css
#menu{
	width:125px;
	overflow:hidden;
	border:1px solid red;
	box-shadow:2px 2px 2px #ccc;
	position:absolute:
	display:none;
}
.menu{
	height:20px;
	line-height:20px;
	text-align:center;
	border-bottom:1px solid #ccc;
	background:#fff;
}
```
2. JavaScript代码，关联用户在页面上的交互和响应：

```javascript
window.oncontextmenu = function(e){
	e.preventDefault();
	var menu = document.querySelector("#menu");
	menu.style.left = e.clientX + ‘px’;
	menu.style.top = e.clientY + ‘px’;
	menu.style.display = "block";
};

window.onclick = function(e){
	document.querySelector("#menu").style.display = "none"
}
```
这样当我们在页面上点击鼠标右键的时候，就会触发window上的oncontextmenu事件，同时获取到鼠标的位置，然后在该位置上显示对应的菜单。

如果使用这样的方法子Electron应用内创建右键菜单，这些菜单只能显示在窗口页面内部，不能悬浮在窗口之上，那么就会导致右键显示的菜单，可能只显示一部分，出现滚动条。这样体验效果并不理想。

## 系统右键菜单
思路是在主进程接收到渲染进程的右键点击事件后，Electron窗口内将显示悬浮在窗口上的系统菜单。例如，先创建菜单对象，还是使用Electron内置的Menu模块：

```javascript
// 自定义菜单
let templateMenu = [{
    label: "首页",
    submenu: [{ label: "111" }, { label: '9089' }]
}, , {
    label: "编辑",
    submenu: [{ label: '123' }]
}]
let menu = Menu.buildFromTemplate(templateMenu);

ipcMain.on("contextmenu",()=>{
        menu.popup();
})
```
渲染进程中监听右键点击事件，并且给主进程发送信息：

```javascript
    window.oncontextmenu = (e)=>{
        e.preventDefault();
        ipcRenderer.send("contextmenu")
    }
```
效果图：

![在这里插入图片描述](https://img-blog.csdnimg.cn/5ab0815944b44ac98463ce44b899fb33.png)

这是electron的菜单内容以及设置右键菜单。
## 托盘图标
很多应用需要常驻在用户的操作系统内，但是用户又不想应用一直显示在屏幕上，也就是关掉所有的应用窗口，应用程序也一直处于运行状态，比如微信、qq等等。这样让用户可以随时激活应用。

现在我们在系统托盘上注册一个图标，需要使用到Electron内置的Tray模块，这部分代码也是比较简单的，代码如下：

```javascript
    // 托盘图标
    let iconPath = getAssetPath("./logo.png")
    let tray = new Tray(iconPath);
    tray.on("click", function () {
        mainWindow.show();
    })
```
效果如图：

![在这里插入图片描述](https://img-blog.csdnimg.cn/f3b4f6f1834346d8a6f57c3e74426bde.png)

托盘图标右键菜单：

```javascript
    // 托盘菜单
    let trayMenu = Menu.buildFromTemplate([{
        click() {
            mainWindow.show();
        },
        label: "显示窗口",
        type: "normal"
    }, {
        click() {
            app.quit();
        },
        label: "退出应用",
        type: "normal"
    }]);

    tray.setContextMenu(trayMenu); // 托盘图标右键
```
效果图：

![在这里插入图片描述](https://img-blog.csdnimg.cn/a5b3b4917aac4cb89fb3e5673dfc6397.png)
