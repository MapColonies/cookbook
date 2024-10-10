"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[9401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=p(n),u=r,f=l["".concat(c,".").concat(u)]||l[u]||d[u]||i;return n?o.createElement(f,a(a({ref:t},m),{},{components:n})):o.createElement(f,a({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={description:"GeoCoding Service by OSM"},a="Nominatim \ud83c\udf0d",s={unversionedId:"MapColonies/vector/Services/nominatim_service",id:"MapColonies/vector/Services/nominatim_service",title:"Nominatim \ud83c\udf0d",description:"GeoCoding Service by OSM",source:"@site/docs/MapColonies/vector/Services/nominatim_service.md",sourceDirName:"MapColonies/vector/Services",slug:"/MapColonies/vector/Services/nominatim_service",permalink:"/developer-portal/pr-preview/pr-97/docs/MapColonies/vector/Services/nominatim_service",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/vector/Services/nominatim_service.md",tags:[],version:"current",frontMatter:{description:"GeoCoding Service by OSM"},sidebar:"docSidebar",previous:{title:"Geocoding \ud83d\udccd",permalink:"/developer-portal/pr-preview/pr-97/docs/MapColonies/vector/Services/geocoding/info"},next:{title:"Query \ud83d\udd0e",permalink:"/developer-portal/pr-preview/pr-97/docs/MapColonies/vector/Services/query"}},c={},p=[{value:"How to use",id:"how-to-use",level:2},{value:"Nominatim UI",id:"nominatim-ui",level:2},{value:"I&#39;m getting bad results",id:"im-getting-bad-results",level:2},{value:"&quot;I can&#39;t find my home address, do something about it \ud83d\ude21&quot;",id:"i-cant-find-my-home-address-do-something-about-it-",level:2}],m={toc:p},l="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(l,(0,o.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nominatim-"},"Nominatim \ud83c\udf0d"),(0,r.kt)("p",null,"Nominatim (from the Latin, 'by name') is a tool to search OpenStreetMap data by name and address (geocoding) and to generate synthetic addresses of OSM points (reverse geocoding)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Nominatim Demo App",src:n(40576).Z,width:"1898",height:"933"})),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"Nominatim indexes named (or numbered) features within the OpenStreetMap (OSM) dataset and a subset of other unnamed features (pubs, hotels, churches, etc)."),(0,r.kt)("p",null,"Its API has the following endpoints for querying the data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/MapColonies/openstreetmap/nominatim/Osm-Search-API"},"/search"))," - search OSM objects by name or type"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/MapColonies/openstreetmap/nominatim/Osm-Reverse-Search-API"},"/reverse"))," - search OSM object by their location"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/MapColonies/openstreetmap/nominatim/Osm-AddressLookup-API"},"/lookup"))," - look up address details for OSM objects by their ID")),(0,r.kt)("h2",{id:"nominatim-ui"},"Nominatim UI"),(0,r.kt)("p",null,"Nominatim is a search API, it does not provide a website interface on its own. nominatim-ui offers a small website for trying Nominatim and inspecting the database content."),(0,r.kt)("h2",{id:"im-getting-bad-results"},"I'm getting bad results"),(0,r.kt)("p",null,"Please check the ",(0,r.kt)("a",{parentName:"p",href:"/docs/MapColonies/openstreetmap/nominatim/osm-nominatim-faq"},"FAQ page")," and check if there is a solution to your problem there. If the problem persists don't hesitate to contact us."),(0,r.kt)("h2",{id:"i-cant-find-my-home-address-do-something-about-it-"},'"I can\'t find my home address, do something about it \ud83d\ude21"'),(0,r.kt)("p",null,"First, we are sorry, but its not our fault \ud83e\udd37"),(0,r.kt)("p",null,"We import the data as is from the internet, without any change or modification to maintain authenticity. Because OpenStreetMap is free and Open Source, you can go on their website at ",(0,r.kt)("inlineCode",{parentName:"p"},"openstreetmap.org"),", and make the changes yourself. Be sure to read the guidelines before making any change to avoid it being removed."),(0,r.kt)("font",{size:"2"}," Copyright \xa9 https://nominatim.org/"))}d.isMDXComponent=!0},40576:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/nominatim-demo-829df98c19e84080ae59501cdd3ba654.png"}}]);