"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[4381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_position:4,id:"osm-valhalla-isochrone",slug:"osm-valhalla-isochrone",title:"Isochrone API",tags:["osm","isochrone","API","valhalla"]},i="Isochrone & Isodistance service API reference",l={unversionedId:"MapColonies/openstreetmap/valhalla/osm-valhalla-isochrone",id:"MapColonies/openstreetmap/valhalla/osm-valhalla-isochrone",title:"Isochrone API",description:"An isochrone is a line that connects points of equal travel time about a given location, from the Greek roots of iso for equal and chrone for time. Valhalla's isochrone service computes areas that are reachable within specified time intervals from a location, and returns the reachable regions as contours of polygons or lines that you can display on a map.",source:"@site/docs/MapColonies/openstreetmap/valhalla/isochrone.md",sourceDirName:"MapColonies/openstreetmap/valhalla",slug:"/MapColonies/openstreetmap/valhalla/osm-valhalla-isochrone",permalink:"/developer-portal/pr-preview/pr-105/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-isochrone",draft:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/openstreetmap/valhalla/isochrone.md",tags:[{label:"osm",permalink:"/developer-portal/pr-preview/pr-105/docs/tags/osm"},{label:"isochrone",permalink:"/developer-portal/pr-preview/pr-105/docs/tags/isochrone"},{label:"API",permalink:"/developer-portal/pr-preview/pr-105/docs/tags/api"},{label:"valhalla",permalink:"/developer-portal/pr-preview/pr-105/docs/tags/valhalla"}],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"osm-valhalla-isochrone",slug:"osm-valhalla-isochrone",title:"Isochrone API",tags:["osm","isochrone","API","valhalla"]},sidebar:"docSidebar",previous:{title:"Matrix API",permalink:"/developer-portal/pr-preview/pr-105/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-matrix"},next:{title:"Expansion API",permalink:"/developer-portal/pr-preview/pr-105/docs/MapColonies/openstreetmap/valhalla/osm-valhalla-expansion"}},s={},p=[{value:"Inputs of the Isochrone service",id:"inputs-of-the-isochrone-service",level:2},{value:"Location parameters",id:"location-parameters",level:3},{value:"Costing parameters",id:"costing-parameters",level:3},{value:"Other request parameters",id:"other-request-parameters",level:3},{value:"Outputs of the Isochrone service",id:"outputs-of-the-isochrone-service",level:2},{value:"Draw isochrones on a map",id:"draw-isochrones-on-a-map",level:3},{value:"Examples",id:"examples",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"isochrone--isodistance-service-api-reference"},"Isochrone & Isodistance service API reference"),(0,o.kt)("p",null,"An isochrone is a line that connects points of equal travel time about a given location, from the Greek roots of ",(0,o.kt)("inlineCode",{parentName:"p"},"iso")," for equal and ",(0,o.kt)("inlineCode",{parentName:"p"},"chrone")," for time. Valhalla's isochrone service computes areas that are reachable within specified time intervals from a location, and returns the reachable regions as contours of polygons or lines that you can display on a map."),(0,o.kt)("p",null,"Isodistances follow the same concept, but instead of time one specifies distance intervals."),(0,o.kt)("p",null,"Isochrone maps share some of the same concepts and terminology with familiar topographic maps, which depict contour lines for points of equal elevation. For this reason other terms common in topography apply, such as contours or isolines."),(0,o.kt)("p",null,"This is an example of 15, 30, 45 and 60 minute bicycle isochrones centered in Lancaster, PA."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Isochrones for travel times by walking in Lancaster, PA",src:n(44222).Z,width:"1848",height:"755"})),(0,o.kt)("h2",{id:"inputs-of-the-isochrone-service"},"Inputs of the Isochrone service"),(0,o.kt)("p",null,"An isochrone request run locally takes the form of ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:8002/isochrone?json={}"),", where the JSON inputs inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"{}")," includes an array of at least one location and options for the ",(0,o.kt)("a",{parentName:"p",href:"/developer-portal/pr-preview/pr-105/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#costing-models"},"route costing model"),"."),(0,o.kt)("p",null,"For example, you can use the isochrone service to find out where you can travel within a 15-minute walk from your office building. The API request for this uses ",(0,o.kt)("inlineCode",{parentName:"p"},"isochrone?")," as the request action, ",(0,o.kt)("inlineCode",{parentName:"p"},"pedestrian")," costing, and a single contour for a 15-minute time interval. The response is GeoJSON, which you can display on a map to visualize where you might be able to walk."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"locations":[{"lat":40.744014,"lon":-73.990508}],"costing":"pedestrian","contours":[{"time":15.0,"color":"ff0000"}]}&id=Walk_From_Office\n')),(0,o.kt)("p",null,"There is an option to name your isochrone request by appending ",(0,o.kt)("inlineCode",{parentName:"p"},"&id="),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," is returned with the response so you can match it to your corresponding request."),(0,o.kt)("h3",{id:"location-parameters"},"Location parameters"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"locations")," must include a latitude and longitude in decimal degrees. The coordinates can come from many input sources, such as a GPS location, a point or a click on a map, a geocoding service, and so on. External search services, such as Mapbox Geocoding can be used to find places and geocode addresses, whose coordinates can be used as input to the service."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Location parameters"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"lat")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Latitude of the location in degrees.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"lon")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Longitude of the location in degrees.")))),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/developer-portal/pr-preview/pr-105/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#locations"},"route location documentation")," for more information on specifying locations."),(0,o.kt)("h3",{id:"costing-parameters"},"Costing parameters"),(0,o.kt)("p",null,"The isochrone service uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"auto"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bicycle"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pedestrian"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"multimodal")," and all other costing models available in the Valhalla Turn-by-Turn service. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/developer-portal/pr-preview/pr-105/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#costing-models"},"route costing models")," and ",(0,o.kt)("a",{parentName:"p",href:"/developer-portal/pr-preview/pr-105/docs/MapColonies/openstreetmap/valhalla/turn-by-turn/osm-valhalla-route#costing-options"},"costing options")," documentation for more on how to specify this input."),(0,o.kt)("h3",{id:"other-request-parameters"},"Other request parameters"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Parameter description"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"date_time")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The local date and time at the location. ",(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"type"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"0 - Current departure time."),(0,o.kt)("li",null,"1 - Specified departure time."),(0,o.kt)("li",null,"2 - Specified arrival time. Note: This is not yet implemented for ",(0,o.kt)("inlineCode",{parentName:"td"},"multimodal"),"."))),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"value"),' - the date and time specified in ISO 8601 format (YYYY-MM-DDThh:mm) in the local time zone of departure or arrival. For example, "2016-07-03T08:06"')))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"id")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Name of the isochrone request. If ",(0,o.kt)("inlineCode",{parentName:"td"},"id")," is specified, the name is returned with the response.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"contours")),(0,o.kt)("td",{parentName:"tr",align:"left"},"A JSON array of contour objects with the time in minutes or distance in kilometers and color to use for each isochrone contour. You can specify up to four contours (by default).",(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"time")," - A floating point value specifying the time in minutes for the contour."),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"distance")," - A floating point value specifying the distance in kilometers for the contour."),(0,o.kt)("li",null,(0,o.kt)("inlineCode",{parentName:"td"},"color")," - The color for the output of the contour. Specify it as a Hex value, but without the ",(0,o.kt)("inlineCode",{parentName:"td"},"#"),", such as ",(0,o.kt)("inlineCode",{parentName:"td"},'"color":"ff0000"')," for red. If no color is specified, the isochrone service will assign a default color to the output.")),"You can only specify ",(0,o.kt)("strong",{parentName:"td"},"one metric per contour"),", i.e. ",(0,o.kt)("inlineCode",{parentName:"td"},"time")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"distance"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"polygons")),(0,o.kt)("td",{parentName:"tr",align:"left"},"A Boolean value to determine whether to return geojson polygons or linestrings as the contours. The default is ",(0,o.kt)("inlineCode",{parentName:"td"},"false"),", which returns lines; when ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", polygons are returned. Note: When ",(0,o.kt)("inlineCode",{parentName:"td"},"polygons")," is ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", any contour that forms a ring is returned as a polygon.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"denoise")),(0,o.kt)("td",{parentName:"tr",align:"left"},"A floating point value from ",(0,o.kt)("inlineCode",{parentName:"td"},"0")," to ",(0,o.kt)("inlineCode",{parentName:"td"},"1")," (default of ",(0,o.kt)("inlineCode",{parentName:"td"},"1"),") which can be used to remove smaller contours. A value of ",(0,o.kt)("inlineCode",{parentName:"td"},"1")," will only return the largest contour for a given time value. A value of ",(0,o.kt)("inlineCode",{parentName:"td"},"0.5")," drops any contours that are less than half the area of the largest contour in the set of contours for that same time value.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"generalize")),(0,o.kt)("td",{parentName:"tr",align:"left"},"A floating point value in meters used as the tolerance for Douglas-Peuckergeneralization. Note: Generalization of contours can lead to self-intersections, as well as intersections of adjacent contours.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"show_locations")),(0,o.kt)("td",{parentName:"tr",align:"left"},"A boolean indicating whether the input locations should be returned as MultiPoint features: one feature for the exact input coordinates and one feature for the coordinates of the network node it snapped to. Default false."))))),(0,o.kt)("h2",{id:"outputs-of-the-isochrone-service"},"Outputs of the Isochrone service"),(0,o.kt)("p",null,"In the service response, the isochrone contours are returned as GeoJSON, which can be integrated into mapping applications."),(0,o.kt)("p",null,"The contours are calculated using rasters and are returned as either polygon or line features, depending on your input setting for the ",(0,o.kt)("inlineCode",{parentName:"p"},"polygons")," parameter. If an isochrone request has been named using the optional ",(0,o.kt)("inlineCode",{parentName:"p"},"&id=")," input, then the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," is returned as a name property for the feature collection within the GeoJSON response. A ",(0,o.kt)("inlineCode",{parentName:"p"},"metric")," attribute lets you know whether it's a ",(0,o.kt)("inlineCode",{parentName:"p"},"distance")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"time")," contour. A warnings array may also be included. This array may contain warning objects informing about deprecated request parameters, clamped values etc. | "),(0,o.kt)("p",null,"See the HTTP return codes for more on messages you might receive from the service."),(0,o.kt)("h3",{id:"draw-isochrones-on-a-map"},"Draw isochrones on a map"),(0,o.kt)("p",null,"Most JavaScript-based GeoJSON renderers, including Leaflet, can use the isochrone styling information directly from the response. At present, you cannot control the opacity through the API."),(0,o.kt)("p",null,"When making a map, drawing the isochrone contours as lines is more straightforward than polygons, and, therefore, currently is the default and recommended method. When deciding between the output as lines and polygons, consider your use case and the additional styling considerations involved with polygons. For example, fills should be rendered as semi-transparent over the other map layers so they are visible, although you may have more flexibility when using a vector-based map. In addition, polygons from multiple contour levels do not have overlapping areas cut out or removed. In other words, the outer contours include the areas of any inner contours, causing the colors and transparencies to blend when multiple contour polygons are drawn at the same time."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Isochrone example",src:n(86162).Z,width:"1374",height:"932"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'<VALHALLA BASE URL>/isochrone?json={"costing":"pedestrian","costing_options":{"pedestrian":{"exclude_polygons":[],"use_ferry":1,"use_living_streets":0.5,"use_tracks":0,"service_penalty":15,"service_factor":1,"shortest":false,"use_hills":0.5,"walking_speed":5.1,"walkway_factor":1,"sidewalk_factor":1,"alley_factor":2,"driveway_factor":5,"step_penalty":0,"max_hiking_difficulty":1,"use_lit":0,"transit_start_end_max_distance":2145,"transit_transfer_max_distance":800}},"contours":[{"time":1},{"time":2},{"time":3}],"locations":[{"lon":35.208714008331306,"lat":31.78339608836721,"type":"break"}],"directions_options":{"units":"kilometers"},"id":"valhalla_isochrones_lonlat_35.208714008331306,31.78339608836721_range_3_interval_1"}`\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Lookup 'Many To Many' Results in JSON Format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="Lookup Results in JSON Format"',title:'"Lookup',Results:!0,in:!0,JSON:!0,'Format"':!0},'{\n  "id": "valhalla_isochrones_lonlat_35.208714008331306,31.78339608836721_range_3_interval_1",\n  "type": "FeatureCollection",\n  "features": [\n      {\n          "properties": {\n              "fill": "#bf4040",\n              "fillOpacity": 0.33,\n              "fill-opacity": 0.33,\n              "fillColor": "#bf4040",\n              "color": "#bf4040",\n              "contour": 3,\n              "opacity": 0.33,\n              "metric": "time"\n          },\n          "geometry": {\n              "coordinates": [\n                  [\n                      35.209714,\n                      31.784679\n                  ],\n                  [\n                      35.208714,\n                      31.785037\n                  ],\n                  [\n                      35.207714,\n                      31.784796\n                  ],\n                  [\n                      35.207385,\n                      31.783726\n                  ],\n                  [\n                      35.206662,\n                      31.783396\n                  ],\n                  [\n                      35.206649,\n                      31.782396\n                  ],\n                  [\n                      35.207868,\n                      31.781550\n                  ],\n                  [\n                      35.208714,\n                      31.781309\n                  ],\n                  [\n                      35.210372,\n                      31.782396\n                  ],\n                  [\n                      35.210588,\n                      31.783396\n                  ],\n                  [\n                      35.209714,\n                      31.784679\n                  ]\n              ],\n              "type": "LineString"\n          },\n          "type": "Feature"\n      },\n      {\n          "properties": {\n              "fill": "#bfaa40",\n              "fillOpacity": 0.33,\n              "fill-opacity": 0.33,\n              "fillColor": "#bfaa40",\n              "color": "#bfaa40",\n              "contour": 2,\n              "opacity": 0.33,\n              "metric": "time"\n          },\n          "geometry": {\n              "coordinates": [\n                  [\n                      35.208714,\n                      31.784654\n                  ],\n                  [\n                      35.207428,\n                      31.783396\n                  ],\n                  [\n                      35.208714,\n                      31.781960\n                  ],\n                  [\n                      35.209848,\n                      31.782396\n                  ],\n                  [\n                      35.209991,\n                      31.783396\n                  ],\n                  [\n                      35.208714,\n                      31.784654\n                  ]\n              ],\n              "type": "LineString"\n          },\n          "type": "Feature"\n      },\n      {\n          "properties": {\n              "fill": "#6abf40",\n              "fillOpacity": 0.33,\n              "fill-opacity": 0.33,\n              "fillColor": "#6abf40",\n              "color": "#6abf40",\n              "contour": 1,\n              "opacity": 0.33,\n              "metric": "time"\n          },\n          "geometry": {\n              "coordinates": [\n                  [\n                      35.208714,\n                      31.784150\n                  ],\n                  [\n                      35.208124,\n                      31.783396\n                  ],\n                  [\n                      35.208714,\n                      31.782647\n                  ],\n                  [\n                      35.209365,\n                      31.783396\n                  ],\n                  [\n                      35.208714,\n                      31.784150\n                  ]\n              ],\n              "type": "LineString"\n          },\n          "type": "Feature"\n      }\n  ]\n}\n'))))}m.isMDXComponent=!0},86162:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/isochrone-example-f1a402c47a3c97e124392dfeec1a85f7.png"},44222:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/isochrone-538e67996fa6fc62bd01da104f04fa2b.png"}}]);