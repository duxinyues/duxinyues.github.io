---
sidebar_position: 6
id: Electron：如何调用系统对话框【打开文件、保存文件，消息提示】
title: Electron：如何调用系统对话框【打开文件、保存文件，消息提示】
authors: duxinyues
tags: [Electron]
---
一个桌面应用中，会有很多的交互涉及到系统API，比如显示系统通知、在系统托盘区域显示一个图标、通过“打开文件对话框”打开系统内的文件或者是保存数据到系统磁盘上。

##  使用系统文件对话框：showOpenDialog
当用户手动打开系统上某个文件，这就需要通过系统对话框实现了。除此之外，很多的交互场景都是需要调用系统对话框的，比如保存文件、选择路径、消息提示、错误提示等等。

首先在需要打开文件的组件中【这个组件就是在渲染进程中】，向主进程中发送打开文件的消息，因为这里定义的是一个基础组件，所以把一些参数全部暴露出去：
这是一个打开文件的按钮，如下图所示
```javascript
import { Button } from "antd";
interface PropsType {
    text: string;
    onClick?: () => void;
}
function OpenFileButton({ text, onClick }: PropsType) {
    return <Button type="primary" onClick={onClick}>{text}</Button>
}

export default OpenFileButton;
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/deb330e0dffe4cf38a56fde1e869792f.png)

在调用这个组件的时候，传入对应的文本和函数即可。如下：

```javascript
import { Space } from 'antd';
import "./index.scss";
import OpenFileButton from './OpenFileButton';
const { ipcRenderer } = window.require("electron");
function System() {
    const openFile = async () => {
        ipcRenderer.send("openFile", "选择文件")
    }
    return <div className="container">
        <Space>
            <OpenFileButton text="打开文件" onClick={openFile} />
        </Space>
    </div>
}

export default System
```

在这段代码中，引入electron的ipcRenderer模块，通过send方法向主进程发送消息。
在主进程中监听对应的消息通道：

```javascript
app.whenReady().then(() => {
     // 其他逻辑代码
    // 打开一个文件对话框
    ipcMain.on("openFile", async (event, data) => {
        let filePath = await dialog.showOpenDialog({
            title: data,
            buttonLabel: "按此打开文件",
            defaultPath: app.getAppPath("aaa"),
            properties: ["multiSelection"],
            filters: [
                { name: "图片", extensions: ["jpg", "png", "svg"] },
                { name: "视频", extensions: ["mkv", "avi", "mp4"] }
            ]
        });
        console.log("文件", filePath, data)
    })

});
```

这里只设置可以打开的文件类型是图片和视频，最后我们可以拿到所打开文件的路径，就看看具体的需求是否需要文件的路径了。
效果如图所示：

![在这里插入图片描述](https://img-blog.csdnimg.cn/3828b822964340e491a1d1daa51883d7.png)

showOpenDialog方法接受一个配置对象，这个对象影响到对话窗口元素和行为，需要注意的参数配置如下：
1. title，对话窗口的标题
2. defaultPath，默认文件路径
3. filters，允许打开的文件类型，一般是可以打开多种类型的文件
4. buttonLabel，是确认按钮的显示文本
5. properties，设置是否多选、是否选择文件夹

showOpenDialog防范返回的是一个Promise对象，在用户选择完成后，Promise对象执行成功。返回的结果是一个对象，该对象中含有属性：
1. canceled属性，表示用户是否点击了“取消按钮”
2.  filePath，是一个数组，里面的值表示是文件的路径，拿到文件后，就可对文件进行读写了。

还有一个方法showOpenDialogSync，只是在打开对话框的时候是同步，如果用户一直没有选择文件，那么JavaScript执行线程一直处于阻塞状态，一般情况下是不会推荐使用这个方法的。

## 保存文件对话框：showSaveDialog
在主进程中设置监听对应的消息通道：

```javascript
    // 保运文件的对话框
    ipcMain.on("saveFile", (event, data) => {
        dialog.showSaveDialog({
            title: data,
            defaultPath: app.getAppPath(),
            buttonLabel: "确认",
            filters: [
                { name: "自定义文件", extensions: ["js", "txt", "json"] },
            ]
        }).then(res => {
            writeFileSync(res.filePath, "这是一个测试文件")
        }).catch(err => {
            console.log("err", err)
        })

    })
