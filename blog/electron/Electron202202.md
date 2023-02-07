---
sidebar_position: 2
id: Electron：窗口、窗口标题和边框
title: Electron：窗口、窗口标题和边框
authors: duxinyues
tags: [Electron]
---
桌面应用是由一个或者多个窗口组成的，Electron也是一样的，在上一章我们就通过Electron的BrowserWindow模块来创建一个主进程的窗口，如：

```javascript
new BrowserWindow({
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
定义了窗口的默认宽高以及logo这些信息。BrowserWindow的常用的属性，比如width、height、x、y等等，想了解具体的属性，可以参考官方API，这里就不一一列举了。

现在我们想自定义自己的窗口导航，因为electron默认的窗口导航，太生硬，合适具体的应用场景，这是默认的窗口导航：

![在这里插入图片描述](https://img-blog.csdnimg.cn/4bb8c2a8f3cd47d4ad68c21e66a725a9.png)

注意一下：BrowserWindow有一个title属性，是设置窗口标题的，但是如果加载的页面中遇到title标签的话，之前设置的title会被覆盖掉。

#### 自定义标题栏

当我们设置frame为false的时候，窗口的边框和标题栏消失了，只展示内容区域，我们不能移动窗口、最大化、最小化和关闭窗口。现在需要做的是封装自己的标题栏，这里我把它封装为一个React组件。

在开始封装之前，先配置一下路由，安装路由依赖：`yarn add react-router-dom`。
修改一下App，主要在App文件里面设置路由：

```javascript
import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import './App.css';
const Container = lazy(() => import("./pages/Container"))
const Home = lazy(() => import("./pages/Home"))
function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Container />,
      children: [
        {
          index: true,
          path: "/",
          element: <Home />,
        },
      ]
    },
  ])
  return <Suspense fallback={<div className="react-container"><div className="progress-9"></div></div>}>
    {element}
  </Suspense>
}
export default App;

```
 在渲染进程的入口文件，也就是react应用的入口文件index.tsx，也设置一下：
 

```javascript
import ReactDOM from 'react-dom/client';
import {BrowserRouter}  from "react-router-dom";
import './index.css';
import App from "./App"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<BrowserRouter>
  <App />
</BrowserRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
主要是设置路由类型，选择的是浏览器路由。

自定义的标题栏，HeadBar组件：

```javascript
import close from "../../assets/close.png";
import min from "../../assets/icon_min.png";
import max from "../../assets/icon-max.png"
import logo from "../../assets/logo.png";
import "./index.scss";
function HeadBar() {
    return <div className="head-bar">
        <div className="title">
            <img src={logo} alt="logo" />
            <span>标题</span>
        </div>
        <div className="window-tool">
            <div className="icon-min"><img src={min} alt="" /></div>
            <div className="icon-max"><img src={max} alt="" /></div>
            <div className="close"><img src={close} alt="" /></div>
        </div>
    </div>
}


export default HeadBar

```
样式如下：

```css
.head-bar {
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(184, 180, 180);
    .title {
        display: flex;
        align-items: center;
        img {
            width: 30px;
            height: 30px;
            margin-right: 10px;
            border-radius: 50%;
        }
    }
    .window-tool {
        display: flex;
        img {
            width: 30px;
            height: 30px;
        }
        div {
            cursor: pointer;
        }
        div:nth-child(1) {
            margin-right: 5px;
        }
        div:nth-child(2) {
            margin-right: 5px;
        }
    }
}
```
容器组件Container的代码如下：

```javascript
import { Layout } from "antd";
import { Outlet } from "react-router-dom"
import HeadBar from '../../components/Header';
import "./index.scss"
const { Content } = Layout;

function Container() {

    return <Layout className="layout">
        <HeadBar />
        <Content className="content">
            <Outlet />
        </Content>
    </Layout>
}

export default Container;
```
index.scss:

```javascript
.layout {
    width: 100vw;
    height: 100vh;
}
```
虽然是在借助ant designUI，但是有些样式还是的自己来完成的。
效果如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/27598b57860a48bb8deca6aa017e1a86.png)

