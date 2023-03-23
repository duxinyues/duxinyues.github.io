"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8085],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(n),m=o,k=u["".concat(s,".").concat(m)]||u[m]||b[m]||a;return n?r.createElement(k,c(c({ref:t},p),{},{components:n})):r.createElement(k,c({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3,slug:"JavaScript\uff1aWebSocket",title:"JavaScript\uff1aWebSocket\u57fa\u672c\u4f7f\u7528\u65b9\u6cd5",authors:"duxinyues",tags:["JavaScript"]},c=void 0,l={permalink:"/JavaScript\uff1aWebSocket",editUrl:"https://github.com/duxinyues/blog/blob/main/blog/javascript/JavaScript202203.md",source:"@site/blog/javascript/JavaScript202203.md",title:"JavaScript\uff1aWebSocket\u57fa\u672c\u4f7f\u7528\u65b9\u6cd5",description:"WebSocket\u662f\u4e00\u79cd\u53cc\u5411\u3001\u5355\u5957\u63a5\u5b57\u8fde\u63a5\uff0c\u4f7f\u7528WebSocket\uff0c\u90a3\u4e48\u8bf7\u6c42\u5c31\u53d8\u6210\u4e86\u6253\u5f00WebSocket\u8fde\u63a5\u7684\u5355\u4e00\u8bf7\u6c42\uff0c\u5e76\u4e14\u53ef\u4ee5\u91cd\u7528\u516c\u5ba2\u6237\u7aef\u5230\u670d\u52a1\u5668\u4ee5\u53ca\u670d\u52a1\u5668\u5230\u5ba2\u6237\u7aef\u7684\u540c\u4e00\u8fde\u63a5\u3002",date:"2023-02-08T08:38:11.000Z",formattedDate:"2023\u5e742\u67088\u65e5",tags:[{label:"JavaScript",permalink:"/tags/java-script"}],readingTime:7.32,hasTruncateMarker:!1,authors:[{name:"\u8bfb\u5fc3\u60a6",title:"\u524d\u7aef\u5f00\u53d1\u653b\u57ce\u72ee",url:"https://github.com/duxinyues/",email:"yongyuan253015@gmail.com",imageURL:"https://avatars.githubusercontent.com/u/29058884?v=4",key:"duxinyues"}],frontMatter:{sidebar_position:3,slug:"JavaScript\uff1aWebSocket",title:"JavaScript\uff1aWebSocket\u57fa\u672c\u4f7f\u7528\u65b9\u6cd5",authors:"duxinyues",tags:["JavaScript"]},prevItem:{title:"JavaScript\uff1a\u5ba2\u6237\u7aef\u5b58\u50a8",permalink:"/JavaScript\uff1a\u5ba2\u6237\u7aef\u5b58\u50a8"},nextItem:{title:"JavaScript\uff1aPromise\u8fdb\u9636\u77e5\u8bc6",permalink:"/JavaScript\uff1aPromise\u8fdb\u9636"}},s={authorsImageUrls:[void 0]},i=[{value:"\u521b\u5efaWebSocket\u8fde\u63a5",id:"\u521b\u5efawebsocket\u8fde\u63a5",level:2},{value:"\u5efa\u7acb\u5ba2\u6237\u7aef\u7684WebSocket\u8fde\u63a5",id:"\u5efa\u7acb\u5ba2\u6237\u7aef\u7684websocket\u8fde\u63a5",level:3},{value:"\u521b\u5efa\u670d\u52a1\u7aef\u7684WebSocket",id:"\u521b\u5efa\u670d\u52a1\u7aef\u7684websocket",level:2}],p={toc:i};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"WebSocket\u662f\u4e00\u79cd\u53cc\u5411\u3001\u5355\u5957\u63a5\u5b57\u8fde\u63a5\uff0c\u4f7f\u7528WebSocket\uff0c\u90a3\u4e48\u8bf7\u6c42\u5c31\u53d8\u6210\u4e86\u6253\u5f00WebSocket\u8fde\u63a5\u7684\u5355\u4e00\u8bf7\u6c42\uff0c\u5e76\u4e14\u53ef\u4ee5\u91cd\u7528\u516c\u5ba2\u6237\u7aef\u5230\u670d\u52a1\u5668\u4ee5\u53ca\u670d\u52a1\u5668\u5230\u5ba2\u6237\u7aef\u7684\u540c\u4e00\u8fde\u63a5\u3002"),(0,o.kt)("p",null,"WebSock\u51cf\u5c11\u5ef6\u8fdf\uff0c\u4e00\u65e6\u5efa\u7acb\u8d77WebSocket\u8fde\u63a5\uff0c\u670d\u52a1\u5668\u53ef\u4ee5\u5728\u6d88\u606f\u53ef\u7528\u7684\u65f6\u5019\u53d1\u9001\u3002\u8fd9\u662f\u8f6e\u8be2\u548cWebSocket\u7684\u6bd4\u8f83\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/d25aeda3d5bc418cb246be69d77d458c.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,o.kt)("p",null,"WebSocket\u8ba9\u5b9e\u65f6\u901a\u4fe1\u66f4\u52a0\u6709\u6548\uff0c\u53ef\u4ee5\u8282\u7ea6\u5e26\u5bbd\u3001CPU\u8d44\u6e90\u5e76\u51cf\u5c11\u5ef6\u8fdf\u3002"),(0,o.kt)("p",null,"WebSocket\u8fde\u63a5\u901a\u8fc7\u5728\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u4e4b\u95f4\u7b2c\u4e00\u6b21\u63e1\u624b\u7684\u65f6\u5019\u5c06http\u534f\u8bae\u5347\u7ea7\u5230WebSocket\u534f\u8bae\u6765\u5b8c\u6210\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u5728\u76f8\u540c\u7684\u5e95\u5c42TCP\u8fde\u63a5\u4e0a\u8fdb\u884c\u3002"),(0,o.kt)("h2",{id:"\u521b\u5efawebsocket\u8fde\u63a5"},"\u521b\u5efaWebSocket\u8fde\u63a5"),(0,o.kt)("p",null,"\u9996\u5148\u8c03\u7528WebSocket\u6784\u9020\u51fd\u6570\uff0c\u521b\u5efa\u4e00\u4e2aWebSocket\u8fde\u63a5\uff0c\u6784\u9020\u51fd\u6570\u8fd4\u56de\u7684WebSocket\u5bf9\u8c61\u5b9e\u4f8b\u3002"),(0,o.kt)("h3",{id:"\u5efa\u7acb\u5ba2\u6237\u7aef\u7684websocket\u8fde\u63a5"},"\u5efa\u7acb\u5ba2\u6237\u7aef\u7684WebSocket\u8fde\u63a5"),(0,o.kt)("p",null,"\u4f7f\u7528WebSocket\u63a5\u53e3\uff0c\u901a\u8fc7\u6307\u5411\u4e00\u4e2a\u8868\u793a\u6240\u8981\u8fde\u63a5\u7aef\u70b9\u7684URL\uff0c\u5b9e\u4f8b\u5316\u4e00\u4e2aWebSocket\u5bf9\u8c61\u3002"),(0,o.kt)("p",null,"WebSocket\u534f\u8bae\u5b9a\u4e49\u4e86\u4e24\u79cdURL\uff1aws\u548cwss\u3002\u548cHTTP\u3001HTTPS\u7c7b\u4f3c\uff0c\u8868\u793a\u975e\u52a0\u5bc6\u548c\u52a0\u5bc6\u6570\u636e\u3002wss\u8868\u793a\u4f7f\u7528\u4f20\u8f93\u5c42\u5b89\u5168\u6027\u7684WebSocket\u8fde\u63a5\u3002"),(0,o.kt)("p",null,"WebSocket\u6784\u9020\u51fd\u6570\u6709\u4e00\u4e2a\u5fc5\u586b\u7684URL\u548c\u53ef\u9009\u53c2\u6570protocols\uff0cURL\u662f\u6307\u5411\u8fde\u63a5\u76ee\u6807\u7684URL\uff1bprotocols\u662f\u4e3a\u4e86\u5efa\u7acb\u8fde\u63a5\uff0c\u670d\u52a1\u5668\u5fc5\u987b\u5728\u5b83\u54cd\u5e94\u4e2d\u5305\u542b\u4e00\u4e2a\u6216\u8005\u4e00\u7ec4\u534f\u8bae\u540d\u79f0\uff0c\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    <script>\n        let ws = new WebSocket("ws://localhost:3000/",[\'com.kaazing.echo\']);\n        ws.onopen = () => {\n            ws.send("hello")\n        }\n        ws.onmessage =(ev) => {\n            console.log("ev", ev)\n        }\n        \n    <\/script>\n')),(0,o.kt)("p",null,"\u548c\u6240\u6709\u7684Web API\u4e8b\u4ef6\u4e00\u6837\uff0c\u4f7f\u7528on+\u4e8b\u4ef6\u540d\u79f0\u6765\u5904\u7406\u5c5e\u6027\u76d1\u542c\u8fd9\u4e9b\u4e8b\u4ef6\u3002WebSocket\u5bf9\u8c61\u8c03\u5ea64\u4e2a\u4e0d\u540c\u7684\u4e8b\u4ef6\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"open\uff0c\u5f53\u670d\u52a1\u5668\u54cd\u5e94\u4e86WebSocket\u8fde\u63a5\u8bf7\u6c42\uff0c\u90a3\u4e48open\u4e8b\u4ef6\u89e6\u53d1\u5e76\u4e14\u5efa\u7acb\u4e00\u4e2a\u8fde\u63a5\uff0copen\u4e8b\u4ef6\u5bf9\u5e94\u7684\u56de\u8c03\u51fd\u6570\u5c31\u662fonopen\u3002"),(0,o.kt)("li",{parentName:"ol"},"message\uff0c\u5728\u63a5\u6536\u5230\u6d88\u606f\u65f6\u5019\u89e6\u53d1\uff0c\u5bf9\u5e94\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570\u662fonmessage\uff0c"),(0,o.kt)("li",{parentName:"ol"},"error\uff0c\u5728\u54cd\u5e94\u610f\u5916\u6545\u969c\u7684\u65f6\u5019\u89e6\u53d1\uff0c\u5bf9\u5e94\u7684\u56de\u8c03\u51fd\u6570\u662fonerror\u3002\u9519\u8bef\u8fd8\u4f1a\u5bfc\u81f4WebSocket\u8fde\u63a5\u5173\u95ed\u3002"),(0,o.kt)("li",{parentName:"ol"},"close\uff0c\u5728WebSocket\u8fde\u63a5\u5173\u95ed\u7684\u65f6\u5019\u89e6\u53d1\uff0c\u5bf9\u5e94\u7684\u56de\u8c03\u51fd\u6570\u662fonclose\u3002\u4e00\u65e6\u8fde\u63a5\u5173\u95ed\uff0c\u90a3\u4e48\u5ba2\u6237\u7aef\u6216\u8005\u670d\u52a1\u5668\u5c31\u4e0d\u518d\u80fd\u63a5\u6536\u6216\u8005\u53d1\u9001\u4fe1\u606f\u3002")),(0,o.kt)("h2",{id:"\u521b\u5efa\u670d\u52a1\u7aef\u7684websocket"},"\u521b\u5efa\u670d\u52a1\u7aef\u7684WebSocket"),(0,o.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const express = require("express");\nconst http = require("http");\nconst Ws = require("ws").Server;\nconst app = express();\n\nconst server = http.createServer(app);\n\nserver.listen(3000);\napp.use(express.static(\'www\'));\n\nlet wsServer = new Ws({server});\n\nwsServer.on("connection",function(socket){\n    console.log("\u8fde\u63a5\u6210\u529f");\n    socket.on("message",msg=>{\n        console.log("\u5ba2\u6237\u7aef\u4fe1\u606f",msg)\n        socket.send("\u5ba2\u6237\u7aef\u53d1\u9001\u7684\u4fe1\u606f\uff1a"+msg+","+new Date().getTime())\n    })\n})\n')),(0,o.kt)("p",null,"index.html\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n</head>\n\n<body>\n    <p id="mes"></p>\n\n    <script>\n        let pText = document.querySelector("p")\n        let ws = new WebSocket("ws://localhost:3000/", [\'com.kaazing.echo\']);\n        ws.onopen = (e) => {\n            console.log("WebSocket open", e);\n            setInterval(() => {\n                ws.send(new Date().getTime())\n            }, 2000)\n        }\n        ws.onmessage = ({ data }) => {\n            pText.innerText = data;\n        }\n\n    <\/script>\n</body>\n\n</html>\n')),(0,o.kt)("p",null,"\u7136\u540e\u6267\u884c\u547d\u4ee4\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"node  ws.js"),"\uff0c\u5728\u6d4f\u89c8\u5668\u6253\u5f00\u4e0a\u9762\u521b\u5efa\u7684\u9875\u9762\uff0c\u6548\u679c\u5982\u4e0b\uff1a\n",(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/af50cc17f6fb41d6b6005f0d32bd3d5b.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})))}u.isMDXComponent=!0}}]);