```
在渲染进程中，触发某个事件的时候，就向主进程发送“saveFile”消息，代码如下：

```javascript
import { Space,Button } from 'antd';
import "./index.scss";
const { ipcRenderer } = window.require("electron");
function System() {
    const openFile = () => {
        ipcRenderer.send("openFile", "选择文件")
    }
    const onSaveFile = ()=>{
        ipcRenderer.send("saveFile", "保存文件")
    }
    return <div className="container">
        <Space>
            <Button type="primary" onClick={openFile}>打开文件</Button>
            <Button type="primary" onClick={onSaveFile}>保存文件</Button>
        </Space>
    </div>
}

export default System
```
这是官网上关于showSaveDialog的属性参数：

![在这里插入图片描述](https://img-blog.csdnimg.cn/cf6423c8007f4be4ad4a55252efc9c65.png)

当我们在应用中，将内容剪辑好后，传到主进程中，再将数据写入文件中保存下来。在写入文件的函数中，第一个参数是文件名称，后面的就是要写入的数据：

```javascript
 writeFileSync(res.filePath, "这是一个测试文件")
```
## 提示对话框：showMessageBox
在渲染进程中触发一个事件，向主进程发送信息：

```javascript
    const onMessage = ()=>{
        ipcRenderer.send("openMessage","这是一个错误信息内容")
    }
```
在主进程中接收对应的消息通道：

```javascript
const openMessage = () => {
    ipcMain.on("openMessage", (event, data) => {
        dialog.showMessageBox({
            type: 'warning',
            title: "您确定么？",
            message: data,
            buttons: ["OK", "Cancel"]
        }).then(res => {
            console.log("选择", res.response)
        })
    })
}
```
效果如下图：

![在这里插入图片描述](https://img-blog.csdnimg.cn/57e4928b065c4bac91b164e91700aa22.png)

showMessageBox的配置项属性，如前面代码所示，就是常见的属性配置：
type：消息弹窗的类型，属性值："none", "info", "error", "question" 或者 "warning"；
title，弹窗的标题
message：弹窗的内容
buttons：按钮

根据不同的场景，可能会需要配置其他的属性，具体的可以查阅官方API。

## 关于对话框
还有一个是关于应用版本信息的弹窗，效果如下图：

![在这里插入图片描述](https://img-blog.csdnimg.cn/f2103cbe478d4d3799413e7f9885fdcf.png)

当我们需要展示应用版本信息的时候，是调用app.setAboutPanelOptions，来配置对应的版本信息，具体的属性如下：

applicationName string (可选) - 应用程序的名字
applicationVersion string (可选) - 应用程序版本
copyright string (可选) - 版权信息
version string (可选) macOS - 应用程序版本号
credits string (可选) macOS Windows - 信用信息。
authors string[] (可选) Linux - 应用程序作者列表。
website string (可选) Linux - 应用程序的网站。
iconPath string (可选) Linux Windows - 以JPEG 或 PNG 文件格式为应用程序图标路径。 在 Linux 上，将显示为 64x64 像素，同时保留纵横比。

在渲染进程中触发事件的时候，主进程需要调用的是：`app.showAboutPanel()`
比如：

```javascript
// 版本信息配置
app.setAboutPanelOptions({
    applicationVersion:app.getVersion(),
    applicationName:"Electron应用版本信息",
    copyright:"2022年"
});
    ipcMain.on("version",(event,data)=>{
        console.log("版本信息")
        app.showAboutPanel();
    })
```

渲染进程代码：

```javascript
    const showVersion = () => {
        ipcRenderer.send("version")
    }
```

这就是关于Electron调用系统对话框的信息。