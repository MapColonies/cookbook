"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[7333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={id:"MapColonies-api-auth",title:"Authentication",slug:"authentication",description:"MapColonies API Auth Convention",sidebar_position:2,tags:["auth","API","token","clients"]},i="Authentication",p={unversionedId:"MapColonies/MapColonies-api-auth",id:"MapColonies/MapColonies-api-auth",title:"Authentication",description:"MapColonies API Auth Convention",source:"@site/docs/MapColonies/auth.md",sourceDirName:"MapColonies",slug:"/MapColonies/authentication",permalink:"/developer-portal/pr-preview/pr-107/docs/MapColonies/authentication",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/auth.md",tags:[{label:"auth",permalink:"/developer-portal/pr-preview/pr-107/docs/tags/auth"},{label:"API",permalink:"/developer-portal/pr-preview/pr-107/docs/tags/api"},{label:"token",permalink:"/developer-portal/pr-preview/pr-107/docs/tags/token"},{label:"clients",permalink:"/developer-portal/pr-preview/pr-107/docs/tags/clients"}],version:"current",sidebarPosition:2,frontMatter:{id:"MapColonies-api-auth",title:"Authentication",slug:"authentication",description:"MapColonies API Auth Convention",sidebar_position:2,tags:["auth","API","token","clients"]},sidebar:"docSidebar",previous:{title:"Terms & Abbreviations",permalink:"/developer-portal/pr-preview/pr-107/docs/MapColonies/terms"},next:{title:"Raster",permalink:"/developer-portal/pr-preview/pr-107/docs/MapColonies/Raster/overview"}},l={},s=[{value:"Supplying the token",id:"supplying-the-token",level:2},{value:"Using the token as a query parameter",id:"using-the-token-as-a-query-parameter",level:2},{value:"Using the token as a header",id:"using-the-token-as-a-header",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"In order to make requests either as a service or a client, you will need to identify yourself with a ",(0,a.kt)("inlineCode",{parentName:"p"},"token"),".\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"token")," should be used in ",(0,a.kt)("strong",{parentName:"p"},"every")," request to our services and will allow you to access our services in accordance to the permissions that were given to you.",(0,a.kt)("br",null)),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"All services")," will require an ",(0,a.kt)("inlineCode",{parentName:"p"},"API Token"),", it will be specified in each service description."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The token might have an ",(0,a.kt)("strong",{parentName:"p"},"expiration date"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Important:")," only ",(0,a.kt)("strong",{parentName:"p"},"query parameter")," ",(0,a.kt)("inlineCode",{parentName:"p"},"token")," is currently supported")),(0,a.kt)("h2",{id:"supplying-the-token"},"Supplying the token"),(0,a.kt)("p",null,"When making any request, you need to add a special ",(0,a.kt)("strong",{parentName:"p"},"header")," or ",(0,a.kt)("strong",{parentName:"p"},"query parameter")," in which you supply the token."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"How we supply the token")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Name")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Query"),(0,a.kt)("td",{parentName:"tr",align:null},"token")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Header"),(0,a.kt)("td",{parentName:"tr",align:null},"x-api-key")))),(0,a.kt)("h2",{id:"using-the-token-as-a-query-parameter"},"Using the token as a query parameter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<SERVICE_URL>/SUB/PATH?token=<token>\n")),(0,a.kt)("h2",{id:"using-the-token-as-a-header"},"Using the token as a header"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-curl"},"curl --location --request <http_method> '<SERVICE_URL>' --header 'x-api-key: <token>'\n")))}d.isMDXComponent=!0}}]);