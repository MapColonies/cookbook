"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[4763],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||n;return r?o.createElement(f,a(a({ref:t},c),{},{components:r})):o.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<n;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29968:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=r(87462),i=(r(67294),r(3905));const n={id:"3D-overview",slug:"3d-overview",title:"3D",sidebar_position:1,tags:["3D","overview"]},a=void 0,l={unversionedId:"MapColonies/3D/3D-overview",id:"MapColonies/3D/3D-overview",title:"3D",description:"The process of creating photo-realistic 3D models is based on photogrammetry, which is the technique of taking multiple overlapping aerial photographs and deriving measurements from them to create 3D models of objects or scenes. This is done by external systems which generate 3D models in one of the following formats:",source:"@site/docs/MapColonies/3D/README.md",sourceDirName:"MapColonies/3D",slug:"/MapColonies/3D/3d-overview",permalink:"/developer-portal/pr-preview/pr-107/docs/MapColonies/3D/3d-overview",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/3D/README.md",tags:[{label:"3D",permalink:"/developer-portal/pr-preview/pr-107/docs/tags/3-d"},{label:"overview",permalink:"/developer-portal/pr-preview/pr-107/docs/tags/overview"}],version:"current",sidebarPosition:1,frontMatter:{id:"3D-overview",slug:"3d-overview",title:"3D",sidebar_position:1,tags:["3D","overview"]},sidebar:"docSidebar",previous:{title:"Valhalla \ud83e\udded",permalink:"/developer-portal/pr-preview/pr-107/docs/MapColonies/vector/Services/valhalla"},next:{title:"Guides",permalink:"/developer-portal/pr-preview/pr-107/docs/category/guides-1"}},s={},p=[{value:"Terms",id:"terms",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The process of creating photo-realistic 3D models is based on photogrammetry, which is the technique of taking multiple overlapping aerial photographs and deriving measurements from them to create 3D models of objects or scenes. This is done by external systems which generate 3D models in one of the following formats:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"OSGB (legacy)"),(0,i.kt)("li",{parentName:"ul"},"3D Tiles")),(0,i.kt)("p",null,"Each of these models represent a specific geographic region, building, facility or any other object."),(0,i.kt)("figure",null,(0,i.kt)("img",{src:r(25039).Z,style:{display:"block",marginLeft:"auto",marginRight:"auto",width:"40%"}})),(0,i.kt)("h3",{id:"terms"},"Terms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"osgb"},"OSGB"))),(0,i.kt)("p",null,"OSGB is a file format that is native to OpenSceneGraph, which is an open-source 3D graphics Application Programming Interface (API). OpenSceneGraph is used by developers for a wide range of applications including visual simulation, virtual reality, and computer games. OSGB stands for OpenSceneGraph Binary file. The file stores the binary representation of a 3D vector model with all its textures contained within a single standalone file."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"3d-tile"},"3D Tile"))),(0,i.kt)("p",null,"3D Tiles is designed for streaming and rendering massive 3D geospatial content such as Photogrammetry, 3D Buildings, Point Clouds, etc. It defines a hierarchical data structure and a set of tile formats which deliver renderable content. 3D Tiles does not define explicit rules for visualization of the content; a client may visualize 3D Tiles data however it sees fit."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"b3dm-file-extension"},".b3dm (file extension)"))),(0,i.kt)("p",null,'b3dm ("Batched 3D Model") file is part of the 3D Tiles specification and uses glTF as its payload to deliver 3d geometry.'))}u.isMDXComponent=!0},25039:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/3Dtile-3888cde8dd37fb578311ca6ec08870ca.png"}}]);