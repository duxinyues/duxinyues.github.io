"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1049],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(7462),l=(n(7294),n(3905));const a={sidebar_position:5,id:"JavaScript\uff1aFile API\u548cBlob API",title:"JavaScript\uff1aFile API\u548cBlob API",authors:"duxinyues",tags:["JavaScript"]},i=void 0,o={permalink:"/blog/javascript/JavaScript202205",editUrl:"https://github.com/duxinyues/docusaurus/blob/main/blog/javascript/JavaScript202205.md",source:"@site/blog/javascript/JavaScript202205.md",title:"JavaScript\uff1aFile API\u548cBlob API",description:"web\u5e94\u7528\u7684\u75db\u70b9\u5c31\u662f\u4e0d\u80fd\u64cd\u4f5c\u8ba1\u7b97\u673a\u4e0a\u7684\u6587\u4ef6\u3002File API\u548cBlob API\u53ef\u4ee5\u5b89\u5168\u8bbf\u95ee\u5230\u5ba2\u6237\u7aef\u4e0a\u7684\u6587\u4ef6\u3002",date:"2023-02-08T08:38:11.000Z",formattedDate:"2023\u5e742\u67088\u65e5",tags:[{label:"JavaScript",permalink:"/blog/tags/java-script"}],readingTime:9.86,hasTruncateMarker:!1,authors:[{name:"\u8bfb\u5fc3\u60a6",title:"\u524d\u7aef\u5f00\u53d1\u653b\u57ce\u72ee",url:"https://github.com/duxinyues/",email:"yongyuan253015@gmail.com",imageURL:"https://avatars.githubusercontent.com/u/29058884?v=4",key:"duxinyues"}],frontMatter:{sidebar_position:5,id:"JavaScript\uff1aFile API\u548cBlob API",title:"JavaScript\uff1aFile API\u548cBlob API",authors:"duxinyues",tags:["JavaScript"]},prevItem:{title:"JavaScript\uff1aPromise\u8fdb\u9636\u77e5\u8bc6",permalink:"/blog/javascript/JavaScript202204"},nextItem:{title:"JavaScript\uff1aFetch",permalink:"/blog/javascript/JavaScript202206"}},p={authorsImageUrls:[void 0]},s=[{value:"File\u7c7b\u578b",id:"file\u7c7b\u578b",level:2},{value:"FileReader\u7c7b\u578b",id:"filereader\u7c7b\u578b",level:4},{value:"Blob",id:"blob",level:2},{value:"Blob URL",id:"blob-url",level:4}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"web\u5e94\u7528\u7684\u75db\u70b9\u5c31\u662f\u4e0d\u80fd\u64cd\u4f5c\u8ba1\u7b97\u673a\u4e0a\u7684\u6587\u4ef6\u3002File API\u548cBlob API\u53ef\u4ee5\u5b89\u5168\u8bbf\u95ee\u5230\u5ba2\u6237\u7aef\u4e0a\u7684\u6587\u4ef6\u3002"),(0,l.kt)("h2",{id:"file\u7c7b\u578b"},"File\u7c7b\u578b"),(0,l.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u5728html\u8868\u5355\u4e2d\u76f4\u63a5\u8bbf\u95ee\u6587\u4ef6\uff0c\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n</head>\n<body>\n    <input type="file">\n</body>\n</html>\n')),(0,l.kt)("p",null,"\u6548\u679c\u5982\u56fe\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/cdc88f6c79594a36a4439722ad74d81b.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,l.kt)("p",null,"\u5f53\u6211\u4eec\u9009\u62e9\u6587\u4ef6\u540e\uff0c\u53ef\u4ee5\u8bfb\u51fa\u6587\u4ef6\u5f97\u5230\u540d\u79f0\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/908ef48b7a2d46ffaa0ed928207fdbbf.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,l.kt)("p",null,"\u9009\u4e2d\u540e\u7684\u6587\u4ef6\u4e2d\uff0c\u6bcf\u4e00\u4e2aFile\u5bf9\u8c61\u4e2d\u90fd\u53ea\u6709\u4e00\u4e9b\u53ea\u8bfb\u5c5e\u6027\uff0c\u6bd4\u5982name\u3001size\u548ctype\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/9c038c29f32e4918bd41851c06f3bc04.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,l.kt)("h4",{id:"filereader\u7c7b\u578b"},"FileReader\u7c7b\u578b"),(0,l.kt)("p",null,"FileReader\u7c7b\u578b\u662f\u4e00\u79cd\u5f02\u6b65\u6587\u4ef6\u8bfb\u53d6\u673a\u5236\uff0c\u63d0\u4f9b\u4e86\u96c6\u4e2d\u8bfb\u53d6\u6587\u4ef6\u6570\u636e\u7684\u65b9\u6cd5\uff1a"),(0,l.kt)("p",null,"readAsText(file,encoding)\uff1a\u4ece\u6587\u4ef6\u4e2d\u8bfb\u53d6\u7eaf\u6587\u672c\u5185\u5bb9\u5e76\u4e14\u4fdd\u5b58\u5728result\u5c5e\u6027\u4e2d\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u8868\u793a\u7f16\u7801\uff0c\u53ef\u9009\u53c2\u6570\u3002"),(0,l.kt)("p",null,"readAsDataURL(file)\uff1a\u8bfb\u53d6\u6587\u4ef6\u5e76\u4e14\u5c06\u5185\u5bb9\u7684\u6570\u636eURI\u4fdd\u5b58\u5728result\u5c5e\u6027\u4e2d\u3002"),(0,l.kt)("p",null,"readAsBinaryString(file)\uff1a\u8bfb\u53d6\u6587\u4ef6\u5e76\u4e14\u628a\u6bcf\u4e00\u4e2a\u5b57\u7b26\u7684\u4e8c\u8fdb\u5236\u6570\u636e\u4fdd\u5b58\u5728result\u5c5e\u6027\u3002"),(0,l.kt)("p",null,"readAsArrayBuffer(file)\uff1a\u8bfb\u53d6\u6587\u4ef6\u5e76\u4e14\u628a\u5185\u5bb9\u4ee5ArrayBuffer\u5f62\u5f0f\u4fdd\u5b58\u5728result\u4e2d\u3002"),(0,l.kt)("p",null,"\u5728\u8bfb\u53d6\u6587\u4ef6\u4e2d\uff0c\u4f1a\u89e6\u53d1\u51e0\u4e2a\u4e8b\u4ef6\uff1aprogress\u3001error\u548cload\uff0c\u8868\u793a\u8fdb\u5ea6\u3001\u53d1\u751f\u9519\u8bef\u548c\u8bfb\u53d6\u5b8c\u6210\u3002"),(0,l.kt)("p",null,"progress\u4e8b\u4ef6\u6bcf50\u6beb\u79d2\u5c31\u4f1a\u89e6\u53d1\u4e00\u6b21\uff0c\u5728\u8fd9\u671f\u95f4\u53ef\u4ee5\u8bfb\u53d6FileReader\u7684result\u5c5e\u6027\uff1b"),(0,l.kt)("p",null,"error\u4e8b\u4ef6\uff0c\u5728\u65e0\u6cd5\u8bfb\u53d6\u6587\u4ef6\u7684\u65f6\u5019\u89e6\u53d1\uff0cerror\u5c5e\u6027\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u53ea\u5305\u542b\u4e00\u4e2a\u5c5e\u6027\uff1acode\u3002\u8fd9\u4e2a\u9519\u8bef\u7801\u7684\u503c\u53ef\u80fd\u662f1\uff08\u672a\u627e\u5230\u6587\u4ef6\uff09\u30012\uff08\u5b89\u5168\u9519\u8bef\uff09\u30013\uff08\u8bfb\u53d6\u88ab\u4e2d\u65ad\uff09\u30014\uff08\u6587\u4ef6\u4e0d\u53ef\u8bfb\uff09\u62165\uff08\u7f16\u7801\u9519\u8bef\uff09"),(0,l.kt)("p",null,"load\u4e8b\u4ef6\u4f1a\u5728\u6210\u529f\u52a0\u8f7d\u540e\u89e6\u53d1\uff0c\u5982\u679cerror\u4e8b\u4ef6\u89e6\u53d1\uff0c\u90a3\u4e48\u4e0d\u4f1a\u89e6\u53d1load\u4e8b\u4ef6\n\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n</head>\n\n<body>\n  <input type="file" id="file">\n\n  <div type="text" id="output"></div>\n\n  <div id="progress"></div>\n  <script>\n    let filesList = document.getElementById("file");\n    filesList.addEventListener("change", (event) => {\n      let info = "",\n          output = document.getElementById("output"),\n          progress = document.getElementById("progress"),\n          files = event.target.files,\n          type = "default",\n          reader = new FileReader();\n      if (/image/.test(files[0].type)) {\n        reader.readAsDataURL(files[0]);\n        type = "image";\n      } else {\n        reader.readAsText(files[0]);\n        type = "text";\n      }\n      reader.onerror = function() {\n        output.innerHTML = "Could not read file, error code is " +\n            reader.error.code;\n      };\n      reader.onprogress = function(event) {\n        if (event.lengthComputable) {\n          console.log(`${event.loaded}/${event.total}`)\n          progress.innerHTML = `${event.loaded}/${event.total}`;\n        }\n      };\n      reader.onload = function() {\n        let html = "";\n        switch(type) {\n          case "image":\n            html = `<img src="${reader.result}">`;\n            break;\n          case "text":\n            html = reader.result;\n            break;\n        }\n        output.innerHTML = html;\n      };\n    });\n  <\/script>\n</body>\n\n</html>\n\n')),(0,l.kt)("h2",{id:"blob"},"Blob"),(0,l.kt)("p",null,"Blob\u662f\u8868\u793a\u4e8c\u8fdb\u5236\u5927\u5bf9\u8c61\uff0c\u662fJavaScript\u5bf9\u4e0d\u53ef\u4fee\u6539\u7684\u4e8c\u8fdb\u5236\u6570\u636e\u7684\u5c01\u88c5\u7c7b\u578b\uff0c\u5305\u542b\u5b57\u7b26\u4e32\u7684\u6570\u7ec4\u3001ArrayBuffers\u3001ArrayBufferViews\uff0c"),(0,l.kt)("p",null,"Blob\u5bf9\u8c61\u6709\u4e00\u4e2asize\u5c5e\u6027\u548ctype\u5c5e\u6027\uff0cslice\u65b9\u6cd5\u7528\u4e8e\u8fdb\u4e00\u6b65\u5207\u5206\u6570\u636e\uff0c\u53e6\u5916\u4e5f\u53ef\u4ee5\u4f7f\u7528FileReader\u4eceBlob\u4e2d\u8bfb\u53d6\u6570\u636e\u3002\u53ea\u8bfb\u53d6\u4e00\u90e8\u5206\u6587\u4ef6\u53ef\u4ee5\u8282\u7701\u65f6\u95f4\uff0c\u6bd4\u5982\u73b0\u5728\u53ea\u8bfb\u53d6\u6587\u4ef6\u7684\u524d10\u4e2a\u5b57\u8282\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n</head>\n\n<body>\n  <input type="file" id="file">\n\n  <div type="text" id="output"></div>\n\n  <div id="progress"></div>\n  <script>\n    let filesList = document.getElementById("files-list");\n    filesList.addEventListener("change", (event) => {\n      let info = "",\n        output = document.getElementById("output"),\n        progress = document.getElementById("progress"),\n        files = event.target.files,\n        reader = new FileReader(),\n        blob = blobSlice(files[0], 0, 10);\n      if (blob) {\n        reader.readAsText(blob);\n        reader.onerror = function () {\n          output.innerHTML = "Could not read file, error code is " +\n            reader.error.code;\n        };\n        reader.onload = function () {\n          output.innerHTML = reader.result;\n        };\n      } else {\n        console.log("Your browser doesn\'t support slice().");\n      }\n    });\n  <\/script>\n</body>\n\n</html>\n\n')),(0,l.kt)("h4",{id:"blob-url"},"Blob URL"),(0,l.kt)("p",null,"\u662f\u5f15\u7528\u5b58\u50a8\u5728File\u6216\u8005Blob\u4e2d\u6570\u636e\u7684URL\uff0c\u6709\u70b9\u5c31\u662f\u4e0d\u7528\u628a\u6587\u4ef6\u5185\u5bb9\u8bfb\u53d6\u5230JavaScript\u4e2d\u53ef\u4ee5\u4f7f\u7528\u6587\u4ef6\uff0c\u53ea\u9700\u8981\u5728\u5bf9\u5e94\u4f4d\u7f6e\u63d0\u4f9b\u5bf9\u8c61\u7684URL\u5373\u53ef\u3002\u521b\u5efa\u5bf9\u8c61URL\uff0c\u4f7f\u7528window.URL.createObjectURL()\u65b9\u6cd5\uff0c\u4f20\u5165File\u6216\u8005Blob\u5bf9\u8c61\uff0c\u5b83\u8fd4\u56de\u4e00\u4e2a\u6307\u5411\u5185\u5b58\u4e2d\u5730\u5740\u7684\u5b57\u7b26\u4e32\u3002\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n</head>\n\n<body>\n  <input type="file" id="file" multiple>\n\n  <div type="text" id="output"></div>\n\n  <div id="progress"></div>\n  <script>\n    let filesList = document.getElementById("file");\n    filesList.addEventListener("change", (event) => {\n      let info = "",\n        output = document.getElementById("output"),\n        progress = document.getElementById("progress"),\n        files = event.target.files,\n        reader = new FileReader(),\n        url=window.URL.createObjectURL(files[0]);\n        console.log("url",url)\n      if (url) {\n        if (/image/.test(files[0].type)) {\n          output.innerHTML=`<img src="${url}">`;\n        } else {\n          output.innerHTML = "Not an image.";\n        }\n      } else {\n        output.innerHTML = "Your browser doesn\'t support object URLs.";\n      }\n    });\n  <\/script>\n</body>\n\n</html>\n\n')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/c178f3879caa4192b7ab92b8ea1208ac.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})))}d.isMDXComponent=!0}}]);