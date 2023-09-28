"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[3196],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),f=l,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||r;return t?a.createElement(m,o(o({ref:n},d),{},{components:t})):a.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},61454:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(87462),l=(t(67294),t(3905));const r={sidebar_position:8,id:"osm-valhalla-locate",slug:"osm-valhalla-locate",title:"Locate API",tags:["osm","locate","API","valhalla"]},o="Valhalla locate service API reference",i={unversionedId:"MapColonies/openstreetmap/valhalla/osm-valhalla-locate",id:"MapColonies/openstreetmap/valhalla/osm-valhalla-locate",title:"Locate API",description:"Valhalla's locate service, is an open-source service that provides detailed information about streets and intersections close to an input point with some added matching criteria. This allows for tight integration in routing and navigation applications on web or mobile.",source:"@site/docs/MapColonies/openstreetmap/valhalla/locate.md",sourceDirName:"MapColonies/openstreetmap/valhalla",slug:"/MapColonies/openstreetmap/valhalla/osm-valhalla-locate",permalink:"/developer-portal/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-locate",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/openstreetmap/valhalla/locate.md",tags:[{label:"osm",permalink:"/developer-portal/docs/tags/osm"},{label:"locate",permalink:"/developer-portal/docs/tags/locate"},{label:"API",permalink:"/developer-portal/docs/tags/api"},{label:"valhalla",permalink:"/developer-portal/docs/tags/valhalla"}],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,id:"osm-valhalla-locate",slug:"osm-valhalla-locate",title:"Locate API",tags:["osm","locate","API","valhalla"]},sidebar:"docSidebar",previous:{title:"Expansion API",permalink:"/developer-portal/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-expansion"},next:{title:"Symbology",permalink:"/developer-portal/docs/category/symbology"}},s={},c=[{value:"Inputs of a locate request",id:"inputs-of-a-locate-request",level:2},{value:"Other request options",id:"other-request-options",level:3},{value:"Outputs of a locate request",id:"outputs-of-a-locate-request",level:2}],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,l.kt)(p,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"valhalla-locate-service-api-reference"},"Valhalla locate service API reference"),(0,l.kt)("p",null,"Valhalla's locate service, is an open-source service that provides detailed information about streets and intersections close to an input point with some added matching criteria. This allows for tight integration in routing and navigation applications on web or mobile."),(0,l.kt)("h2",{id:"inputs-of-a-locate-request"},"Inputs of a locate request"),(0,l.kt)("p",null,"The locate request run locally takes the form of ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost:8002/locate?json={}"),", where the JSON inputs inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"{}")," include location information, name and options for the costing model, and output options. Here is the JSON payload for an example request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"verbose":true,"locations":[{"lat":42.358528,"lon":-83.271400},{"lat":42.996613,"lon":-78.749855}],"costing":"bicycle","costing_options":{"bicycle":{"bicycle_type":"road"}},"directions_options":{"units":"miles"},"id":"12abc3afe23984fe"}\n')),(0,l.kt)("p",null,"This request provides detailed information about specific streets and intersections near the two input locations. Steets which do not have a surface type condusive to road bicycles will be excluded from the results. The units used for the lengths of the street sections will be displayed in miles."),(0,l.kt)("p",null,"There is an option to name your request. You can do this by adding and ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," key to your request. The ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," is returned with the response so a user could match to the corresponding request."),(0,l.kt)("p",null,"Because the locate service is designed to work in tandem with the route service API, the inputs for the two APIs are identical. For detailed options regarding specifying locations, costing models, costing options, directions options please see the relevant sections in the ",(0,l.kt)("a",{parentName:"p",href:"/developer-portal/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#inputs-of-a-route"},"routing API docs")),(0,l.kt)("h3",{id:"other-request-options"},"Other request options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Options"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"verbose")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Can be set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),", but defaults to ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),". If set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," dense attribution of the given street or intersection will be returned.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Name your route request. If ",(0,l.kt)("inlineCode",{parentName:"td"},"id")," is specified, the naming will be sent through to the response.")))),(0,l.kt)("h2",{id:"outputs-of-a-locate-request"},"Outputs of a locate request"),(0,l.kt)("p",null,"If a request has been named using the optional ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," key, then this ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," key and value will be echoed in the JSON response object."),(0,l.kt)("p",null,"The locate results are returned as a JSON array, with one JSON object per input location in the order specified. In ",(0,l.kt)("inlineCode",{parentName:"p"},"verbose")," mode details about the streets and intersections includding mode of travel access, names, way ids, shape, side of street as well as the closest point to the input along these features will be returned. If ",(0,l.kt)("inlineCode",{parentName:"p"},"verbose")," was not enabled only the closest point, way id and side of street will be returned. A warnings array may also be included. This array may contain warning objects informing about deprecated request parameters, clamped values etc. | "),(0,l.kt)("p",null,"Here are some sample results with ",(0,l.kt)("inlineCode",{parentName:"p"},"verbose")," set to ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"/ ",(0,l.kt)("inlineCode",{parentName:"p"},"true:")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"set to false"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'[\n  {\n    "input_lon": -76.495743,\n    "input_lat": 40.310555,\n    "nodes": [\n      {\n        "lat": 40.313206,\n        "lon": -76.494987\n      }\n    ],\n    "edges": [\n      {\n        "way_id": 12292268,\n        "correlated_lat": 40.313206,\n        "side_of_street": "neither",\n        "percent_along": 0,\n        "correlated_lon": -76.494987\n      },\n      {\n        "way_id": 12292268,\n        "correlated_lat": 40.313206,\n        "side_of_street": "neither",\n        "percent_along": 1,\n        "correlated_lon": -76.494987\n      }\n    ],\n    "warnings": [\n      "hov costing is deprecated and will be turned into auto costing with hov2=true costing option"\n    ]\n  }\n]\n'))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"set to true"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'[\n  {\n    "input_lon": -76.495743,\n    "input_lat": 40.310555,\n    "nodes": [\n      {\n        "traffic_signal": false,\n        "type": "street_intersection",\n        "lat": 40.313206,\n        "node_id": {\n          "id": 3080,\n          "value": 103353655794,\n          "tile_id": 750654,\n          "level": 2\n        },\n        "access": {\n          "wheelchair": true,\n          "taxi": false,\n          "HOV": true,\n          "truck": true,\n          "emergency": true,\n          "pedestrian": true,\n          "car": true,\n          "bus": true,\n          "bicycle": true\n        },\n        "lon": -76.494987,\n        "edge_count": 1,\n        "administrative": {\n          "time_zone_posix": "EST-05EDT+01,M3.2.0/02:00,M11.1.0/02:00",\n          "standard_time_zone_name": "EST",\n          "iso_3166-1": "US",\n          "daylight_savings_time_zone_name": "EDT",\n          "country": "United States of America",\n          "iso_3166-2": "PA",\n          "state": "Pennsylvania"\n        },\n        "intersection_type": "dead-end",\n        "density": 2,\n        "local_edge_count": 1,\n        "mode_change": false\n      }\n    ],\n    "edges": [\n      {\n        "edge_id": {\n          "id": 7660,\n          "value": 257032954354,\n          "tile_id": 750654,\n          "level": 2\n        },\n        "edge_info": {\n          "shape": "ivo{kAvg{{pCiMlJ{FfDgDm@c_AqxBeFO}}@`]",\n          "way_id": 12292268,\n          "names": [\n            "Bomgardner Lane"\n          ]\n        },\n        "edge": {\n          "classification": {\n            "link": false,\n            "internal": false,\n            "surface": "paved_smooth",\n            "classification": "residential"\n          },\n          "end_node": {\n            "id": 3081,\n            "value": 103387210226,\n            "tile_id": 750654,\n            "level": 2\n          },\n          "speed": 30,\n          "traffic_signal": false,\n          "start_restriction": {\n            "moped": false,\n            "wheelchair": false,\n            "taxi": false,\n            "HOV": false,\n            "truck": false,\n            "emergency": false,\n            "pedestrian": false,\n            "car": false,\n            "bus": false,\n            "bicycle": false\n          },\n          "speed_limit": 0,\n          "geo_attributes": {\n            "weighted_grade": 1.67,\n            "length": 388\n          },\n          "cycle_lane": "none",\n          "access_restriction": false,\n          "part_of_complex_restriction": false,\n          "country_crossing": false,\n          "has_exit_sign": false,\n          "lane_count": 1,\n          "speed_type": "classified",\n          "drive_on_right": true,\n          "destination_only": false,\n          "seasonal": false,\n          "tunnel": false,\n          "bridge": false,\n          "access": {\n            "moped": true,\n            "wheelchair": true,\n            "taxi": false,\n            "HOV": true,\n            "truck": true,\n            "emergency": false,\n            "pedestrian": true,\n            "car": true,\n            "bus": true,\n            "bicycle": true\n          },\n          "toll": false,\n          "round_about": false,\n          "bike_network": {\n            "mountain": false,\n            "local": false,\n            "regional": false,\n            "national": false\n          },\n          "end_restriction": {\n            "moped": false,\n            "wheelchair": false,\n            "taxi": false,\n            "HOV": false,\n            "truck": false,\n            "emergency": false,\n            "pedestrian": false,\n            "car": false,\n            "bus": false,\n            "bicycle": false\n          },\n          "unreachable": false,\n          "forward": true,\n          "not_thru": false,\n          "truck_route": false,\n          "use": "road"\n        },\n        "minimum_reachability": 51,\n        "score": 899846.4,\n        "traffic_segments": [],\n        "percent_along": 0,\n        "correlated_lon": -76.494987,\n        "side_of_street": "neither",\n        "correlated_lat": 40.313206\n      },\n      {\n        "edge_id": {\n          "id": 7661,\n          "value": 257066508786,\n          "tile_id": 750654,\n          "level": 2\n        },\n        "edge_info": {\n          "shape": "ivo{kAvg{{pCiMlJ{FfDgDm@c_AqxBeFO}}@`]",\n          "way_id": 12292268,\n          "names": [\n            "Bomgardner Lane"\n          ]\n        },\n        "edge": {\n          "classification": {\n            "link": false,\n            "internal": false,\n            "surface": "paved_smooth",\n            "classification": "residential"\n          },\n          "end_node": {\n            "id": 3080,\n            "value": 103353655794,\n            "tile_id": 750654,\n            "level": 2\n          },\n          "speed": 30,\n          "traffic_signal": false,\n          "start_restriction": {\n            "moped": false,\n            "wheelchair": false,\n            "taxi": false,\n            "HOV": false,\n            "truck": false,\n            "emergency": false,\n            "pedestrian": false,\n            "car": false,\n            "bus": false,\n            "bicycle": false\n          },\n          "speed_limit": 0,\n          "geo_attributes": {\n            "weighted_grade": -1.67,\n            "length": 388\n          },\n          "cycle_lane": "none",\n          "access_restriction": false,\n          "part_of_complex_restriction": false,\n          "country_crossing": false,\n          "has_exit_sign": false,\n          "lane_count": 1,\n          "speed_type": "classified",\n          "drive_on_right": true,\n          "destination_only": false,\n          "seasonal": false,\n          "tunnel": false,\n          "bridge": false,\n          "access": {\n            "moped": true,\n            "wheelchair": true,\n            "taxi": false,\n            "HOV": true,\n            "truck": true,\n            "emergency": false,\n            "pedestrian": true,\n            "car": true,\n            "bus": true,\n            "bicycle": true\n          },\n          "toll": false,\n          "round_about": false,\n          "bike_network": {\n            "mountain": false,\n            "local": false,\n            "regional": false,\n            "national": false\n          },\n          "end_restriction": {\n            "moped": false,\n            "wheelchair": false,\n            "taxi": false,\n            "HOV": false,\n            "truck": false,\n            "emergency": false,\n            "pedestrian": false,\n            "car": false,\n            "bus": false,\n            "bicycle": false\n          },\n          "unreachable": false,\n          "forward": false,\n          "not_thru": true,\n          "truck_route": false,\n          "use": "road"\n        },\n        "minimum_reachability": 51,\n        "score": 899846.4,\n        "traffic_segments": [],\n        "percent_along": 1,\n        "correlated_lon": -76.494987,\n        "side_of_street": "neither",\n        "correlated_lat": 40.313206\n      }\n    ],\n    "warnings": [\n      "hov costing is deprecated and will be turned into auto costing with hov2=true costing option"\n    ]\n  }\n]\n'))))}u.isMDXComponent=!0}}]);