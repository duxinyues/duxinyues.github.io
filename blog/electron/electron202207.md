---
sidebar_position: 7
id: create-react-app创建Electron应用，打包
title: create-react-app创建Electron应用，打包
authors: duxinyues
tags: [Electron]
---
首先是安装react：`npx create-react-app electron-react --template typescript`，这里我使用了Typescript，如果不习惯Typescript的同学，可以使用这个命令：`npx create-react-app electron-react`。

这时候我们成功创建了一个react应用，然后切换到electron-cra目录下，然后执行npm start，先运行react应用，这个仅仅是为了体验一下自己创建的react应用。

![](https://img-blog.csdnimg.cn/ee762c50586f4a259173c1e3dcded849.png)

这是react应用默认的页面。接下来开始安装Electron依赖：

```javascript
yarn add electron electron-builder cross-env wait-on concurrently --dev
yarn add electron-is-dev
```

然后在应用根目录创建一个main.js文件，作为electron的入口文件，代码如下：

```javascript
const { app, BrowserWindow } = require("electron")

function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 500,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadURL("http://localhost:3000/");
    win.webContents.openDevTools(); // 打开开发工具
}

app.whenReady().then(createWindow);
app.on("window-all-closed", function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})
```
在package.json中添加：`"main": "main.js",`。再执行命令：`yarn electron ./`运行electron应用，效果如图：

![在这里插入图片描述](https://img-blog.csdnimg.cn/615e571ba3fb452c8eaac5152cca50e2.png)

合并一下react和electron的启动命令：`  "dev": "concurrently \"cross-env BROWSER=none yarn start\" \"wait-on http://localhost:3000 && electron .\"",`
这是在开发环境的编译方式，在打包部署阶段就不能这样做了。

现在package中配置electron-builder的命令：

```javascript
  "scripts": {
    "package": "electron-builder"
  },
```

但是这样在执行npm  run package打包的时候，提示找不到public/electron.js。那就在public目录下创建electron.js，代码和main.js一样，因为编译的时候public的文件是被复制到build目录下的，设置public/electron.js为Electron的指定入口。electron.js代码如下：

```javascript
const { app, BrowserWindow } = require("electron")
const isDev = require('electron-is-dev');
app.commandLine.appendSwitch('remote-debugging-port', '8315');
app.commandLine.appendSwitch('host-rules', 'MAP * 127.0.0.1');
function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 500,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.webContents.openDevTools(); // 打开开发工具
    win.loadURL(isDev ? 'http://localhost:3000' : `file://${__dirname}/index.html`);
}

app.whenReady().then(createWindow);
app.on("window-all-closed", function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})
```
合并一下react和Electron的打包命令：`"package": "yarn build  && electron-builder"`

然后执行命令：`npm run package`，在应用目录下会生成build和dist文件夹，build是react应用打包生成的，dist就是electron生成，里面含有electron的安装文件和应用本身的exe文件，例如：

![在这里插入图片描述](https://img-blog.csdnimg.cn/9c19f378d91448fcaabba7db05204d7c.png)

duxin Setup 0.1.0.exe就是安装文件，只要点击就进入安装流程。

在文件夹win-unpacked 中含有应用本身exe文件，点击就可以运行应用程序：

![在这里插入图片描述](https://img-blog.csdnimg.cn/fd33bae0eafa43c38f40f03ff0d4c49c.png)

这时候打包出来的应用程序图标默认是electron的图标，我们可以在build选项里面设置对应平台的图标，以下是我设置的简单图标，直接使用了react的图标：

```javascript
  "build": {
    "appId": "duxin.electron.react",
    "copyright": "0.1.0",
    "productName": "duxinyues",
    "directories": {
      "buildResources": "build",
      "output": "dist"
    },
    "files": [
      "build/**/*",
      "node_modules/**/*"
    ],
    "extraMetadata": {
      "main": "build/electron.js"
    },
    "win": {
      "icon": "./build/logo512.png"
    }
  },
