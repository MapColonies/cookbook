"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[7185],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(o),u=n,f=d["".concat(c,".").concat(u)]||d[u]||v[u]||a;return o?r.createElement(f,i(i({ref:t},p),{},{components:o})):r.createElement(f,i({ref:t},p))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},97370:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>v,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=o(87462),n=(o(67294),o(3905));const a={title:"Vector",slug:"vector-overview",id:"vector-overview",sidebar_position:1,tags:["vector","overview"]},i=void 0,s={unversionedId:"MapColonies/vector/vector-overview",id:"MapColonies/vector/vector-overview",title:"Vector",description:"Vector Overview",source:"@site/docs/MapColonies/vector/README.md",sourceDirName:"MapColonies/vector",slug:"/MapColonies/vector/vector-overview",permalink:"/developer-portal/pr-preview/pr-80/docs/MapColonies/vector/vector-overview",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/vector/README.md",tags:[{label:"vector",permalink:"/developer-portal/pr-preview/pr-80/docs/tags/vector"},{label:"overview",permalink:"/developer-portal/pr-preview/pr-80/docs/tags/overview"}],version:"current",sidebarPosition:1,frontMatter:{title:"Vector",slug:"vector-overview",id:"vector-overview",sidebar_position:1,tags:["vector","overview"]},sidebar:"docSidebar",previous:{title:"Map \ud83d\uddfa\ufe0f",permalink:"/developer-portal/pr-preview/pr-80/docs/MapColonies/Raster/services/map-service"},next:{title:"Services",permalink:"/developer-portal/pr-preview/pr-80/docs/category/services-1"}},c={},l=[{value:"Vector Overview",id:"vector-overview",level:2},{value:"Types of vector objects",id:"types-of-vector-objects",level:3},{value:"Points",id:"points",level:3},{value:"Lines",id:"lines",level:3},{value:"Polygons",id:"polygons",level:3},{value:"Pros and Cons",id:"pros-and-cons",level:3}],p={toc:l},d="wrapper";function v(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"vector-overview"},"Vector Overview"),(0,n.kt)("p",null,"Vector data structures represent specific features on the Earth\u2019s surface, and assign attributes to those features. Vectors are composed of discrete geometric locations (x, y values) known as vertices that define the shape of the spatial object. The organization of the vertices determines the type of vector that we are working with: point, line or polygon."),(0,n.kt)("figure",null,(0,n.kt)("img",{src:o(27726).Z,style:{display:"block","margin-left":"auto","margin-right":"auto",width:"90%"}})),(0,n.kt)("h3",{id:"types-of-vector-objects"},"Types of vector objects"),(0,n.kt)("h3",{id:"points"},"Points"),(0,n.kt)("p",null,"Each point is defined by a single x, y coordinate. There can be many points in a vector point file. Examples of point data include: sampling locations, the location of individual trees, or the location of survey plots."),(0,n.kt)("h3",{id:"lines"},"Lines"),(0,n.kt)("p",null," Lines are composed of many (at least 2) points that are connected. For instance, a road or a stream may be represented by a line. This line is composed of a series of segments, each \u201cbend\u201d in the road or stream represents a vertex that has defined (x, y) location."),(0,n.kt)("h3",{id:"polygons"},"Polygons"),(0,n.kt)("p",null,"A polygon consists of 3 or more vertices that are connected and closed. The outlines of survey plot boundaries, lakes, oceans, and states or countries are often represented by polygons."),(0,n.kt)("h3",{id:"pros-and-cons"},"Pros and Cons"),(0,n.kt)("p",null,"Vector data has some important advantages:"),(0,n.kt)("p",null,"The geometry itself contains information about what the dataset creator thought was important\nThe geometry structures hold information in themselves - why choose point over polygon, for instance?\nEach geometry feature can carry multiple attributes instead of just one, e.g. a database of cities can have attributes for name, country, population, etc\nData storage can be very efficient compared to rasters\nThe downsides of vector data include:"),(0,n.kt)("p",null,"potential loss of detail compared to raster\npotential bias in datasets - what didn\u2019t get recorded?\nCalculations involving multiple vector layers need to do math on the geometry as well as the attributes, so can be slow compared to raster math.\nVector datasets are in use in many industries besides geospatial fields. For instance, computer graphics are largely vector-based, although the data structures in use tend to join points using arcs and complex curves rather than straight lines. Computer-aided design (CAD) is also vector- based. The difference is that geospatial datasets are accompanied by information tying their features to real-world locations."))}v.isMDXComponent=!0},27726:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/pnt_line_poly-9303122452c37eaab5db1efdb174749d.png"}}]);