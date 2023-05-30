"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[79],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>v});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),m=o,v=d["".concat(p,".").concat(m)]||d[m]||u[m]||n;return a?r.createElement(v,i(i({ref:t},c),{},{components:a})):r.createElement(v,i({ref:t},c))}));function v(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},96041:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=a(87462),o=(a(67294),a(3905));const n={id:"osm-overview",title:"OpenStreetMap",slug:"openstreetmap",tags:["osm","vector","opensoruce"]},i="OpenStreetMap",s={unversionedId:"MapColonies/openstreetmap/osm-overview",id:"MapColonies/openstreetmap/osm-overview",title:"OpenStreetMap",description:"The openstreetmap website",source:"@site/docs/MapColonies/openstreetmap/README.md",sourceDirName:"MapColonies/openstreetmap",slug:"/MapColonies/openstreetmap/openstreetmap",permalink:"/docs/MapColonies/openstreetmap/openstreetmap",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/openstreetmap/README.md",tags:[{label:"osm",permalink:"/docs/tags/osm"},{label:"vector",permalink:"/docs/tags/vector"},{label:"opensoruce",permalink:"/docs/tags/opensoruce"}],version:"current",frontMatter:{id:"osm-overview",title:"OpenStreetMap",slug:"openstreetmap",tags:["osm","vector","opensoruce"]},sidebar:"docSidebar",previous:{title:"Profile v2",permalink:"/docs/MapColonies/3D/services/catalog/catalog-profile-v2"},next:{title:"In Depth",permalink:"/docs/MapColonies/openstreetmap/osm-in-depth"}},p={},l=[{value:"What is it?",id:"what-is-it",level:2},{value:"Why are we using it",id:"why-are-we-using-it",level:2},{value:"Available OSM based products",id:"available-osm-based-products",level:2},{value:"Future OSM based products",id:"future-osm-based-products",level:2},{value:"Additional information about OSM",id:"additional-information-about-osm",level:2}],c={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"openstreetmap"},"OpenStreetMap"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"The openstreetmap website",src:a(63534).Z,width:"1919",height:"1037"})),(0,o.kt)("div",{style:{textAlign:"center"}},"The OpenStreetMap website"),(0,o.kt)("h2",{id:"what-is-it"},"What is it?"),(0,o.kt)("p",null,"OpenStreetMap (OSM) is a free, open geographic database updated and maintained by a community of volunteers via open collaboration. Contributors collect data from surveys, trace from aerial imagery and also import from other freely licensed geodata sources. OpenStreetMap is freely licensed under the Open Database License and as a result commonly used to make electronic maps, inform turn-by-turn navigation, assist in humanitarian aid and data visualisation."),(0,o.kt)("h2",{id:"why-are-we-using-it"},"Why are we using it"),(0,o.kt)("p",null,"We believe that any additional data is welcome, and because OpenStreetMap is the de-facto standard in mapping in the internet today, we should also import the data and as many services as possible."),(0,o.kt)("h2",{id:"available-osm-based-products"},"Available OSM based products"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/MapColonies/openstreetmap/osm-carto/openstreetmap-carto"},"OSM Carto")," The default OSM raster tile layer style."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/MapColonies/vector/Services/nominatim_service"},"Nominatim")," OpenStreetMap based GeoCoding and Reverse GeoCoding service.")),(0,o.kt)("h2",{id:"future-osm-based-products"},"Future OSM based products"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigation"),(0,o.kt)("li",{parentName:"ul"},"Query"),(0,o.kt)("li",{parentName:"ul"},"Additional styles")),(0,o.kt)("h2",{id:"additional-information-about-osm"},"Additional information about OSM"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/MapColonies/openstreetmap/osm-in-depth"},"OSM Deep Dive")," More about the project and it's history."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/MapColonies/openstreetmap/osm-data-model"},"OSM Data Model"),' About the "building blocks" OSM uses to describe the world.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/MapColonies/openstreetmap/osm-users"},"OSM Users")," A partial list of organizations and companies that use OpenStreetMap.")))}u.isMDXComponent=!0},63534:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/openstreetmap-website-2022-2b33b2224dd6cb1ce1c021620a16ce67.png"}}]);