关于窗口拖动的问题，自从设置frame为false后，窗口就不能拖动了。其实并不是窗口不能拖动，而是可拖拽区域消失了，所以需要设置某个元素为可拖拽区域。现在是设置标题栏为可拖拽区域，只需要在样式中设置：-webkit-app-region: drag;即可。

但是我们又不希望标题栏中的某个图标拥有拖拽的功能，比如关闭图标。这时候我们可以给对应的图标区域设置-webkit-app-region: no-drag;样式。样式就可以屏蔽子元素从父元素继承来的功能。标题栏样式完整代码如下：

```css
.head-bar {
    -webkit-app-region: drag;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(184, 180, 180);
    .title {
        display: flex;
        align-items: center;
        img {
            width: 30px;
            height: 30px;
            margin-right: 10px;
            border-radius: 50%;
        }
    }
    .window-tool {
        -webkit-app-region: no-drag;
        display: flex;
        img {
            width: 30px;
            height: 30px;
        }
        div {
            cursor: pointer;
        }
        div:nth-child(1) {
            margin-right: 5px;
        }
        div:nth-child(2) {
            margin-right: 5px;
        }
    }
}
```
#### 窗口工具图标的事件
现在给工具图标绑定事件，在标题栏也就三个图标，

![在这里插入图片描述](https://img-blog.csdnimg.cn/a1a90ba0692248cb843af4e44cadda86.png)

因为工具图标是在渲染进程中，所以完成事件操作，需要和主进程进行通信，在渲染进程通过ipcRenderer，通知主进程来完成对应的操作。

先在window上挂载三个属性，如图所示：

![在这里插入图片描述](https://img-blog.csdnimg.cn/90e946405ca8428fb4fd553024f390f3.png)

setWindowClose方法在点击关闭图标时调用；
setWindowMax方法在点击最大化的时候调用；
setWindowMin方法在点击最小化的时候调用；

预加载文件preload.js添加代码如下：

```javascript
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    setTitle: (title) => ipcRenderer.send('msg12', title),
    getMainMsg: (callback) => ipcRenderer.on('resMsg', (event, param) => {
        callback(param);
        console.log("event", event)
    }),
    setWindowClose: () => ipcRenderer.send('window-close'),
    setWindowMax: () => ipcRenderer.send('window-max'),
    setWindowMin: () => ipcRenderer.send('window-min'),
})
```
electron的入口文件中，在监听生命周期的方法中监听渲染进程发送的指令：

```javascript
// 监听应用程序
app.whenReady().then(() => {
    createWindow();
    // 接收最小化指令
    ipcMain.on("window-min", () => {
        mainWindow.minimize();
    })
    // 接收最大化指令
    ipcMain.on("window-max", () => {
        if (mainWindow.isMaximized()) {
            mainWindow.restore();
        } else {
            mainWindow.maximize();
        }
    })
    // 接收关闭指令
    ipcMain.on("window-close", () => {
        console.log("关闭")
        mainWindow.close();
    })
});
```

在HeadBar组件添加对应的事件，并且从window对象上获取对应的属性事件，完整代码如下：

```javascript
import { useState } from "react";
import close from "../../assets/close.png";
import min from "../../assets/icon_min.png";
import max from "../../assets/icon-max.png"
import logo from "../../assets/logo.png";
import "./index.scss";
function HeadBar() {
    const [maxWindow, setMaxWindow] = useState(false);
    const onClose = () => {
        console.log("点击关闭")
        window.electronAPI.setWindowClose();
    }
    const onMax = () => {
        window.electronAPI.setWindowMax();
    }
    const onMin = () => {
        console.log("恢复")
        window.electronAPI.setWindowMin();
    }
    return <div className="head-bar">
        <div className="title">
            <img src={logo} alt="logo" />
            <span>标题</span>
        </div>
        <div className="window-tool">
            <div className="icon-min" onClick={onMin}><img src={min} alt="" /></div>
            <div className="icon-max" onClick={onMax}><img src={max} alt="" /></div>
            <div className="close" onClick={onClose}><img src={close} alt="" /></div>
        </div>
    </div>
}


export default HeadBar

```

如果想更完美的展示最大化和恢复的图标，可以使用maxWindow变量来控制，不同的状态显示对应的图标即可。