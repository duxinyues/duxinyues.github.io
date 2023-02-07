---
sidebar_position: 4
id: Electron：主进程、渲染进程以及通信
title: Electron：主进程、渲染进程以及通信
authors: duxinyues
tags: [Electron]
---
Electron应用程序区分主进程和渲染进程。

#### 主进程
之前我们创建的引用中，electron.js中的代码，就是运行在Electron的主进程中，主进程负责创建主窗口并且加载UI，也就是index.html。

主进程负责监听应用程序的生命周期事件、启动第一个窗口、加载UI页面、应用程序关闭后回收资源，退出程序这些任务。

#### 渲染进程
渲染进程负责完成渲染页面、接收用户输入、响应用户的交互这些任务。UI部分的代码则是运行在渲染进程中

在electron.js代码中，监听应用程序：

```javascript
// 监听应用程序
app.whenReady().then(createWindow);
```

关闭应用并且退出程序：

```javascript
// 关闭程序
app.on("window-all-closed", function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})
```

Electron应用只有一个主进程，可以有多个渲染进程，一个BrowserWindow实例表示一个渲染进程，在BrowserWindow实例销毁后，渲染进程也就结束了。

Electron的主进程模块：app、autoUpdater、BrowserView、BrowserWindow、contentTracing、dialog、globalShortcut等等；

Electron的渲染程序模块：ipcRenderer、webFrame等。

## 进程通信
如果想要在渲染进程中创建窗口、创建菜单这些操作，则可以让渲染进程个主进程发送消息，由主进程来完成对应的操作；另外在渲染进程中，也可以通过渲染进程的remote模块来完成响应的操作。

注意：remote模块在最新版本中可能被遗弃了，在开发时候留意一下自己使用Electron的版本。

#### 渲染进程访问主进程
在这里我们是在react代码中来访问主进程的，首先设置contextIsolation属性，这里使用的electron版本已经默认contextIsolation属性值为true。contextIsolation是上下文隔离

> 上下文隔离是 Electron 中的一项安全措施，可确保 预加载脚本不会将拥有优先权的 Electron 或 Node.js API 泄漏到 Web 渲染器进程中的内容。

在这里我们先将contextIsolation设置为false，确保能够在react组件中使用Electron模块。设置如下：

```javascript
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 500,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        icon: getAssetPath('logo.png')
    });
```

现在在react组件中引入Electron：

```javascript
import { useEffect } from "react";
import { Button } from "antd";
import logo from './logo.svg';
import './App.css';
const { ipcRenderer } = window.require("electron");
function App() {
  useEffect(() => {
  }, [])

  const send = () => {
    ipcRenderer.send("msg12","渲染进程发送消息了")
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>欢迎来到读心悦的世界!我错了</h2>
        <Button type="primary" onClick={send}>发送</Button>
      </header>
    </div>
  );
}

export default App;
```
在渲染进程通过使用window.require代替require来引入electron，因为前者不会被webpack编译，在渲染进程require关键字就是表示node模块的系统。

渲染进程需要使用ipcRenderer模块来向主进程发送信息：
ipcRenderer.send()方法的第一个参数是设置信息通道的名称，后面参数就是渲染进程要传递的信息内容，主进程会根据通道名称来接收信息。

组件App的效果如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/a6fba45086c949dca30c61883bcd1fe0.png)

在主进程中通过ipcMain来接收渲染进程发出的信息，现在在electron.js中编写接收信息的逻辑：

```javascript
ipcMain.on('msg12', (event, title) => {
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    win.setTitle(title);
    const msgTemplate = (pingPong) => `IPC test:${pingPong}`;
    console.log(msgTemplate(title));
})
```


当我们点击发送按钮的时候，在终端中就可以看到渲染进程发送的信息了，效果如图：

![在这里插入图片描述](https://img-blog.csdnimg.cn/5c7c46319af9411a8d709bb1136cd0ed.png)

在上面的代码中，我将渲染进程进程发送的信息，直接更新到窗口的标题了，如下图所示：

![在这里插入图片描述](https://img-blog.csdnimg.cn/a24cbe2e08354f9ebd4a52b97c7661d5.png)


另一种方式是完全遵守electron的安全配置，禁止在渲染进程访问Electron的API，也就是默认情况下，渲染进程没有权限访问Node和ELectron模块，那么我们可以通过contextBridge API来选择从预加载脚本中暴露对应的API，这是预加载脚本代码preload.js：

```javascript
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    setTitle: (title) => ipcRenderer.send('msg12', title)
})
```
向渲染进程暴露一个全局的变量，在渲染进程中，通过window全局变量中找到对应的API进行调用，

在主进程中设置预加载文件：

```javascript
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 500,
        webPreferences: {
            // nodeIntegration: true,
            // contextIsolation: false,
            preload: getAssetPath('preload.js'),
        },
        icon: getAssetPath('logo.png')
    });
```

再修改一下App组件代码：

```javascript
import { Button } from "antd";
import logo from './logo.svg';
import './App.css';
function App() {
  const send = () => {
    window.electronAPI.setTitle("测试标题")
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>欢迎来到读心悦的世界!我错了</h2>
        <Button type="primary" onClick={send}>发送</Button>
      </header>
    </div>
  );
}

export default App;
```
效果如图：

![在这里插入图片描述](https://img-blog.csdnimg.cn/4bca128307ea435a962a00344c288290.png)

如果react应用配合Typescript来开发的话，可能会提示window上不存在electronAPI属性。这是应该怎么解决呢？

在react应用目录中的src目录下创建types文件夹，创建一个.d.ts文件，比如index.d.ts，代码如下：

```javascript
interface Window {
  [propName: string]: any;
}

```
这样window就可以顺利挂载属性了。
#### 主进程访问渲染进程
在预加载preload.js中暴露对应的API，例如：

```javascript
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    setTitle: (title) => ipcRenderer.send('msg12', title),
    getMainMsg: (callback) => ipcRenderer.on('resMsg', (event, param) => {
        callback(param);
        console.log("event", event)
    })
})
```
渲染进程中通过ipcRenderer.on来监听对应的信息通道。

主进程向渲染进程发送信息，则通过webContents模块，比如：

```javascript
    ipcMain.on('msg12', (event, title) => {
        const webContents = event.sender
        const win = BrowserWindow.fromWebContents(webContents)
        win.setTitle(title);
        const msgTemplate = (pingPong) => `IPC test:${pingPong}`;
        console.log(msgTemplate(title));
        mainWindow.webContents.send("resMsg", title)
    });
```
这里是将渲染进程发送的信息返还给渲染进程。App组件添加代码：

```javascript
    window.electronAPI.getMainMsg((res: any) => {
      console.log("主进程", res)
    });
```
这样就可以获取到主进程发送的信息了。