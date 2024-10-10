"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[3975],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88864:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={id:"vector-valhalla-service",slug:"valhalla",title:"Valhalla \ud83e\udded",description:"Directions and isochrones by OSM",tags:["vector","API","osm"]},i="Valhalla \ud83e\udded",l={unversionedId:"MapColonies/vector/Services/vector-valhalla-service",id:"MapColonies/vector/Services/vector-valhalla-service",title:"Valhalla \ud83e\udded",description:"Directions and isochrones by OSM",source:"@site/docs/MapColonies/vector/Services/valhalla_service.md",sourceDirName:"MapColonies/vector/Services",slug:"/MapColonies/vector/Services/valhalla",permalink:"/developer-portal/pr-preview/pr-97/docs/MapColonies/vector/Services/valhalla",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/vector/Services/valhalla_service.md",tags:[{label:"vector",permalink:"/developer-portal/pr-preview/pr-97/docs/tags/vector"},{label:"API",permalink:"/developer-portal/pr-preview/pr-97/docs/tags/api"},{label:"osm",permalink:"/developer-portal/pr-preview/pr-97/docs/tags/osm"}],version:"current",frontMatter:{id:"vector-valhalla-service",slug:"valhalla",title:"Valhalla \ud83e\udded",description:"Directions and isochrones by OSM",tags:["vector","API","osm"]},sidebar:"docSidebar",previous:{title:"Replication \ud83d\udce6",permalink:"/developer-portal/pr-preview/pr-97/docs/MapColonies/vector/Services/replication/info"},next:{title:"3D",permalink:"/developer-portal/pr-preview/pr-97/docs/MapColonies/3D/3d-overview"}},s={},p=[{value:"Features",id:"features",level:2},{value:"How to use",id:"how-to-use",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"valhalla-"},"Valhalla \ud83e\udded"),(0,o.kt)("p",null,"Valhalla is an open source routing engine and accompanying libraries for use with OpenStreetMap data. Valhalla also includes tools like time+distance matrix computation, isochrones, elevation sampling, map matching and tour optimization (Travelling Salesman)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Valhalla Demo App",src:a(42826).Z,width:"1884",height:"902"})),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Terminology"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"break location")," - the start or end point of a route."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cost")," - fixed costs in seconds that are added to both the path cost and the estimated time."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"costing model")," - set of costs for particular methods of travel, such as automobile or pedestrian."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"edge")," - a line connected between nodes"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"factor")," - multiply the cost along an edge or road section in a way that influences the path to favor or avoid a particular attribute"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"graph")," - a set of edges connected by nodes used for building a route"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"location")," - a latitude, longitude coordinate pair, specified in decimal degrees that determines the routing and order of navigation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"maneuver")," - an operation to be performed during navigation, such as a turn, and the expected duration of the movement."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"narration")," - textual guidance describing the maneuver to be performed, such as a turn, distance to travel, and expected time."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path")," - the sequence of edges forming a route"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"penalty")," - fixed costs in seconds that are only added to the path cost. Penalties can influence the route path determination but do not add to the estimated time along the path."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"route")," - sequence of edges and maneuvers forming the best travel path between locations given the available road network, costs, influence factors, and other inputs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"short path")," - a route that attempts to minimize distance traveled over the constituent edges, but may not be the shortest distance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"through location")," - an optional location to influence the route to travel through that location."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tiled routing")," - method of building a path on graph data that has been split into square cells."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"time")," - the number of seconds estimated to complete a maneuver or trip, including any additional costs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"trip")," - results of an entire route, including locations, legs, and maneuvers."),(0,o.kt)("li",{parentName:"ul"},"height - with respect to elevation, the height above or below sea level at a specific location (lat,lng)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"height with range")," - computing the range (cumulative distance) and height for a series of lat,lng pairs of a line or shape. This is very useful for charting/graphing."))),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Flexible routing methods with dynamic costing - allowing multiple route types with the same data."),(0,o.kt)("li",{parentName:"ol"},"Expanded guidance / route narrative information providing clear and concise instructions along the route as well as output tailored for navigation along the route."),(0,o.kt)("li",{parentName:"ol"},"Tiled routing data structure allowing use within small memory profiles including mobile devices."),(0,o.kt)("li",{parentName:"ol"},"Includes software to import and create routing tiles from OpenStreetMap pbf data: from small extracts to worldwide coverage."),(0,o.kt)("li",{parentName:"ol"},"Includes turn restrictions, highway exit information, administrative information, and timezones.")),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Valhalla API has the following endpoints for querying the data:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route"},"route"))," - the service guides you between points by car, bike, foot, and multimodal combinations involving walking and riding public transit."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-optimized-route"},"optimized-route"))," - computes the times and distances between many origins and destinations and provides you with an optimized path between the locations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-matrix"},"matrix"))," - if you want only a table of the times and distances, start with the matrix service."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-isochrone"},"isochrone"))," - get a computation of areas that are reachable within specified time periods from a location or set of locations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-expansion"},"expansion"))," - return a geojson representation of a graph traversal at a given location."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-locate"},"locate"))," - get detailed metadata about the nodes and edges in the graph.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud83d\udcdd ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Note:")),"\nValhalla is an open-source toolkit for multimodal transportation, powered by open data. The APIs use the standard REST model of interaction with JSON serving as both the request and response formats. Please refer to a specific service's API documentation to learn about the various request/response properties. In addition to JSON request/response formats Valhalla also supports protocol buffers as request/response format.")),(0,o.kt)("font",{size:"2"}," Copyright \xa9 https://valhalla.github.io/valhalla/"))}u.isMDXComponent=!0},42826:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/valhalla-c89432343d13458ec25ec9ccedd7d519.png"}}]);