"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[7247],{87417:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=s(74848),n=s(28453);const o={sidebar_position:7,id:"osm-valhalla-expansion",slug:"osm-valhalla-expansion",title:"Expansion API",tags:["osm","expansion","API","valhalla"]},i="Expansion service API reference",a={id:"MapColonies/openstreetmap/valhalla/osm-valhalla-expansion",title:"Expansion API",description:"Routing algorithms find the best path by expanding their search from start nodes/edges across the routing network until the destination is reached (unidirectional) or both search branches meet (bidirectional).",source:"@site/docs/MapColonies/openstreetmap/valhalla/expansion.md",sourceDirName:"MapColonies/openstreetmap/valhalla",slug:"/MapColonies/openstreetmap/valhalla/osm-valhalla-expansion",permalink:"/developer-portal/pr-preview/pr-118/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-expansion",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/openstreetmap/valhalla/expansion.md",tags:[{inline:!0,label:"osm",permalink:"/developer-portal/pr-preview/pr-118/docs/tags/osm"},{inline:!0,label:"expansion",permalink:"/developer-portal/pr-preview/pr-118/docs/tags/expansion"},{inline:!0,label:"API",permalink:"/developer-portal/pr-preview/pr-118/docs/tags/api"},{inline:!0,label:"valhalla",permalink:"/developer-portal/pr-preview/pr-118/docs/tags/valhalla"}],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,id:"osm-valhalla-expansion",slug:"osm-valhalla-expansion",title:"Expansion API",tags:["osm","expansion","API","valhalla"]},sidebar:"docSidebar",previous:{title:"Isochrone API",permalink:"/developer-portal/pr-preview/pr-118/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-isochrone"},next:{title:"Locate API",permalink:"/developer-portal/pr-preview/pr-118/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-locate"}},l={},d=[{value:"Inputs of the Expansion service",id:"inputs-of-the-expansion-service",level:2},{value:"Outputs of the Expansion service",id:"outputs-of-the-expansion-service",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"expansion-service-api-reference",children:"Expansion service API reference"})}),"\n",(0,r.jsxs)(t.p,{children:["Routing algorithms find the best path by ",(0,r.jsx)(t.em,{children:"expanding"})," their search from start nodes/edges across the routing network until the destination is reached (unidirectional) or both search branches meet (bidirectional)."]}),"\n",(0,r.jsxs)(t.p,{children:["The expansion service wraps the ",(0,r.jsx)(t.code,{children:"route"}),", ",(0,r.jsx)(t.code,{children:"isochrone"})," and ",(0,r.jsx)(t.code,{children:"sources_to_targets"})," services and returns a GeoJSON with all network edges (way segments) the underlying routing algorithm visited during the expansion, with relevant properties for each edge (e.g. ",(0,r.jsx)(t.code,{children:"duration"})," & ",(0,r.jsx)(t.code,{children:"distance"}),"). A top-level ",(0,r.jsx)(t.code,{children:"algorithm"})," propertry informs about the used algorithm: unidirectional & bidirectional A* (for ",(0,r.jsx)(t.code,{children:"route"}),") and unidirectional Dijkstra (for ",(0,r.jsx)(t.code,{children:"isochrone"}),")."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note"}),", for even moderately long routes (or isochrones or few sources/targets) the ",(0,r.jsx)(t.code,{children:"/expansion"})," action can produce gigantic GeoJSON responses of 100s of MB."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"A 11 km isochrone expansion result in Vienna, Austria",src:s(63909).A+"",width:"732",height:"717"})}),"\n",(0,r.jsx)(t.h2,{id:"inputs-of-the-expansion-service",children:"Inputs of the Expansion service"}),"\n",(0,r.jsxs)(t.p,{children:["Since this service wraps other services, the request format mostly follows the ones of the ",(0,r.jsx)(t.a,{href:"/developer-portal/pr-preview/pr-118/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#inputs-of-a-route",children:"route"}),", ",(0,r.jsx)(t.a,{href:"/developer-portal/pr-preview/pr-118/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-isochrone#inputs-of-the-isochrone-service",children:"isochrone"})," and ",(0,r.jsx)(t.a,{href:"/developer-portal/pr-preview/pr-118/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-matrix#inputs-of-the-matrix-service",children:"matrix"}),". Additionally, it accepts the following parameters:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,r.jsx)(t.code,{children:"action"})," (required)"]}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["The service whose expansion should be tracked. Currently one of ",(0,r.jsx)(t.code,{children:"route"}),", ",(0,r.jsx)(t.code,{children:"isochrone"})," or ",(0,r.jsx)(t.code,{children:"sources_to_targets"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,r.jsx)(t.code,{children:"skip_opposites"})," (optional)"]}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["If set to ",(0,r.jsx)(t.code,{children:"true"})," the output won't contain an edge's opposing edge. Opposing edges can be thought of as both directions of one road segment. Of the two, we discard the directional edge with higher cost and keep the one with less cost. Default false."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,r.jsx)(t.code,{children:"expansion_properties"})," (optional)"]}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:['A JSON array of strings of the GeoJSON property keys you\'d like to have in the response. One or multiple of "durations", "distances", "costs", "edge_ids", "statuses". ',(0,r.jsx)(t.strong,{children:"Note"}),", that each additional property will increase the output size by minimum ~ 25%. By default an empty ",(0,r.jsx)(t.code,{children:"properties"})," object is returned."]})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"expansion_properties"})," choices are as follows:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"distances"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Returns the accumulated distance in meters for each edge in order of graph traversal."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"durations"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Returns the accumulated duration in seconds for each edge in order of graph traversal."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"costs"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Returns the accumulated cost for each edge in order of graph traversal."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"edge_ids"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Returns the internal edge IDs for each edge in order of graph traversal. Mostly interesting for debugging."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"statuses"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:'Returns the edge states for each edge in order of graph traversal. Mostly interesting for debugging. Can be one of "r" (reached), "s" (settled), "c" (connected).'})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"An example request is:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{"expansion_properties":["distances", "durations", "costs"],"contours":[{"time":1.0}],"locations":[{"lon":0.00026949361342338066,"lat":-0.00017966240895360996}],"costing":"auto","action":"isochrone"}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"outputs-of-the-expansion-service",children:"Outputs of the Expansion service"}),"\n",(0,r.jsxs)(t.p,{children:["In the service response, the expanded way segments are returned as ",(0,r.jsx)(t.a,{href:"http://geojson.org/",children:"GeoJSON"}),". The geometry is a single ",(0,r.jsx)(t.code,{children:"MultiLineString"})," with each ",(0,r.jsx)(t.code,{children:"LineString"})," representing one way segment (edge). Due to the verbosity of the GeoJSON format, single geometry features would produce prohibitively huge responses. However, that also means that the ",(0,r.jsx)(t.code,{children:"properties"})," contain arrays of the tracked attributes, where the indices are correlating to the ",(0,r.jsx)(t.code,{children:"coordinates"})," array, i.e. the 3rd element in a ",(0,r.jsx)(t.code,{children:"properties"})," array will correspond to the 3rd ",(0,r.jsx)(t.code,{children:"LineString"})," in the ",(0,r.jsx)(t.code,{children:"MultiLineString"})," geometry."]}),"\n",(0,r.jsxs)(t.p,{children:["The output will only contain the ",(0,r.jsx)(t.code,{children:"properties"})," which were specified in the ",(0,r.jsx)(t.code,{children:"expansion_properties"})," request array. If the parameter was omitted in the request, the output will contain an empty ",(0,r.jsx)(t.code,{children:"properties"})," object."]}),"\n",(0,r.jsxs)(t.p,{children:["An example response for ",(0,r.jsx)(t.code,{children:'"action": "isochrone"'})," is:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{"properties":{"algorithm":"unidirectional_dijkstra"},"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"MultiLineString","coordinates":[[[0.00027,-0.00017],[0.00027,0.0]],[[0.00027,-0.00017],[0.00027,-0.00035]],[[0.00027,-0.00035],[0.00027,-0.00017]],[[0.00027,0.0],[0.00027,-0.00017]],[[0.00027,-0.00017],[0.00053,-0.00017]],[[0.00027,-0.00017],[0.0,-0.00017]],[[0.0,-0.00017],[0.00027,-0.00017]],[[0.00053,-0.00017],[0.0008,-0.00017]],[[0.0008,-0.00017],[0.00053,-0.00017]],[[0.00053,-0.00017],[0.00027,-0.00017]],[[0.00053,-0.00017],[0.0008,0.0]]]},"properties":{"distances":[20,20,40,40,30,30,60,60,90,120,80],"durations":[0,0,29,29,1,1,30,2,31,33,5],"costs":[0,0,1,1,1,1,2,2,3,4,11]}}]}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},63909:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/expansion_dijkstra-be9f24506cf2e9922b2d0bb63b82e798.png"},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var r=s(96540);const n={},o=r.createContext(n);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);