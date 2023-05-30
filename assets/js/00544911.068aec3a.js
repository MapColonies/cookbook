"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[7802],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),i=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=i(a),m=n,u=g["".concat(c,".").concat(m)]||g[m]||d[m]||o;return a?r.createElement(u,l(l({ref:t},p),{},{components:a})):r.createElement(u,l({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[g]="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3025:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));const o={id:"raster-catalog-service",slug:"raster-catalog-service",title:"Catalog \ud83d\uddc3\ufe0f",description:"Discover all availabale raster layers",tags:["catalog","raster","API","csw","ogc"]},l="Catalog Service \ud83d\uddc3\ufe0f",s={unversionedId:"MapColonies/Raster/services/catalog/raster-catalog-service",id:"MapColonies/Raster/services/catalog/raster-catalog-service",title:"Catalog \ud83d\uddc3\ufe0f",description:"Discover all availabale raster layers",source:"@site/docs/MapColonies/Raster/services/catalog/README.md",sourceDirName:"MapColonies/Raster/services/catalog",slug:"/MapColonies/Raster/services/catalog/raster-catalog-service",permalink:"/docs/MapColonies/Raster/services/catalog/raster-catalog-service",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/Raster/services/catalog/README.md",tags:[{label:"catalog",permalink:"/docs/tags/catalog"},{label:"raster",permalink:"/docs/tags/raster"},{label:"API",permalink:"/docs/tags/api"},{label:"csw",permalink:"/docs/tags/csw"},{label:"ogc",permalink:"/docs/tags/ogc"}],version:"current",frontMatter:{id:"raster-catalog-service",slug:"raster-catalog-service",title:"Catalog \ud83d\uddc3\ufe0f",description:"Discover all availabale raster layers",tags:["catalog","raster","API","csw","ogc"]},sidebar:"docSidebar",previous:{title:"Services",permalink:"/docs/category/services"},next:{title:"Profile v1",permalink:"/docs/MapColonies/Raster/services/catalog/raster-catalog-profile-v1"}},c={},i=[],p={toc:i},g="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(g,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"catalog-service-\ufe0f"},"Catalog Service \ud83d\uddc3\ufe0f"),(0,n.kt)("p",null," ",(0,n.kt)("a",{parentName:"p",href:"/docs/ogc/protocols/ogc-csw"},"Catalog Service for the Web (CSW)")," is a standard for exposing a catalog of geospatial records in XML on the Internet (over HTTP). The catalog is made up of records that describe geospatial data, geospatial services (e.g. ",(0,n.kt)("a",{parentName:"p",href:"/docs/ogc/protocols/ogc-wmts"},"WMTS"),"), and related resources."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Authentication must be integrated in order to communicate with map And catalog services."),(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"See the principles ",(0,n.kt)("a",{parentName:"strong",href:"/docs/MapColonies/authentication"},"here")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Request")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"HTTP method binding(s)")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetCapabilities"),(0,n.kt)("td",{parentName:"tr",align:null},"GET (KVP) / POST (XML) / SOAP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DescribeRecord"),(0,n.kt)("td",{parentName:"tr",align:null},"GET (KVP) / POST (XML) / SOAP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetRecords"),(0,n.kt)("td",{parentName:"tr",align:null},"GET (KVP) / POST (XML) / SOAP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetRecordById"),(0,n.kt)("td",{parentName:"tr",align:null},"GET (KVP) / POST (XML) / SOAP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetRepositoryItem"),(0,n.kt)("td",{parentName:"tr",align:null},"GET (KVP)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GetDomain"),(0,n.kt)("td",{parentName:"tr",align:null},"GET (KVP) / POST (XML) / SOAP")))))}d.isMDXComponent=!0}}]);