"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[7333],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(v,i(i({ref:t},c),{},{components:r})):n.createElement(v,i({ref:t},c))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61099:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={id:"MapColonies-api-auth",title:"Authentication",slug:"authentication",description:"MapColonies API Auth Convention",sidebar_position:2,tags:["auth","API","token","clients"]},i="Authentication",p={unversionedId:"MapColonies/MapColonies-api-auth",id:"MapColonies/MapColonies-api-auth",title:"Authentication",description:"MapColonies API Auth Convention",source:"@site/docs/MapColonies/auth.md",sourceDirName:"MapColonies",slug:"/MapColonies/authentication",permalink:"/developer-portal/pr-preview/pr-80/docs/MapColonies/authentication",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/auth.md",tags:[{label:"auth",permalink:"/developer-portal/pr-preview/pr-80/docs/tags/auth"},{label:"API",permalink:"/developer-portal/pr-preview/pr-80/docs/tags/api"},{label:"token",permalink:"/developer-portal/pr-preview/pr-80/docs/tags/token"},{label:"clients",permalink:"/developer-portal/pr-preview/pr-80/docs/tags/clients"}],version:"current",sidebarPosition:2,frontMatter:{id:"MapColonies-api-auth",title:"Authentication",slug:"authentication",description:"MapColonies API Auth Convention",sidebar_position:2,tags:["auth","API","token","clients"]},sidebar:"docSidebar",previous:{title:"Terms & Abbreviations",permalink:"/developer-portal/pr-preview/pr-80/docs/MapColonies/terms"},next:{title:"Raster",permalink:"/developer-portal/pr-preview/pr-80/docs/MapColonies/Raster/overview"}},l={},s=[],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"In order to make requests either as a service or a client, you will need to identify yourself with a token.\nThe token, should be used in ",(0,o.kt)("strong",{parentName:"p"},"every")," request to our services and will enable you to access our services in accordance to the permissions that were given to you. ",(0,o.kt)("br",null)),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The token might have an ",(0,o.kt)("strong",{parentName:"p"},"expiration date"))),(0,o.kt)("p",null,"When making any request, you need to add a special ",(0,o.kt)("strong",{parentName:"p"},"header")," or ",(0,o.kt)("strong",{parentName:"p"},"query parameter")," in which you supply the token."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Important:")," only ",(0,o.kt)("strong",{parentName:"p"},"query parameter")," ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," is currently supported")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"All services")," will require an ",(0,o.kt)("inlineCode",{parentName:"p"},"API Token"),", it will be specified in the service description."))}d.isMDXComponent=!0}}]);