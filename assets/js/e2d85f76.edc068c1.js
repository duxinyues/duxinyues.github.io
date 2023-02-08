"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3771],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>h});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),v=o,h=m["".concat(i,".").concat(v)]||m[v]||u[v]||a;return t?n.createElement(h,l(l({ref:r},p),{},{components:t})):n.createElement(h,l({ref:r},p))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=v;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[m]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},7549:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_position:11,id:"JavaScript\uff1a\u6765\u4e00\u6ce2Promise\u7528\u6cd5\u5b9e\u4f8b\uff0c\u53ef\u80fd\u662f\u9762\u8bd5\u9898\u5427",title:"JavaScript\uff1a\u6765\u4e00\u6ce2Promise\u7528\u6cd5\u5b9e\u4f8b\uff0c\u53ef\u80fd\u662f\u9762\u8bd5\u9898\u5427",authors:"duxinyues",tags:["JavaScript"]},l=void 0,s={permalink:"/blog/javascript/JavaScript202211",editUrl:"https://github.com/duxinyues/docusaurus/blob/main/blog/javascript/JavaScript202211.md",source:"@site/blog/javascript/JavaScript202211.md",title:"JavaScript\uff1a\u6765\u4e00\u6ce2Promise\u7528\u6cd5\u5b9e\u4f8b\uff0c\u53ef\u80fd\u662f\u9762\u8bd5\u9898\u5427",description:"\u5bf9Promise\u6709\u4e00\u5b9a\u7684\u4e86\u89e3\u540e\uff0c\u4f46\u662f\u5728\u9762\u5bf9\u4e00\u4e9b\u5173\u4e8ePromise\u7684\u9762\u8bd5\uff0c\u8fd8\u662f\u611f\u89c9\u529b\u4e0d\u4ece\u5fc3\u3002\u73b0\u5728\u6574\u7406\u4e00\u4e0bPromise\u7684\u4f7f\u7528\u573a\u666f\uff1a",date:"2023-02-08T08:38:11.000Z",formattedDate:"2023\u5e742\u67088\u65e5",tags:[{label:"JavaScript",permalink:"/blog/tags/java-script"}],readingTime:6.3,hasTruncateMarker:!1,authors:[{name:"\u8bfb\u5fc3\u60a6",title:"\u524d\u7aef\u5f00\u53d1\u653b\u57ce\u72ee",url:"https://github.com/duxinyues/",email:"yongyuan253015@gmail.com",imageURL:"https://avatars.githubusercontent.com/u/29058884?v=4",key:"duxinyues"}],frontMatter:{sidebar_position:11,id:"JavaScript\uff1a\u6765\u4e00\u6ce2Promise\u7528\u6cd5\u5b9e\u4f8b\uff0c\u53ef\u80fd\u662f\u9762\u8bd5\u9898\u5427",title:"JavaScript\uff1a\u6765\u4e00\u6ce2Promise\u7528\u6cd5\u5b9e\u4f8b\uff0c\u53ef\u80fd\u662f\u9762\u8bd5\u9898\u5427",authors:"duxinyues",tags:["JavaScript"]},prevItem:{title:"JavaScript\uff1a\u6587\u6863\u52a0\u8f7d\u4e8b\u4ef6\u548c\u6d4f\u89c8\u5668\u7684\u91cd\u6392\u3001\u91cd\u7ed8",permalink:"/blog/javascript/JavaScript202210"},nextItem:{title:"JavaScript\uff1aReflect\u5168\u5c40\u5bf9\u8c61\uff0c\u5bf9\u8c61\u4ee3\u7406",permalink:"/blog/javascript/JavaScript202301"}},i={authorsImageUrls:[void 0]},c=[{value:"1\u3001Promise\u548c\u540c\u6b65\u4ee3\u7801\u4e00\u8d77\u6267\u884c",id:"1promise\u548c\u540c\u6b65\u4ee3\u7801\u4e00\u8d77\u6267\u884c",level:6},{value:"2\u3001\u540c\u4e00\u4e2aPromise\u5b9e\u4f8b\u5185resolve\u548creject\u6267\u884c\u5148\u540e",id:"2\u540c\u4e00\u4e2apromise\u5b9e\u4f8b\u5185resolve\u548creject\u6267\u884c\u5148\u540e",level:6},{value:"3\u3001promise\u5b9e\u4f8b\u91cd\u590d\u6267\u884c",id:"3promise\u5b9e\u4f8b\u91cd\u590d\u6267\u884c",level:6},{value:"4\u3001\u5728then\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u5f02\u5e38",id:"4\u5728then\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u5f02\u5e38",level:6},{value:"5\u3001then\u7684\u53c2\u6570\u4e0d\u662f\u51fd\u6570",id:"5then\u7684\u53c2\u6570\u4e0d\u662f\u51fd\u6570",level:6}],p={toc:c};function m(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5bf9Promise\u6709\u4e00\u5b9a\u7684\u4e86\u89e3\u540e\uff0c\u4f46\u662f\u5728\u9762\u5bf9\u4e00\u4e9b\u5173\u4e8ePromise\u7684\u9762\u8bd5\uff0c\u8fd8\u662f\u611f\u89c9\u529b\u4e0d\u4ece\u5fc3\u3002\u73b0\u5728\u6574\u7406\u4e00\u4e0bPromise\u7684\u4f7f\u7528\u573a\u666f\uff1a"),(0,o.kt)("h6",{id:"1promise\u548c\u540c\u6b65\u4ee3\u7801\u4e00\u8d77\u6267\u884c"},"1\u3001Promise\u548c\u540c\u6b65\u4ee3\u7801\u4e00\u8d77\u6267\u884c"),(0,o.kt)("p",null,"\u770b\u4e00\u4e0b\u8fd9\u6bb5\u4ee3\u7801\u7684\u7ed3\u679c\u662f\u4ec0\u4e48\uff1f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const promise = new Promise((resolve,reject)=>{\n    console.log(1);\n    resolve();\n    console.log(2)\n})\npromise.then(()=>{\n    console.log(3)\n})\n\nconsole.log(4)\n")),(0,o.kt)("p",null,"promise\u521b\u5efa\u540e\u5c31\u7acb\u5373\u6267\u884c\uff0c\u90a3\u5c31\u6216\u8f93\u51fa1\uff0c2\uff0c4\u3002\nresolve\u6216\u8005reject\u51fd\u6570\u4f1a\u5728\u540c\u6b65\u4ee3\u7801\u4e4b\u540e\u6267\u884c\uff0c\u7b49\u5230resolve\u6216\u8005reject\u6267\u884c\u540e\uff0c\u5c31\u8fdb\u5165\u4e86then\u6216\u8005catch\u51fd\u6570\u3002\u6240\u4ee5\u6700\u597d\u624d\u8f93\u51fa3\u3002"),(0,o.kt)("h6",{id:"2\u540c\u4e00\u4e2apromise\u5b9e\u4f8b\u5185resolve\u548creject\u6267\u884c\u5148\u540e"},"2\u3001\u540c\u4e00\u4e2aPromise\u5b9e\u4f8b\u5185resolve\u548creject\u6267\u884c\u5148\u540e"),(0,o.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const promise = new Promise((resolve,reject)=>{\n    resolve(1);\n    reject(2);\n    resolve(3)\n})\npromise.then((res)=>{\n    console.log("then",res)\n}).catch(err=>{\n    console.log("catch",err)\n})\n')),(0,o.kt)("p",null,"\u4f1a\u8f93\u51fa\u4ec0\u4e48\u6837\u7684\u7ed3\u679c\u5462\uff1f\n\u7b54\u6848\u662fthen 1\u3002"),(0,o.kt)("p",null,"\u8981\u8bb0\u4f4f\uff0cpromise\u72b6\u6001\u7684\u53d8\u66f4\u53ea\u6709\u4e00\u6b21\uff0c\u5f53\u6267\u884cresolve\u6216\u8005reject\uff0c\u5c31\u5b8c\u6210\u4e00\u6b21\u72b6\u6001\u53d8\u66f4\u3002"),(0,o.kt)("h6",{id:"3promise\u5b9e\u4f8b\u91cd\u590d\u6267\u884c"},"3\u3001promise\u5b9e\u4f8b\u91cd\u590d\u6267\u884c"),(0,o.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const promise = new Promise((resolve, reject) => {\n    setTimeout(() => {\n        console.log(1);\n        resolve(2)\n    }, 1000)\n})\nconst start = Date.now();\n\n\npromise.then((res) => {\n    console.log(res, Date.now() - start)\n})\n\npromise.then(res => {\n    console.log(res, Date.now() - start)\n})\n")),(0,o.kt)("p",null,"\u7b54\u6848\u662f\u4e00\u79d2\u540e\u8f93\u51fa1\uff0c 2 1017\uff0c2 1017"),(0,o.kt)("p",null,"\u5f53promise\u5b9e\u4f8b\u53d8\u66f4\u72b6\u6001\u540e\uff0c\u5c31\u4f1a\u89e6\u53d1\u6240\u6709\u7684then\u6216\u8005catch\u51fd\u6570\uff0c\u6240\u4ee5\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\u7b2c\u4e00\u4e2athen\u548c\u7b2c\u4e8c\u4e2athen\u51fd\u6570\u6267\u884c\u7684\u7ed3\u679c\u662f\u4e00\u6837\u7684\u3002"),(0,o.kt)("h6",{id:"4\u5728then\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u5f02\u5e38"},"4\u3001\u5728then\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u5f02\u5e38"),(0,o.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const promise = new Promise((resolve, reject) => {\n    resolve(20)\n})\npromise.then((res) => {\n    console.log(res);\n    return new Error("Error")\n}).then(res => {\n    console.log(22)\n    console.log(\'then\', res)\n}).catch(err => {\n    console.log("Error", err)\n})\n')),(0,o.kt)("p",null,"\u7b54\u6848\u662f\uff1a\n20\n22\nthen  Error: Error"),(0,o.kt)("p",null,"\u5176\u5b9e\u5728then\u4e2dreturn\u7684\u5f02\u5e38\uff0c\u548cpromise\u6ca1\u6709\u8054\u7cfb\uff0c\u6240\u4ee5\u4e0d\u4f1a\u89e6\u53d1catch\u51fd\u6570\u3002\u800c\u662f\u6309\u7167\u6b63\u5e38\u6d41\u7a0b\u6267\u884c\u4e0b\u53bb\uff0c\u628athen\u4e2dreturn\u7684\u5f02\u5e38\u4f5c\u4e3a\u4e0b\u4e00\u4e2athen\u51fd\u6570\u7684\u7684\u6570\u636e\u6e90\u3002"),(0,o.kt)("p",null,"\u6ce8\u610f\uff1a\u8fd4\u56de\u5f02\u5e38\u548c\u629b\u51fa\u5f02\u5e38\u662f\u4e0d\u540c\u6982\u5ff5\u7684\uff0c\u5982\u679c\u662f\u629b\u51fa\u5f02\u5e38\u5c31\u4f1a\u88abcatch\u51fd\u6570\u6355\u83b7\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const promise = new Promise((resolve, reject) => {\n    resolve(20)\n})\npromise.then((res) => {\n    console.log(res);\n    throw new Error("Error")\n}).then(res => {\n    console.log(22)\n    console.log(\'then\', res)\n}).catch(err => {\n    console.log("Error", err)\n})\n')),(0,o.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\uff1a\n20\nError Error: Error"),(0,o.kt)("h6",{id:"5then\u7684\u53c2\u6570\u4e0d\u662f\u51fd\u6570"},"5\u3001then\u7684\u53c2\u6570\u4e0d\u662f\u51fd\u6570"),(0,o.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const promise = new Promise((resolve, reject) => {\n    resolve(20)\n})\npromise.then(21)\n    .then(res => {\n        console.log('then', res)\n    })\n    .then(Promise.resolve(34))\n    .catch(err => {\n        console.log(\"Error\", err)\n    })\n")),(0,o.kt)("p",null,"\u7b54\u6848\u662f20\u3002"),(0,o.kt)("p",null,"\u56e0\u4e3apromise\u7684then\u51fd\u6570\u6216\u8005catch\u51fd\u6570\u63a5\u53d7\u7684\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5982\u679c\u4f20\u5165\u5176\u4ed6\u503c\uff0c\u90a3\u4e48\u5c31\u4f1a\u4ea7\u751f\u7a7f\u900f\u73b0\u8c61\u3002\u4e5f\u5c31\u662f\u4f20\u5165\u975e\u51fd\u6570\u7684\u503c\u4f1a\u88ab\u5ffd\u7565\u6389\uff0c\u6267\u884c\u540e\u9762\u7684\u51fd\u6570\u3002"),(0,o.kt)("p",null,"\u6682\u65f6\u5230\u8fd9\u91cc\u5427\uff0c\u4ee5\u540e\u9047\u5230\u4e86\u518d\u8bf4\u54c8"))}m.isMDXComponent=!0}}]);