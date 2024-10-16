"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[1911],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>v});var r=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var n=r.createContext({}),l=function(e){var a=r.useContext(n),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},m=function(e){var a=l(e.components);return r.createElement(n.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,i=e.originalType,n=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=l(t),u=o,v=d["".concat(n,".").concat(u)]||d[u]||c[u]||i;return t?r.createElement(v,s(s({ref:a},m),{},{components:t})):r.createElement(v,s({ref:a},m))}));function v(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=u;var p={};for(var n in a)hasOwnProperty.call(a,n)&&(p[n]=a[n]);p.originalType=e,p[d]="string"==typeof e?e:o,s[1]=p;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},70559:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>n,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const i={id:"map-viewers-overview",slug:"map-viewers-overview",title:"Map viewers",sidebar_position:1,tags:["map-viewers","viewers","overview"]},s=void 0,p={unversionedId:"KnowledgeBase/MapViewers/map-viewers-overview",id:"KnowledgeBase/MapViewers/map-viewers-overview",title:"Map viewers",description:"What is a map viewer / component?",source:"@site/docs/KnowledgeBase/MapViewers/README.md",sourceDirName:"KnowledgeBase/MapViewers",slug:"/KnowledgeBase/MapViewers/map-viewers-overview",permalink:"/developer-portal/pr-preview/pr-97/docs/KnowledgeBase/MapViewers/map-viewers-overview",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/KnowledgeBase/MapViewers/README.md",tags:[{label:"map-viewers",permalink:"/developer-portal/pr-preview/pr-97/docs/tags/map-viewers"},{label:"viewers",permalink:"/developer-portal/pr-preview/pr-97/docs/tags/viewers"},{label:"overview",permalink:"/developer-portal/pr-preview/pr-97/docs/tags/overview"}],version:"current",sidebarPosition:1,frontMatter:{id:"map-viewers-overview",slug:"map-viewers-overview",title:"Map viewers",sidebar_position:1,tags:["map-viewers","viewers","overview"]},sidebar:"knowledgeBaseSidebar",previous:{title:"Terms & Abbreviations",permalink:"/developer-portal/pr-preview/pr-97/docs/KnowledgeBase/terms"},next:{title:"Map viewers comparison",permalink:"/developer-portal/pr-preview/pr-97/docs/KnowledgeBase/MapViewers/map-viewers-comparison"}},n={},l=[{value:"What is a map viewer / component?",id:"what-is-a-map-viewer--component",level:2},{value:"Choosing a map viewer",id:"choosing-a-map-viewer",level:2},{value:"Most commonly used map viewers",id:"most-commonly-used-map-viewers",level:2},{value:"Cesium \ud83c\udd93",id:"cesium-",level:3},{value:"Leaflet \ud83c\udd93",id:"leaflet-",level:3},{value:"OpenLayers \ud83c\udd93",id:"openlayers-",level:3},{value:"ArcGIS JS SDK \ud83d\udcb0",id:"arcgis-js-sdk-",level:3},{value:"iTowns \ud83c\udd93",id:"itowns-",level:3},{value:"Mapbox GL JS \ud83c\udd93 + \ud83d\udcb0",id:"mapbox-gl-js---",level:3},{value:"deck.gl \ud83c\udd93",id:"deckgl-",level:3},{value:"Maplibre-gl-js \ud83c\udd93",id:"maplibre-gl-js-",level:3}],m={toc:l},d="wrapper";function c(e){let{components:a,...t}=e;return(0,o.kt)(d,(0,r.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-a-map-viewer--component"},"What is a map viewer / component?"),(0,o.kt)("p",null,"A map viewer is a visual component to help us display ",(0,o.kt)("inlineCode",{parentName:"p"},"geographic")," data such as raster, vector, 3D and DEM. It does all of the heavy-lifting in fetching, calculating and displaying the data correctly."),(0,o.kt)("p",null,"There are many features that a map viewer could implement, please read more about the different libraries and features ",(0,o.kt)("a",{parentName:"p",href:"/developer-portal/pr-preview/pr-97/docs/KnowledgeBase/MapViewers/map-viewers-comparison"},"here"),"."),(0,o.kt)("h2",{id:"choosing-a-map-viewer"},"Choosing a map viewer"),(0,o.kt)("p",null,"There are so many map viewers out there, how do you choose the best one for your needs?\nHere we attempt to help you make this decision."),(0,o.kt)("p",null,"Disclaimer:\nEverything written in this knowledge base is based on our research of selected well known map viewers. We do not attempt to recommend one as the best, but give you all the information we believe you need in order to make a better decision based on your use case.\nSome of the viewers may be incompatible with some of our data or services and will require additional adjustments in order to consume them (for some it may not be possible at all)."),(0,o.kt)("p",null,"So lets get started!"),(0,o.kt)("h2",{id:"most-commonly-used-map-viewers"},"Most commonly used map viewers"),(0,o.kt)("h3",{id:"cesium-"},"Cesium \ud83c\udd93"),(0,o.kt)("p",null,"A complete platform for 3D geospatial data \u2013 handling everything from optimization to visualization to analytics. CesiumJS is an open source JavaScript library for world-class 3D mapping."),(0,o.kt)("p",null,"Read more ",(0,o.kt)("a",{parentName:"p",href:"https://cesium.com/learn/cesiumjs-learn/"},"here")," and try out the ",(0,o.kt)("a",{parentName:"p",href:"https://sandcastle.cesium.com/"},"playground"),"."),(0,o.kt)("h3",{id:"leaflet-"},"Leaflet \ud83c\udd93"),(0,o.kt)("p",null,"Designed with simplicity, performance and usability in mind. It works efficiently across all major desktop and mobile platforms, can be extended with lots of plugins, has a beautiful, easy to use and well-documented API and a simple, readable source code that is a joy to contribute to."),(0,o.kt)("p",null,"Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps. Weighing just about 42 KB of JS, it has all the mapping features most developers ever need."),(0,o.kt)("p",null,"Read more ",(0,o.kt)("a",{parentName:"p",href:"https://leafletjs.com/reference.html"},"here"),", see some ",(0,o.kt)("a",{parentName:"p",href:"https://leafletjs.com/examples.html"},"examples")," and try out the ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/leaflet-playground-8riog"},"playground"),"."),(0,o.kt)("h3",{id:"openlayers-"},"OpenLayers \ud83c\udd93"),(0,o.kt)("p",null,"An open-source JavaScript library for displaying map data in web browsers as slippy maps. It provides an API for building rich web-based geographic applications similar to Google Maps and Bing Maps."),(0,o.kt)("p",null,"Read more ",(0,o.kt)("a",{parentName:"p",href:"https://openlayers.org/en/latest/apidoc/"},"here"),", see some ",(0,o.kt)("a",{parentName:"p",href:"https://openlayers.org/en/latest/examples/"},"examples")," and try out the ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/examples/package/openlayers"},"playground"),"."),(0,o.kt)("h3",{id:"arcgis-js-sdk-"},"ArcGIS JS SDK \ud83d\udcb0"),(0,o.kt)("p",null,"ArcGIS is a family of client, server and online geographic information system (GIS) software developed and maintained by Esri."),(0,o.kt)("p",null,"Use ArcGIS Maps SDK for JavaScript to build compelling web apps that unlock your data\u2019s potential with interactive user experiences and stunning 2D and 3D visualizations."),(0,o.kt)("p",null,"Read more ",(0,o.kt)("a",{parentName:"p",href:"https://developers.arcgis.com/javascript/latest/"},"here"),", see some ",(0,o.kt)("a",{parentName:"p",href:"https://developers.arcgis.com/javascript/latest/sample-code/"},"examples")," and try out the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.arcgis.com/javascript/3/samples/playground/"},"playground"),"."),(0,o.kt)("h3",{id:"itowns-"},"iTowns \ud83c\udd93"),(0,o.kt)("p",null,"ITowns is a javascript framework for 3D geographic data visualisation. It can display a wide range of data such as ortho-images, Digital Elevation Models (DEM) or 3D models."),(0,o.kt)("p",null,"ITowns is based on Three.js, which is a javascript library that implements WebGL to render sophisticated 3D Geometry on a webpage."),(0,o.kt)("p",null,"Read more ",(0,o.kt)("a",{parentName:"p",href:"https://www.itowns-project.org/"},"here")," and see some ",(0,o.kt)("a",{parentName:"p",href:"http://www.itowns-project.org/itowns/examples/index.html"},"examples"),"."),(0,o.kt)("h3",{id:"mapbox-gl-js---"},"Mapbox GL JS \ud83c\udd93 + \ud83d\udcb0"),(0,o.kt)("p",null,"A client-side JavaScript library for building web maps and web applications with Mapbox's modern mapping technology. You can use Mapbox GL JS to display Mapbox maps in a web browser or client, add user interactivity, and customize the map experience in your application."),(0,o.kt)("p",null,"Read more ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/guides/"},"here"),", see some ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/mapbox-gl-js/example/"},"examples")," and try out the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mapbox.com/playground/"},"playground"),"."),(0,o.kt)("h3",{id:"deckgl-"},"deck.gl \ud83c\udd93"),(0,o.kt)("p",null,"A GPU-powered framework for visual exploratory data analysis of large datasets."),(0,o.kt)("p",null,"deck.gl APIs are designed to reflect the reactive programming paradigm. Whether using Vanilla JS or the React interface, it can handle efficient WebGL2/WebGPU rendering under heavy data load."),(0,o.kt)("p",null,"While deck.gl works standalone without a base map, it plays nicely with your favorite base map libraries such as Google Maps, Mapbox, ArcGIS, MapLibre, and more. Where the base map library permits, deck.gl may interleave with 3D map layers to create seamless visualizations."),(0,o.kt)("p",null,"Read more ",(0,o.kt)("a",{parentName:"p",href:"https://deck.gl/docs"},"here")," and see some ",(0,o.kt)("a",{parentName:"p",href:"https://deck.gl/examples"},"examples"),"."),(0,o.kt)("h3",{id:"maplibre-gl-js-"},"Maplibre-gl-js \ud83c\udd93"),(0,o.kt)("p",null,"A TypeScript library that uses WebGL to render interactive maps from vector tiles in a browser. The customization of the map comply with the MapLibre Style Spec. It is part of the MapLibre ecosystem, with a counterpart for Android, iOS and other platforms called MapLibre Native."),(0,o.kt)("p",null,"Read more ",(0,o.kt)("a",{parentName:"p",href:"https://maplibre.org/maplibre-gl-js/docs/API/"},"here")," and see some ",(0,o.kt)("a",{parentName:"p",href:"https://maplibre.org/maplibre-gl-js/docs/examples/"},"examples"),"."))}c.isMDXComponent=!0}}]);