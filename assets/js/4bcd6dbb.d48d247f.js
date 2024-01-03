"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3825],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=i(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||s[m]||l;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1436:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:5,slug:"React\uff1aRedux\u548cFlux",title:"React\uff1aRedux\u548cFlux",tags:["react"]},o=void 0,c={permalink:"/react/React\uff1aRedux\u548cFlux",source:"@site/react/react202305.md",title:"React\uff1aRedux\u548cFlux",description:"\x3c!--",date:"2023-02-17T02:41:29.000Z",formattedDate:"2023\u5e742\u670817\u65e5",tags:[{label:"react",permalink:"/react/tags/react"}],readingTime:5.145,hasTruncateMarker:!1,authors:[],frontMatter:{sidebar_position:5,slug:"React\uff1aRedux\u548cFlux",title:"React\uff1aRedux\u548cFlux",tags:["react"]},prevItem:{title:"React\uff1a\u7ec4\u4ef6\u751f\u547d\u5468\u671f\u7ba1\u7406",permalink:"/react/React\uff1a\u7ec4\u4ef6\u751f\u547d\u5468\u671f\u7ba1\u7406"},nextItem:{title:"index",permalink:"/react/index"}},u={authorsImageUrls:[]},i=[{value:"Flux",id:"flux",level:2},{value:"Redux",id:"redux",level:2},{value:"store",id:"store",level:4},{value:"Reducer",id:"reducer",level:4},{value:"Middleware",id:"middleware",level:4},{value:"React-redux",id:"react-redux",level:2},{value:"Provider",id:"provider",level:4},{value:"connect",id:"connect",level:4}],d={toc:i};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"React\uff0c\u7528\u6765\u6784\u5efa\u7528\u6237\u754c\u9762\uff0c\u5b83\u6709\u4e09\u4e2a\u7279\u70b9\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f5c\u4e3aview\uff0c\u6784\u5efa\u4e0a\u7528\u6237\u754c\u9762"),(0,a.kt)("li",{parentName:"ol"},"\u865a\u62dfDOM\uff0c\u76ee\u7684\u5c31\u662f\u9ad8\u6027\u80fdDOM\u6e32\u67d3\u3010diff\u7b97\u6cd5\u3011\u3001\u7ec4\u4ef6\u5316\u3001\u591a\u7aef\u540c\u6784"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u5411\u6570\u636e\u6d41\uff0c\u662f\u4e00\u79cd\u81ea\u4e0a\u800c\u4e0b\u7684\u6e32\u67d3\u65b9\u5f0f\u3002")),(0,a.kt)("h2",{id:"flux"},"Flux"),(0,a.kt)("p",null,"\u5728\u4e00\u4e2aReact\u5e94\u7528\u4e2d\uff0cUI\u90e8\u5206\u662f\u7531\u65e0\u6570\u4e2a\u7ec4\u4ef6\u5d4c\u5957\u6784\u6210\u7684\uff0c\u7ec4\u4ef6\u548c\u7ec4\u4ef6\u4e4b\u95f4\u5c31\u5b58\u5728\u5c42\u7ea7\u5173\u7cfb\uff0c\u4e5f\u5c31\u662f\u7236\u7ec4\u4ef6\u3001\u5b50\u7ec4\u4ef6\u4ee5\u53ca\u9876\u5c42\u7ec4\u4ef6\u3002"),(0,a.kt)("p",null,"\u5f53\u6211\u4eec\u83b7\u53d6\u5230\u6570\u636e\u540e\uff0c\u6839\u636eReact\u81ea\u4e0a\u800c\u4e0b\u7684\u6e32\u67d3\u65b9\u5f0f\uff0c\u6211\u4eec\u628a\u6570\u636e\u4f20\u7ed9\u9876\u5c42\u7ec4\u4ef6\uff0c\u7531\u9876\u5c42\u7ec4\u4ef6\u901a\u8fc7\u5c5e\u6027props\uff0c\u5c06\u6570\u636e\u4f20\u7ed9\u5404\u4e2a\u5b50\u7ec4\u4ef6\uff0c\u8fd9\u6837\u6570\u636e\u5c31\u4e00\u5c42\u4e00\u5c42\u4f20\u9012\u4e0b\u53bb\uff0c\u5404\u4e2a\u5b50\u7ec4\u4ef6\u83b7\u53d6\u81ea\u5df1\u6240\u9700\u7684\u6570\u636e\uff0c\u6700\u7ec8\u5b8c\u6210UI\u7684\u6e32\u67d3\u3002"),(0,a.kt)("p",null,"\u5f53\u6709\u4e00\u4e2a\u6570\u636e\u53d1\u751f\u4e86\u53d8\u5316\u540e\uff0c\u662f\u5982\u4f55\u901a\u77e5\u7ec4\u4ef6\u66f4\u65b0\u5462\uff1f\u601d\u8def\u5982\u4e0b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u4e00\u4e2a\u6570\u636e\u5b58\u50a8store\uff0c\u5b83\u5b58\u50a8\u7684\u662f\u5e94\u7528\u7684\u5f53\u524d\u7684\u72b6\u6001state\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u7528\u6237\u64cd\u4f5c\u5bfc\u81f4\u6570\u636e\u53d8\u66f4\u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u89e6\u53d1\u4e00\u4e2aaction\uff0c\u544a\u77e5store\u6709\u6570\u636e\u53d8\u5316\u4e86\uff0c\u4ee5\u53ca\u54ea\u4e9b\u6570\u636e\u53d1\u751f\u53d8\u5316\uff1b"),(0,a.kt)("li",{parentName:"ol"},"store\u63a5\u6536\u5230\u901a\u77e5\u540e\uff0c\u5c31\u66f4\u65b0\u4fee\u6539\u6570\u636e\uff0c\u8fd4\u56de\u65b0\u7684\u6570\u636e\u4f20\u9012\u5230\u9876\u5c42\u7ec4\u4ef6\u3002\u518d\u8fdb\u884c\u4e00\u6b21\u81ea\u4e0a\u800c\u4e0b\u7684\u6e32\u67d3\uff0c\u4ece\u800c\u8fbe\u5230\u66f4\u65b0UI\u3002")),(0,a.kt)("p",null,"Flux\u662f\u4e00\u79cd\u6570\u636e\u5904\u7406\u7684\u6a21\u5f0f\uff0c\u63cf\u8ff0\u7684\u662f\u5355\u5411\u6570\u636e\u6d41\u7684\u601d\u60f3\u3002\u8ba9\u6570\u636e\u6d41\u53d8\u5f97\u7b80\u5355\uff0c\u65b9\u4fbf\u8c03\u8bd5\u548c\u8ffd\u8e2a\uff0c\u6240\u4ee5\u5b83\u66f4\u9002\u5408\u4e0ereact\u7ed3\u5408\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"Flux\u4e2d\uff0c\u5f15\u5165\u7684dispatch\u3001action\u3001store\u548cview\u6a21\u5757\uff0c\u89e6\u53d1action\u65f6\uff0c\u9700\u8981\u4f7f\u7528dispatch\u6765\u8c03\u5ea6"),(0,a.kt)("h2",{id:"redux"},"Redux"),(0,a.kt)("p",null,"Redux\u662fFLux\u7684\u4e00\u79cd\u5b9e\u73b0\u5f62\u5f0f\uff0c\u4fdd\u7559\u4e86\u6570\u636e\u6d41\u7684\u5355\u5411\u6027\uff0c\u9664\u4e86flux\u539f\u672c\u7684\u51e0\u4e2a\u6a21\u5757\uff0c\u8fd8\u6dfb\u52a0\u4e86reducers\u548cmiddlewares\u3002"),(0,a.kt)("h4",{id:"store"},"store"),(0,a.kt)("p",null,"store\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u6570\u636e\u5b58\u50a8\u4e2d\u5fc3\uff0c\u8fde\u63a5action\u548c\u7ec4\u4ef6\u3010view\u3011\u3002\u5b83\u63a5\u6536\u7ec4\u4ef6\u4f20\u6765\u7684action\uff0c\u7136\u540e\u6839\u636eaction.type\u548caction.payload\u6765\u5bf9store\u4e2d\u7684\u6570\u636e\u8fdb\u884c\u66f4\u65b0\u3002\u6700\u540estore\u901a\u77e5\u7ec4\u4ef6\u6709\u6570\u636e\u53d8\u5316\u3002\u7ec4\u4ef6\u5c31\u83b7\u53d6\u6700\u5148\u7684\u6570\u636e\uff0c\u6765\u5b8c\u6210\u91cd\u65b0\u65b0\u6e32\u67d3\u3002"),(0,a.kt)("p",null,"reducer\u4fee\u6539\u6570\u636e\u540e\uff0c\u5728\u7ec4\u4ef6\u4e2d\u8c03\u7528subscribe\u65b9\u6cd5\uff0csubscribe\u4f20\u5165\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u3002\u5728\u6bcf\u6b21\u8c03\u7528dispatch\u65f6\uff0csubscribe\u4f20\u5165\u7684\u56de\u8c03\u51fd\u6570\u88ab\u89e6\u53d1\uff0c\u8fd9\u6837\u5c31\u5b8c\u6210\u4e86reducer\u4fee\u6539\u6570\u636e\u540e\uff0c\u901a\u77e5\u7ec4\u4ef6\u83b7\u53d6\u6700\u65b0\u6570\u636e\uff0c\u5b9e\u73b0\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u3002"),(0,a.kt)("p",null,"\u5c0f\u603b\u7ed3\u4e00\u4e0b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"store\u4e2d\u6570\u636e\u7684\u4fee\u6539\uff0c\u662f\u901a\u8fc7reducer\u6765\u5b8c\u6210\u7684\uff0c\u8c03\u7528dispatch(action)\uff0caction->reducers->store"),(0,a.kt)("li",{parentName:"ol"},"store\u63d0\u4f9b\u4e86\u6d88\u606f\u53d1\u5e03\u548c\u8ba2\u9605\u529f\u80fd\uff0c\u6765\u5b9e\u73b0\u8fde\u63a5action\u548c\u7ec4\u4ef6\uff0cdispatch\u89e6\u53d1\u6d88\u606f\u53d1\u5e03\uff0csubscribe\u89e6\u53d1\u6d88\u606f\u8ba2\u9605\u3002")),(0,a.kt)("h4",{id:"reducer"},"Reducer"),(0,a.kt)("p",null,"reducer\u662f\u4e00\u4e2a\u7eaf\u51fd\u6570\uff0c\u7528\u6765\u4fee\u6539store\u6570\u636e\u7684\u3002\u5b83\u6709\u4f18\u52bf\uff1a\u6570\u636e\u62c6\u89e3\u3002"),(0,a.kt)("p",null,"redux\u6709\u4e00\u4e2a\u539f\u5219\uff0c\u5c31\u662f\u5355\u4e00\u7684\u6570\u636e\u6e90\uff0c\u6574\u4e2a\u5e94\u7528\uff0c\u53ea\u6709\u4e00\u4e2astore\uff0c\u5b58\u50a8\u7740\u6240\u6709\u7684\u6570\u636e\u3002\u5982\u679c\u4e00\u4e2a\u5e94\u7528\u5b58\u5728\u591a\u4e2a\u5e94\u7528\u7684\u8bdd\uff0c\u5e76\u4e14store\u4e4b\u95f4\u5b58\u5728\u6570\u636e\u5173\u8054\u5173\u7cfb\uff0c\u90a3\u4e48\u5904\u7406\u8d77\u6765\u6bd4\u8f83\u9ebb\u70e6\u3002"),(0,a.kt)("p",null,"\u5355\u4e00\u6570\u636e\u6e90\uff0c\u4e5f\u6709\u4e00\u4e2a\u95ee\u9898\uff0c\u90a3\u5c31\u662f\u6570\u636e\u7ed3\u6784\u5d4c\u5957\u592a\u6df1\uff0c\u5bfc\u81f4\u6570\u636e\u8bbf\u95ee\u7e41\u7410\u3002"),(0,a.kt)("p",null,"\u6240redux\u63d0\u51fa\u901a\u8fc7\u5b9a\u4e49\u591a\u4e2areducer\u5bf9\u6570\u636e\u8fdb\u884c\u8bbf\u95ee\u548c\u4fee\u6539\uff0c\u6700\u540e\u901a\u8fc7combineReducers\u51fd\u6570\uff0c\u6765\u7ec4\u5408\u6240\u6709\u7684\u6570\u636e\u3002\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { combineReducers } from "redux";\nimport menuReducer from "./menu";\nconst reducers = combineReducers({\n    menus: menuReducer,\n});\n\nexport default reducers\n')),(0,a.kt)("p",null,"\u8fd9\u5c31\u662fredux\u7684\u6570\u636e\u62c6\u89e3\u3002"),(0,a.kt)("h4",{id:"middleware"},"Middleware"),(0,a.kt)("p",null,"Middleware\u662f\u4e2d\u95f4\u4ef6\uff0cMiddleware\u5904\u7406\u5bf9\u8c61\u662faction\uff0c\u901a\u8fc7\u5bf9action\u7684type\u5c5e\u6027\u8fdb\u884c\u5224\u65ad\uff0c\u91c7\u53d6\u4e0d\u540c\u7684\u64cd\u4f5c\u3002"),(0,a.kt)("h2",{id:"react-redux"},"React-redux"),(0,a.kt)("p",null,"\u4e3a\u4e86\u8ba9redux\u548creact\u66f4\u597d\u7684\u7ed3\u5408\uff0c\u5c31\u9700\u8981\u5f15\u5165React-redux\uff0c\u5b83\u63d0\u4f9b\u4e86\u4e24\u4e2aAPI\uff1aProvider\u548cconnect"),(0,a.kt)("h4",{id:"provider"},"Provider"),(0,a.kt)("p",null,"Provider\u7ec4\u4ef6\u4f5c\u7528\u5c31\u662f\u628a\u552f\u4e00\u7684\u6570\u636e\u6e90store\u4f20\u7ed9\u4efb\u610f\u7ec4\u4ef6\u3002"),(0,a.kt)("h4",{id:"connect"},"connect"),(0,a.kt)("p",null,"connect\u4f5c\u7528\u5c31\u662f\u8ba9\u7ec4\u4ef6\u548cstore\u8fdb\u884c\u5173\u8054\u3002\u9700\u8981\u5b9a\u4e49\u4e24\u4e2a\u51fd\u6570mapStateToProps\u548cmapDispatchToProps\uff0c\u5982\u679c\u4e0d\u60f3\u4f7f\u7528connect\u7684\u8bdd\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7useSelector,useDispatch\uff0c\u4e5f\u5c31\u662fReact-redux\u5bf9\u5e94\u7684hooksAPI\uff0c\u6765\u5b8c\u6210\u7ec4\u4ef6\u548cstore\u5173\u8054\u3002"))}p.isMDXComponent=!0}}]);