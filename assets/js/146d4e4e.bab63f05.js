"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4349],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(g,l(l({ref:n},s),{},{components:t})):r.createElement(g,l({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3258:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:1,id:"electron",title:"Electron\uff1a\u642d\u5efa\u4e00\u4e2a\u684c\u9762\u5e94\u7528",authors:"duxinyues",tags:["Electron"]},l="Electron \u642d\u5efa\u4e00\u4e2a\u684c\u9762\u5e94\u7528",i={permalink:"/blog/electron/electron",editUrl:"https://github.com/duxinyues/blog/blob/main/blog/electron/electron.md",source:"@site/blog/electron/electron.md",title:"Electron\uff1a\u642d\u5efa\u4e00\u4e2a\u684c\u9762\u5e94\u7528",description:"\u5728\u5b89\u88c5 Electron \u7684\u65f6\u5019\uff0c\u56e0\u4e3a\u8bbf\u95ee\u7684\u662f\u56fd\u5916\u7684 IP\uff0c\u6240\u4ee5\u5f88\u5bb9\u5b89\u88c5\u5931\u8d25\uff0c\u9700\u8981\u8bbe\u7f6e\u8bbf\u95ee\u56fd\u5185\u7684 Electron \u955c\u50cf\uff1a yarn config set ELECTRON_MIRROR http://cdn.npm.taobao.org/dist/electron/",date:"2023-02-08T08:38:11.000Z",formattedDate:"2023\u5e742\u67088\u65e5",tags:[{label:"Electron",permalink:"/blog/tags/electron"}],readingTime:5.91,hasTruncateMarker:!1,authors:[{name:"\u8bfb\u5fc3\u60a6",title:"\u524d\u7aef\u5f00\u53d1\u653b\u57ce\u72ee",url:"https://github.com/duxinyues/",email:"yongyuan253015@gmail.com",imageURL:"https://avatars.githubusercontent.com/u/29058884?v=4",key:"duxinyues"}],frontMatter:{sidebar_position:1,id:"electron",title:"Electron\uff1a\u642d\u5efa\u4e00\u4e2a\u684c\u9762\u5e94\u7528",authors:"duxinyues",tags:["Electron"]},prevItem:{title:"CSS\uff1a\u53d8\u91cf\u51fd\u6570var\u548c\u81ea\u5b9a\u4e49\u5c5e\u6027",permalink:"/blog/CSS\uff1a\u53d8\u91cf\u51fd\u6570var\u548c\u81ea\u5b9a\u4e49\u5c5e\u6027"},nextItem:{title:"Electron\uff1a\u7a97\u53e3\u3001\u7a97\u53e3\u6807\u9898\u548c\u8fb9\u6846",permalink:"/blog/electron/Electron202202"}},c={authorsImageUrls:[void 0]},p=[],s={toc:p};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u5b89\u88c5 Electron \u7684\u65f6\u5019\uff0c\u56e0\u4e3a\u8bbf\u95ee\u7684\u662f\u56fd\u5916\u7684 IP\uff0c\u6240\u4ee5\u5f88\u5bb9\u5b89\u88c5\u5931\u8d25\uff0c\u9700\u8981\u8bbe\u7f6e\u8bbf\u95ee\u56fd\u5185\u7684 Electron \u955c\u50cf\uff1a",(0,o.kt)("inlineCode",{parentName:"p"}," yarn config set ELECTRON_MIRROR http://cdn.npm.taobao.org/dist/electron/")),(0,o.kt)("p",null,"\u5b89\u88c5 ELectron\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"yarn add electron --dev --platform=win64")),(0,o.kt)("p",null,"\u5728 package.json \u6587\u4ef6\u4e2d\u8bbe\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "name": "electron",\n  "version": "1.0.0",\n  "main": "index.js",\n  "license": "MIT",\n  "scripts": {\n    "start": "electron ./index.js"\n  },\n  "devDependencies": {\n    "electron": "^16.0.7"\n  }\n}\n\n')),(0,o.kt)("p",null,"\u7136\u540e\u5728\u9879\u76ee\u76ee\u5f55\u4e0b\u521b\u5efa index.js \u548c index.html\uff1a"),(0,o.kt)("p",null,"index.html\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8" />\n    \x3c!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP --\x3e\n    <meta\n      http-equiv="Content-Security-Policy"\n      content="default-src \'self\'; script-src \'self\'"\n    />\n    <meta\n      http-equiv="X-Content-Security-Policy"\n      content="default-src \'self\'; script-src \'self\'"\n    />\n    <title>djdfj</title>\n    <link rel="stylesheet" type="text/css" href="./index.css" />\n  </head>\n\n  <body>\n    <h1>Hello World!\u54c8\u54c8\u54c8</h1>\n    We are using Node.js <span id="node-version"></span>, Chromium\n    <span id="chrome-version"></span>, and Electron\n    <span id="electron-version"></span>.\n    <p>Current theme source: <strong id="theme-source">System</strong></p>\n\n    <button id="toggle-dark-mode">Toggle Dark Mode</button>\n    <button id="reset-to-system">Reset to System Theme</button>\n\n    <button id="openDevTool">\u6253\u5f00\u5f00\u53d1\u5de5\u5177</button>\n    <script src="renderer.js"><\/script>\n    <script>\n      let { remote } = require("electron");\n      console.log("remote", remote);\n      document.querySelector("#openDevTool").addEventListener("click", () => {\n        remote.getCurrentWindow().webContents.openDevTool();\n      });\n    <\/script>\n  </body>\n</html>\n')),(0,o.kt)("p",null,"index.js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { app, BrowserWindow, ipcMain, nativeTheme } = require("electron");\nconst path = require("path");\n\nfunction createWindow() {\n  const win = new BrowserWindow({\n    width: 800,\n    height: 600,\n    webPreferences: {\n      preload: path.join(__dirname, "preload.js"),\n      nodeIntegration: true,\n    },\n  });\n\n  win.loadFile("index.html");\n  ipcMain.handle("dark-mode:toggle", () => {\n    if (nativeTheme.shouldUseDarkColors) {\n      nativeTheme.themeSource = "light";\n    } else {\n      nativeTheme.themeSource = "dark";\n    }\n    return nativeTheme.shouldUseDarkColors;\n  });\n\n  ipcMain.handle("dark-mode:system", () => {\n    nativeTheme.themeSource = "system";\n  });\n}\n\napp.whenReady().then(() => {\n  createWindow();\n\n  app.on("activate", () => {\n    if (BrowserWindow.getAllWindows().length === 0) {\n      createWindow();\n    }\n  });\n});\n\napp.on("window-all-closed", () => {\n  if (process.platform !== "darwin") {\n    app.quit();\n  }\n});\n')),(0,o.kt)("p",null,"\u6267\u884c\u547d\u4ee4\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start"),":\u6548\u679c\u5982\u56fe"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/651f11a1feee46bb8c8ef5ebdea0400e.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,o.kt)("p",null,"\u5728 Electron \u5185\u90e8\u5df2\u7ecf\u96c6\u6210\u4e86 nodejs\uff0c\u6240\u4ee5\u6211\u4eec\u76f4\u63a5\u5f15\u5165 electron \u7684\u6a21\u5757\u5373\u53ef\u3002"),(0,o.kt)("p",null,"app \u8868\u793a\u662f\u6574\u4e2a\u5e94\u7528\uff0c\u901a\u8fc7 app \u53ef\u4ee5\u8c03\u7528\u5e94\u7528\u7a0b\u5e8f\u7684\u5404\u4e2a\u4e8b\u4ef6\u3002"),(0,o.kt)("p",null,"BrowserWindow\uff0c\u8d1f\u8d23\u521b\u5efa\u548c\u7ba1\u7406\u5e94\u7528\u7684\u7a97\u53e3\u3002"),(0,o.kt)("p",null,"\u5982\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u5728\u521b\u5efa\u7a97\u53e3\u7684\u65f6\u5019\uff0c\u8bbe\u7f6e\u4e86\u7a97\u53e3\u7684\u9ed8\u8ba4\u5bbd\u9ad8\u4ee5\u53ca webPreferences\uff0c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"webPreferences: {\n            preload: path.join(__dirname, 'preload.js'),\n            nodeIntegration:true\n        }\n")),(0,o.kt)("p",null,"\u8fd9\u4e00\u9879\u914d\u7f6e\u662f\u7ed9 Electron \u9875\u9762\u7ee7\u627f nodenode \u73af\u5883\uff0c\u5e76\u4e14\u8ba9 index.html \u9875\u9762\u7684 JavaScript \u62e5\u6709\u8bbf\u95ee node \u7684\u80fd\u529b\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u6211\u4eec\u52a0\u8f7d\u7684\u9875\u9762\u662f\u4e00\u4e2a\u7f51\u7edc\u9875\u9762\uff0c\u4f46\u662f\u6211\u4eec\u4e0d\u80fd\u786e\u4fdd\u8be5\u9875\u9762\u662f\u5426\u53ef\u9760\uff0c\u90a3\u4e48 nodeIntegration \u53ef\u4ee5\u8bbe\u7f6e\u4e3a false\uff0c\u4e0d\u7136\u8be5\u9875\u9762\u7684\u4e00\u4e9b\u6076\u610f\u811a\u672c\u4e5f\u80fd\u8bbf\u95ee node\uff0c\u53ef\u80fd\u4f1a\u7ed9\u7528\u6237\u9020\u6210\u635f\u5931\u3002"),(0,o.kt)("p",null,"Electron \u4e2d\uff0c\u53ea\u6709\u5728 app \u6a21\u7ec4\u7684 ready \u4e8b\u4ef6\u89e6\u53d1\u540e\u624d\u80fd\u521b\u5efa BrowserWindow\u3002"),(0,o.kt)("p",null,"\u7a97\u53e3\u521b\u5efa\u540e\u5c31\u53ef\u4ee5\u8ba9\u7a97\u53e3\u52a0\u8f7d index.html \u9875\u9762\u4e86\u3002"),(0,o.kt)("p",null,"\u5173\u95ed\u7a97\u53e3\u540e\u5c31\u9000\u51fa app \u5e94\u7528\uff0c\u6240\u4ee5 app \u9000\u51fa\u7684\u4ee3\u7801\u5c31\u653e\u5728\u7a97\u53e3\u5173\u95ed\u4e8b\u4ef6\u4e2d\uff0c\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'app.on("window-all-closed", () => {\n  if (process.platform !== "darwin") {\n    app.quit();\n  }\n});\n')),(0,o.kt)("p",null,"\u8fd9\u5c31\u662f Electron \u7b80\u5355\u5e94\u7528"))}d.isMDXComponent=!0}}]);