```
这样打包出来应用程序图标，如下图所示。
![在这里插入图片描述](https://img-blog.csdnimg.cn/a7032859c845413c9d5b6eea3be3b65e.png)

但是在打包的时候，生成一些不必要的文件，比如main.872d1118.js.map，导致打包速度很慢。

另外想在打包的时候进行文件压缩，并且显示进度条，比如：
![在这里插入图片描述](https://img-blog.csdnimg.cn/02214d5a6e9a45d8a0b7b71da20d4f6e.png)
为了不破坏create-react-app原本的配置机制，就需要使用react-app-rewired，是覆盖一些原有的配置。需要结合customize-cra。

先安装customize-cra和react-app-rewired的依赖：`yarn add -D react-app-rewired  customize-cra`，然后在醒目更目录下创建config-overrides.js，代码内容：

```javascript
const path = require('path');
const {
    override,
    fixBabelImports,
    addWebpackAlias,
    addDecoratorsLegacy,
    addWebpackPlugin,
} = require('customize-cra');
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const isEnvProduction = process.env.NODE_ENV === 'production'
// 进度条
const addCompression = (config) => {
    if (isEnvProduction) {
        new CompressionWebpackPlugin({
            test: /\.(css|js)$/,
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            threshold: 10240, // 只处理文件大于10kb的资源
            minRatio: 0.80, // 只处理压缩率低于90%的文件
        })
    };
    return config;
}

// 分析
const addAnalyzer = () => (config) => {
    if (process.env.ANALYZER) {
        config.plugins.push(new BundleAnalyzerPlugin());
    }
    return config;
}
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    // 别名配置
    addWebpackAlias({
        '@': path.resolve(__dirname, './src'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@config': path.resolve(__dirname, './src/config'),
    }),
    addDecoratorsLegacy(), // 修饰器
    addAnalyzer(),
    addCompression(),
    addWebpackPlugin(new ProgressBarPlugin()), // 中终端显示进度条
);
```
现在对比一下前后两次打包react应用的大小，这是修改之前的：

![在这里插入图片描述](https://img-blog.csdnimg.cn/ffe5b5f2e6db4edaaf89ec12cf71d635.png)

这其中.map文件占了大部分：

![在这里插入图片描述](https://img-blog.csdnimg.cn/58a153e660d24e7b8ed2f74c82ce9d20.png)

修改配置之后的效果：

![在这里插入图片描述](https://img-blog.csdnimg.cn/06bb964e36ea4e6e8843bbaddf9a77d7.png)

这时候就没有生成.map文件了：

![在这里插入图片描述](https://img-blog.csdnimg.cn/9017964486f34db3a640969d46339922.png)

虽然这是react打包优化，没有说是electron打包优化。但是整个应用打包中也是包含了react的打包。做这样的优化，进一步缩短了整个应用的打包时间。后面再了解electron一些打包的优化。

入口文件electron.js代码：

```javascript
const { app, BrowserWindow, ipcMain, shell } = require("electron")
const isDev = require('electron-is-dev');
const path = require("path");
const { log } = require("electron-log");
const { autoUpdater } = require("electron-updater")
app.commandLine.appendSwitch('remote-debugging-port', '8315');
app.commandLine.appendSwitch('host-rules', 'MAP * 127.0.0.1');

// 更新器
class AppUpdater {
    constructor() {
        autoUpdater.checkForUpdatesAndNotify();
    }
}
ipcMain.on("ipc-example", async (event, arg) => {
    const msgTemplate = (pingPong) => `IPC test:${pingPong}`;
    console.log(msgTemplate(arg));
    event.reply("ipc-example", msgTemplate("pong"))
})
// 创建窗口
let mainWindow = null;
function createWindow() {
    const RESOURCES_PATH = app.isPackaged
        ? path.join(process.resourcesPath, 'public')
        : path.join(__dirname, '../public');

    const getAssetPath = (...paths) => {
        return path.join(RESOURCES_PATH, ...paths);
    };

    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 500,
        webPreferences: {
            nodeIntegration: true
        },
        icon: getAssetPath('logo.png')
    });

    isDev && mainWindow.webContents.openDevTools(); // 打开开发工具
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${__dirname}/index.html`);

    mainWindow.on("ready-to-show", () => {
        if (!mainWindow) {
            throw new Error('"mainWindow" is not defined');
        }

        if (process.env.START_MINIMIZED) {
            mainWindow.minimized();
        } else {
            mainWindow.show();
        }  
    })
    mainWindow.on("close", () => {
        mainWindow = null;
    });

    mainWindow.webContents.setWindowOpenHandler((data) => {
        shell.openExternal(data.url);
        return {
            action: 'deny'
        }
    });

    new AppUpdater();
}

app.whenReady().then(createWindow);
app.on("window-all-closed", function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})
```

