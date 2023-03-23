"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[197],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(n),y=a,m=u["".concat(s,".").concat(y)]||u[y]||g[y]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=y;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},8693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:0,slug:"es6",title:"ES6\uff1aProxy\u4ee3\u7406",authors:"duxinyues",tags:["JavaScript"]},l=void 0,p={permalink:"/es6",editUrl:"https://github.com/duxinyues/blog/blob/main/blog/javascript/es6202302192144.md",source:"@site/blog/javascript/es6202302192144.md",title:"ES6\uff1aProxy\u4ee3\u7406",description:"proxy\u4ee3\u7406\uff0c\u5c31\u662f\u5728\u76ee\u6807\u5bf9\u8c61\u7684\u524d\u9762\u8bbe\u7f6e\u4e00\u4e2a\u62e6\u622a\u5c42\uff0c\u5916\u754c\u5728\u8bbf\u95ee\u8fd9\u4e2a\u5bf9\u8c61\u7684\u65f6\u5019\uff0c\u5fc5\u987b\u7ecf\u8fc7\u62e6\u622a\u5c42\u3002",date:"2023-02-19T14:01:20.000Z",formattedDate:"2023\u5e742\u670819\u65e5",tags:[{label:"JavaScript",permalink:"/tags/java-script"}],readingTime:6.41,hasTruncateMarker:!1,authors:[{name:"\u8bfb\u5fc3\u60a6",title:"\u524d\u7aef\u5f00\u53d1\u653b\u57ce\u72ee",url:"https://github.com/duxinyues/",email:"yongyuan253015@gmail.com",imageURL:"https://avatars.githubusercontent.com/u/29058884?v=4",key:"duxinyues"}],frontMatter:{sidebar_position:0,slug:"es6",title:"ES6\uff1aProxy\u4ee3\u7406",authors:"duxinyues",tags:["JavaScript"]},prevItem:{title:"3.3-\u524d\u7aef\u768410\u4e2a\u95ee\u9898",permalink:"/3.3-\u524d\u7aef\u768410\u4e2a\u95ee\u9898"},nextItem:{title:"JavaScript\uff1a\u9632\u6296\u548c\u8282\u6d41",permalink:"/JavaScript\uff1a\u9632\u6296\u548c\u8282\u6d41"}},s={authorsImageUrls:[void 0]},i=[{value:"Proxy\u652f\u6301\u7684\u62e6\u622a\u64cd\u4f5c",id:"proxy\u652f\u6301\u7684\u62e6\u622a\u64cd\u4f5c",level:3},{value:"get(target,Prophet,receiver)",id:"gettargetprophetreceiver",level:4},{value:"set()",id:"set",level:4},{value:"has()",id:"has",level:4},{value:"construct()",id:"construct",level:4},{value:"apply()",id:"apply",level:4},{value:"defineProperty()",id:"defineproperty",level:4}],c={toc:i};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"proxy\u4ee3\u7406\uff0c\u5c31\u662f\u5728\u76ee\u6807\u5bf9\u8c61\u7684\u524d\u9762\u8bbe\u7f6e\u4e00\u4e2a\u62e6\u622a\u5c42\uff0c\u5916\u754c\u5728\u8bbf\u95ee\u8fd9\u4e2a\u5bf9\u8c61\u7684\u65f6\u5019\uff0c\u5fc5\u987b\u7ecf\u8fc7\u62e6\u622a\u5c42\u3002\n\u6211\u4eec\u53ef\u4ee5\u5728\u62e6\u622a\u5c42\u505a\u4e00\u4e9b\u8fc7\u6ee4\u6216\u8005\u662f\u6539\u5199\u7684\u64cd\u4f5c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const proxy = new Proxy({}, {\n    get: () => {\n        console.log("get");\n    },\n    set: () => {\n        console.log("set")\n    }\n})\n\nproxy.count = 1; // set\n++proxy.count; // get\n')),(0,a.kt)("p",null,"Proxy\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u62e6\u622a\u76ee\u6807\u5bf9\u8c61\uff1b\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u8bbe\u7f6e\u62e6\u622a\u7684\u64cd\u4f5c\uff0c\u6240\u8c13\u7684\u62e6\u622a\uff0c\u4e00\u822c\u90fd\u662f\u6709\u4e00\u4e9b\u64cd\u4f5c\u884c\u4e3a\u7684\uff0c\u5982\u679c\u5728\u62e6\u622a\u5c42\u6ca1\u6709\u8bbe\u7f6e\u4efb\u4f55\u64cd\u4f5c\u7684\u8bdd\uff0c\u5c31\u4f1a\u76f4\u63a5\u8bbf\u95ee\u76ee\u6807\u5bf9\u8c61\u3002"),(0,a.kt)("h3",{id:"proxy\u652f\u6301\u7684\u62e6\u622a\u64cd\u4f5c"},"Proxy\u652f\u6301\u7684\u62e6\u622a\u64cd\u4f5c"),(0,a.kt)("h4",{id:"gettargetprophetreceiver"},"get(target,Prophet,receiver)"),(0,a.kt)("p",null,"\u62e6\u622a\u5bf9\u8c61\u7684\u8bfb\u53d6\u5c5e\u6027\u64cd\u4f5c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const proxy = new Proxy({ name: "duXin", count: 90 }, {\n    get: () => {\n        console.log("get");\n        return 100\n    },\n})\n\nconsole.log(proxy.name)\n')),(0,a.kt)("p",null,"\u5728\u8bbf\u95ee\u76ee\u6807\u5bf9\u8c61\u7684\u65f6\u5019\uff0c\u65e0\u8bba\u662fname\u5c5e\u6027\u8fd8\u662fcount\u5c5e\u6027\uff0c\u90fd\u4f1a\u8fd4\u56de100\uff0c\u56e0\u4e3a\u5728\u62e6\u622a\u5c42\u8bbe\u7f6e\u8bfb\u53d6\u5c5e\u6027\u65f6\u90fd\u8fd4\u56de100\u3002"),(0,a.kt)("h4",{id:"set"},"set()"),(0,a.kt)("p",null,"\u65b9\u6cd5\u662f\u8bbe\u7f6e\u5c5e\u6027\u503c\u64cd\u4f5c\u7684\u6355\u83b7\u5668\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const proxy_set = new Proxy({}, {\n    set: function (target, prop, value, receiver) {\n        target[prop] = value;\n        console.log('property set: ' + prop + ' = ' + value);\n        return true;\n    }\n})\n\nconsole.log(\"======proxy_set=======\")\nconsole.log('name' in proxy_set); // false\nproxy_set.name = 'duXin'; // property set: name = duXin\n\nconsole.log('name' in proxy_set); // true\n")),(0,a.kt)("h4",{id:"has"},"has()"),(0,a.kt)("p",null,"\u5bf9in\u64cd\u4f5c\u7b26\u7684\u4ee3\u7406\u65b9\u6cd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const targetObj = {\n    _secret: 'easily scared',\n    eyeCount: 4\n};\nconst proxy_has = new Proxy(targetObj, {\n    has: (target, key) => {\n        console.log(\"key==\",key)\n        if (key.includes('_')) {\n            return false;\n        }\n        return key in target;\n    }\n})\n\nconsole.log('eyeCount' in targetObj); // true\nconsole.log('_secret' in proxy_has); // false\n")),(0,a.kt)("h4",{id:"construct"},"construct()"),(0,a.kt)("p",null,"\u62e6\u622anew\u64cd\u4f5c\u7b26\uff0c\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u5bf9\u8c61\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'function proxy_construct_obj(disposition){\n    this.disposition = disposition;\n}\nconst proxyConstruct = new Proxy(proxy_construct_obj, {\n    construct: function (target, args) {\n        return new target(...args);\n    }\n})\n\nconsole.log(new proxyConstruct("duXinYue").disposition)\n')),(0,a.kt)("h4",{id:"apply"},"apply()"),(0,a.kt)("p",null,"\u62e6\u622a\u51fd\u6570\u7684\u8c03\u7528\u3002\n\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var p = new Proxy(target, {\n  apply: function(target, thisArg, argumentsList) {\n  }\n});\n")),(0,a.kt)("p",null,"target\uff1a\u76ee\u6807\u5bf9\u8c61\uff0c\u4e5f\u5c31\u662f\u51fd\u6570\nthisArg\uff1a\u88ab\u8c03\u7528\u65f6\u7684\u4e0a\u4e0b\u6587\u5bf9\u8c61\nargumentsList\uff1a\u88ab\u8c03\u7528\u65f6\u7684\u53c2\u6570\uff0c\u662f\u4e00\u4e2a\u7c7b\u6570\u7ec4\u3002"),(0,a.kt)("p",null,"\u58f0\u660e\u4e00\u4e2a\u51fd\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function sum(a, b) {\n    return a + b;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'\nconst proxy_apply = new Proxy(sum, {\n    apply: (target,thisArg, argumentsList) => {\n        console.log("target",target,thisArg, argumentsList)\n        return target(argumentsList[0], argumentsList[1]) * 10;\n    }\n})\n\nconsole.log(proxy_apply(1,2)); //30\n')),(0,a.kt)("h4",{id:"defineproperty"},"defineProperty()"),(0,a.kt)("p",null,"\u62e6\u622a\u5bf9\u8c61\u7684 Object.defineProperty() \u64cd\u4f5c\u7b26\u3002\n\u8fd9\u662f\u8bed\u6cd5\uff1a\n",(0,a.kt)("inlineCode",{parentName:"p"},"defineProperty: function(target, property, descriptor) {}"),"\ntarget\uff1a\u76ee\u6807\u5bf9\u8c61\uff0c\nproperty\uff1a\u88ab\u68c0\u7d22\u7684\u5c5e\u6027\u540d\ndescriptor\uff1a\u5f85\u5b9a\u4e49\u6216\u8005\u4fee\u6539\u7684\u5c5e\u6027\u7684\u63cf\u8ff0\u7b26"),(0,a.kt)("p",null,"defineProperty\u7684\u8fd4\u56de\u503c\u5fc5\u987b\u662fBoolean\u503c\uff0c\u8868\u793a\u5bf9\u8be5\u5c5e\u6027\u64cd\u4f5c\u662f\u5426\u6210\u529f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var desc = { configurable: true, enumerable: true, value: 10 };\nvar defineProperty = new Proxy(desc, {\n    defineProperty: function (target, prop, descriptor) {\n        console.log('called: ' + prop);\n        Reflect.defineProperty(target, prop, descriptor);\n    }\n});\n\ndefineProperty.name = \"908\"\nconsole.log(\"obj\", defineProperty); // { configurable: true, enumerable: true, value: 10, name: '908' }\n")))}u.isMDXComponent=!0}}]);