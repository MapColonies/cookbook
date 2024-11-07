"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[7021],{65724:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var r=o(74848),s=o(28453);const n={title:"Vector",slug:"vector-overview",id:"vector-overview",sidebar_position:1,tags:["vector","overview"]},a=void 0,i={id:"MapColonies/vector/vector-overview",title:"Vector",description:"Vector Overview",source:"@site/docs/MapColonies/vector/README.md",sourceDirName:"MapColonies/vector",slug:"/MapColonies/vector/vector-overview",permalink:"/developer-portal/pr-preview/pr-120/docs/MapColonies/vector/vector-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/vector/README.md",tags:[{inline:!0,label:"vector",permalink:"/developer-portal/pr-preview/pr-120/docs/tags/vector"},{inline:!0,label:"overview",permalink:"/developer-portal/pr-preview/pr-120/docs/tags/overview"}],version:"current",sidebarPosition:1,frontMatter:{title:"Vector",slug:"vector-overview",id:"vector-overview",sidebar_position:1,tags:["vector","overview"]},sidebar:"docSidebar",previous:{title:"Map \ud83d\uddfa\ufe0f",permalink:"/developer-portal/pr-preview/pr-120/docs/MapColonies/Raster/services/map-service"},next:{title:"Services",permalink:"/developer-portal/pr-preview/pr-120/docs/category/services-1"}},c={},l=[{value:"Vector Overview",id:"vector-overview",level:2},{value:"Types of vector objects",id:"types-of-vector-objects",level:3},{value:"Points",id:"points",level:3},{value:"Lines",id:"lines",level:3},{value:"Polygons",id:"polygons",level:3},{value:"Pros and Cons",id:"pros-and-cons",level:3}];function d(e){const t={h2:"h2",h3:"h3",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"vector-overview",children:"Vector Overview"}),"\n",(0,r.jsx)(t.p,{children:"Vector data structures represent specific features on the Earth\u2019s surface, and assign attributes to those features. Vectors are composed of discrete geometric locations (x, y values) known as vertices that define the shape of the spatial object. The organization of the vertices determines the type of vector that we are working with: point, line or polygon."}),"\n",(0,r.jsx)("figure",{children:(0,r.jsx)("img",{src:o(88506).A,style:{display:"block","margin-left":"auto","margin-right":"auto",width:"90%"}})}),"\n",(0,r.jsx)(t.h3,{id:"types-of-vector-objects",children:"Types of vector objects"}),"\n",(0,r.jsx)(t.h3,{id:"points",children:"Points"}),"\n",(0,r.jsx)(t.p,{children:"Each point is defined by a single x, y coordinate. There can be many points in a vector point file. Examples of point data include: sampling locations, the location of individual trees, or the location of survey plots."}),"\n",(0,r.jsx)(t.h3,{id:"lines",children:"Lines"}),"\n",(0,r.jsx)(t.p,{children:"Lines are composed of many (at least 2) points that are connected. For instance, a road or a stream may be represented by a line. This line is composed of a series of segments, each \u201cbend\u201d in the road or stream represents a vertex that has defined (x, y) location."}),"\n",(0,r.jsx)(t.h3,{id:"polygons",children:"Polygons"}),"\n",(0,r.jsx)(t.p,{children:"A polygon consists of 3 or more vertices that are connected and closed. The outlines of survey plot boundaries, lakes, oceans, and states or countries are often represented by polygons."}),"\n",(0,r.jsx)(t.h3,{id:"pros-and-cons",children:"Pros and Cons"}),"\n",(0,r.jsx)(t.p,{children:"Vector data has some important advantages:"}),"\n",(0,r.jsx)(t.p,{children:"The geometry itself contains information about what the dataset creator thought was important\nThe geometry structures hold information in themselves - why choose point over polygon, for instance?\nEach geometry feature can carry multiple attributes instead of just one, e.g. a database of cities can have attributes for name, country, population, etc\nData storage can be very efficient compared to rasters\nThe downsides of vector data include:"}),"\n",(0,r.jsx)(t.p,{children:"potential loss of detail compared to raster\npotential bias in datasets - what didn\u2019t get recorded?\nCalculations involving multiple vector layers need to do math on the geometry as well as the attributes, so can be slow compared to raster math.\nVector datasets are in use in many industries besides geospatial fields. For instance, computer graphics are largely vector-based, although the data structures in use tend to join points using arcs and complex curves rather than straight lines. Computer-aided design (CAD) is also vector- based. The difference is that geospatial datasets are accompanied by information tying their features to real-world locations."})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},88506:(e,t,o)=>{o.d(t,{A:()=>r});const r=o.p+"assets/images/pnt_line_poly-9303122452c37eaab5db1efdb174749d.png"},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>i});var r=o(96540);const s={},n=r.createContext(s);function a(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);