"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[79],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||n;return r?a.createElement(v,i(i({ref:t},c),{},{components:r})):a.createElement(v,i({ref:t},c))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<n;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96041:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>p,toc:()=>l});var a=r(87462),o=(r(67294),r(3905));const n={id:"osm-overview",title:"OpenStreetMap",slug:"openstreetmap",tags:["osm","vector","opensoruce"]},i="OpenStreetMap",p={unversionedId:"MapColonies/openstreetmap/osm-overview",id:"MapColonies/openstreetmap/osm-overview",title:"OpenStreetMap",description:"The openstreetmap website",source:"@site/docs/MapColonies/openstreetmap/README.md",sourceDirName:"MapColonies/openstreetmap",slug:"/MapColonies/openstreetmap/openstreetmap",permalink:"/developer-portal/pr-preview/pr-97/docs/MapColonies/openstreetmap/openstreetmap",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/openstreetmap/README.md",tags:[{label:"osm",permalink:"/developer-portal/pr-preview/pr-97/docs/tags/osm"},{label:"vector",permalink:"/developer-portal/pr-preview/pr-97/docs/tags/vector"},{label:"opensoruce",permalink:"/developer-portal/pr-preview/pr-97/docs/tags/opensoruce"}],version:"current",frontMatter:{id:"osm-overview",title:"OpenStreetMap",slug:"openstreetmap",tags:["osm","vector","opensoruce"]},sidebar:"docSidebar",previous:{title:"Elevation \u26f0\ufe0f",permalink:"/developer-portal/pr-preview/pr-97/docs/MapColonies/DEM/Services/elevation/info"},next:{title:"In Depth",permalink:"/developer-portal/pr-preview/pr-97/docs/MapColonies/openstreetmap/osm-in-depth"}},s={},l=[{value:"What is it?",id:"what-is-it",level:2},{value:"Why are we using it",id:"why-are-we-using-it",level:2},{value:"Available OSM based products",id:"available-osm-based-products",level:2},{value:"Future OSM based products",id:"future-osm-based-products",level:2},{value:"Additional information about OSM",id:"additional-information-about-osm",level:2}],c={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"openstreetmap"},"OpenStreetMap"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The openstreetmap website",src:r(97056).Z,width:"1919",height:"1037"})),(0,o.kt)("div",{style:{textAlign:"center"}},"The OpenStreetMap website"),(0,o.kt)("h2",{id:"what-is-it"},"What is it?"),(0,o.kt)("p",null,"OpenStreetMap (OSM) is a free, open geographic database updated and maintained by a community of volunteers via open collaboration. Contributors collect data from surveys, trace from aerial imagery and also import from other freely licensed geodata sources. OpenStreetMap is freely licensed under the Open Database License and as a result commonly used to make electronic maps, inform turn-by-turn navigation, assist in humanitarian aid and data visualisation."),(0,o.kt)("h2",{id:"why-are-we-using-it"},"Why are we using it"),(0,o.kt)("p",null,"We believe that any additional data is welcome, and because OpenStreetMap is the de-facto standard in mapping in the internet today, we should also import the data and as many services as possible."),(0,o.kt)("h2",{id:"available-osm-based-products"},"Available OSM based products"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/MapColonies/openstreetmap/osm-carto/openstreetmap-carto"},"OSM Carto")," The default OSM raster tile layer style."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/MapColonies/vector/Services/nominatim_service"},"Nominatim")," OpenStreetMap based GeoCoding and Reverse GeoCoding service.")),(0,o.kt)("h2",{id:"future-osm-based-products"},"Future OSM based products"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigation"),(0,o.kt)("li",{parentName:"ul"},"Query"),(0,o.kt)("li",{parentName:"ul"},"Additional styles")),(0,o.kt)("h2",{id:"additional-information-about-osm"},"Additional information about OSM"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/MapColonies/openstreetmap/osm-in-depth"},"OSM Deep Dive")," More about the project and it's history."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/MapColonies/openstreetmap/osm-data-model"},"OSM Data Model"),' About the "building blocks" OSM uses to describe the world.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/MapColonies/openstreetmap/osm-users"},"OSM Users")," A partial list of organizations and companies that use OpenStreetMap.")))}u.isMDXComponent=!0},97056:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/openstreetmap-website-2022-2b33b2224dd6cb1ce1c021620a16ce67.png"}}]);