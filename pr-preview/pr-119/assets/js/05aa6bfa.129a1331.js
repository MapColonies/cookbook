"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[2423],{16514:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var s=o(74848),a=o(28453);const r={id:"openstreetmap-carto",slug:"openstreetmap-carto",title:"OpenStreetMap Cartography",tags:["osm","carto","raster","symbols"]},n="OpenStreetMap Carto",i={id:"MapColonies/openstreetmap/osm-carto/openstreetmap-carto",title:"OpenStreetMap Cartography",description:"The openstreetmap website",source:"@site/docs/MapColonies/openstreetmap/osm-carto/README.md",sourceDirName:"MapColonies/openstreetmap/osm-carto",slug:"/MapColonies/openstreetmap/osm-carto/openstreetmap-carto",permalink:"/developer-portal/pr-preview/pr-119/docs/MapColonies/openstreetmap/osm-carto/openstreetmap-carto",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/openstreetmap/osm-carto/README.md",tags:[{inline:!0,label:"osm",permalink:"/developer-portal/pr-preview/pr-119/docs/tags/osm"},{inline:!0,label:"carto",permalink:"/developer-portal/pr-preview/pr-119/docs/tags/carto"},{inline:!0,label:"raster",permalink:"/developer-portal/pr-preview/pr-119/docs/tags/raster"},{inline:!0,label:"symbols",permalink:"/developer-portal/pr-preview/pr-119/docs/tags/symbols"}],version:"current",frontMatter:{id:"openstreetmap-carto",slug:"openstreetmap-carto",title:"OpenStreetMap Cartography",tags:["osm","carto","raster","symbols"]},sidebar:"docSidebar",previous:{title:"Symbology",permalink:"/developer-portal/pr-preview/pr-119/docs/category/symbology"},next:{title:"Areas",permalink:"/developer-portal/pr-preview/pr-119/docs/MapColonies/openstreetmap/osm-carto/osm-carto-areas-symbology"}},l={},p=[{value:"How to use",id:"how-to-use",level:2},{value:"What did we do",id:"what-did-we-do",level:2},{value:"Style key",id:"style-key",level:2},{value:"&quot;My house doesn&#39;t appears on the map, fix it \ud83d\ude21&quot;",id:"my-house-doesnt-appears-on-the-map-fix-it-",level:2},{value:"Stylesheet design goals",id:"stylesheet-design-goals",level:2},{value:"General purpose",id:"general-purpose",level:3},{value:"Main goals",id:"main-goals",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"openstreetmap-carto",children:"OpenStreetMap Carto"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"The openstreetmap website",src:o(52132).A+"",width:"849",height:"310"}),"\nOpenStreetMap Carto (or OSM Carto or osm-carto for short) is an open-source stylesheet for rendering OpenStreetMap data to raster tiles. Since 2013, the main OpenStreetMap homepage has featured OSM Carto tiles as the default tile layer."]}),"\n",(0,s.jsx)(t.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,s.jsxs)(t.p,{children:["The style can be consumed as a raster tiles layer from Raster team services.\nFor more information check ",(0,s.jsx)(t.a,{href:"/docs/MapColonies/Raster/Guides/raster-getting-started",children:"Raster step by step guide"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"what-did-we-do",children:"What did we do"}),"\n",(0,s.jsx)(t.p,{children:"As this stylesheet is an open-source, we had to make a few minor changes compared to the original one."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["We changed the stylesheet projection from Web Mercator to WGS84. See ",(0,s.jsx)(t.a,{href:"/docs/MapColonies/terms#mapping",children:"mapping terms"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"We modified the database insertion script to prefer names in Hebrew and English when possible."}),"\n",(0,s.jsx)(t.li,{children:"We imported data from the Natural Earth dataset in places where we didn't import OSM data."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"style-key",children:"Style key"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/MapColonies/openstreetmap/osm-carto/osm-carto-symbols",children:"Symbols"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/MapColonies/openstreetmap/osm-carto/osm-carto-lines-symbology",children:"Lines"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/MapColonies/openstreetmap/osm-carto/osm-carto-areas-symbology",children:"Areas"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"my-house-doesnt-appears-on-the-map-fix-it-",children:'"My house doesn\'t appears on the map, fix it \ud83d\ude21"'}),"\n",(0,s.jsx)(t.p,{children:"First, we are sorry, but its not our fault \ud83e\udd37"}),"\n",(0,s.jsxs)(t.p,{children:["We import the data as is from the internet, without any change or modification to maintain authenticity. Because OpenStreetMap is free and Open Source, you can go on their website at ",(0,s.jsx)(t.code,{children:"openstreetmap.org"}),", and make the changes yourself. Be sure to read the guidelines before making any change to avoid it being removed."]}),"\n",(0,s.jsx)(t.h2,{id:"stylesheet-design-goals",children:"Stylesheet design goals"}),"\n",(0,s.jsx)("small",{children:"Taken from the project repository"}),"\n",(0,s.jsx)(t.h3,{id:"general-purpose",children:"General purpose"}),"\n",(0,s.jsx)(t.p,{children:"This style has multiple purposes:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"It's an important feedback mechanism for mappers to validate their edits and helps to prevent unfavorable fragmentation of tag use."}),"\n",(0,s.jsxs)(t.li,{children:["It's a major part of the public face of OpenStreetMap, for many people the map on osm.org rendered with this style ",(0,s.jsx)(t.em,{children:"is"})," OpenStreetMap."]}),"\n",(0,s.jsx)(t.li,{children:"It's used in many map applications as a general purpose map."}),"\n",(0,s.jsx)(t.li,{children:"It's an exemplar stylesheet for rendering OSM data."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"There is no ranking of these purposes.  To allow serving all of them and to\navoid satisfying only some at the cost of the others the following main goals\nhave been identified."}),"\n",(0,s.jsx)(t.h3,{id:"main-goals",children:"Main goals"}),"\n",(0,s.jsx)(t.p,{children:"The following goals need to be balanced against each other to serve the purposes\nabove.  There is no fixed order of priorities.  Apart from these goals there are\nof course also technical constraints and requirements that need to be taken into\naccount."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Legibility and clarity"})," - The map should be intuitively readable by users with some general experience using maps without a map key, preferrably with relatively little effort.  A map key or more extensive experience using this map style can be required for clearly identifying minor differences or the exact meaning of certain features but in broad strokes orientation and identification of map elements should be possible on an intuitive level.  We also aim for the map appearance to be esthetically pleasing."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Being understandable and supportive for mappers"})," - To serve as feedback for mappers and encourage correct mapping this style needs to render the data in a way that allows mappers to understand how the data produces a certain rendering result based on basic observation without in depth understanding how map rendering works or looking at the style implementation."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Diversity"})," - The style should represent the diversity of the OSM community and geography in general.  The most obvious element to serve this goal is showing the local names everywhere on earth in their respective scripts.  This goal however goes beyond labels.  Both physical and cultural geography differs a lot globally and the aim is to represent this variety with equal determination - well mapped areas are not supposed to have more weight here than less mapped parts of the world.  This also means the target map user is the potential global map user and no special consideration is given to the current geographic distribution of actual map use."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"A rich map"})," - This style deliberately creating a fairly rich map showing a significant number of different features.  This way it shows the richness of OSM data and gives a broad recognition to the mappers' work.  The aim is not however to show all or even most of the OSM data."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Maintainability"})," - The implementation of this style should not be too hard to maintain. This refers to both the volume and complexity of the code and how fast the style can be parsed when rendering it, which is very important for efficient development work. So the amount of code should be kept small and complex and fragile interdependencies should be avoided. If the code is difficult to maintain this would ultimately seriously affect all of the above goals."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Adaptability and ease of use"})," - The style should be easy to customize, like for creating localized or special purpose maps. It is also important to keep demands on rendering infrastructure for serving the style low so it is not too difficult and costly to set up a tile server for this style or a specialized variant of it."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},52132:(e,t,o)=>{o.d(t,{A:()=>s});const s=o.p+"assets/images/osm-carto-45a4561c8314cf982dd9843a37ced2bc.png"},28453:(e,t,o)=>{o.d(t,{R:()=>n,x:()=>i});var s=o(96540);const a={},r=s.createContext(a);function n(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);