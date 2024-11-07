"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[4929],{38103:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=t(74848),i=t(28453);const r={slug:"2022-q4",title:"2022-Q4 \ud83c\udf89",authors:{name:"Daniel Hermon",title:"MapColonies Tech Lead",url:"https://github.com/syncush",image_url:"/authors/syncush.png"},tags:["production","release-notes","3D","vector","raster","openstreetmap","osm"]},a="\ud83c\udf89 2022-Q4 Release Notes",s={permalink:"/developer-portal/pr-preview/pr-119/blog/2022-q4",editUrl:"https://github.com/MapColonies/developer-portal/blog/2023-01-15-2022-Q4.md",source:"@site/blog/2023-01-15-2022-Q4.md",title:"2022-Q4 \ud83c\udf89",description:"\ud83d\udcc4 TL;DR",date:"2023-01-15T00:00:00.000Z",tags:[{inline:!0,label:"production",permalink:"/developer-portal/pr-preview/pr-119/blog/tags/production"},{inline:!0,label:"release-notes",permalink:"/developer-portal/pr-preview/pr-119/blog/tags/release-notes"},{inline:!0,label:"3D",permalink:"/developer-portal/pr-preview/pr-119/blog/tags/3-d"},{inline:!0,label:"vector",permalink:"/developer-portal/pr-preview/pr-119/blog/tags/vector"},{inline:!0,label:"raster",permalink:"/developer-portal/pr-preview/pr-119/blog/tags/raster"},{inline:!0,label:"openstreetmap",permalink:"/developer-portal/pr-preview/pr-119/blog/tags/openstreetmap"},{inline:!0,label:"osm",permalink:"/developer-portal/pr-preview/pr-119/blog/tags/osm"}],readingTime:4.4,hasTruncateMarker:!1,authors:[{name:"Daniel Hermon",title:"MapColonies Tech Lead",url:"https://github.com/syncush",image_url:"/authors/syncush.png",imageURL:"/developer-portal/pr-preview/pr-119/authors/syncush.png",key:null,page:null}],frontMatter:{slug:"2022-q4",title:"2022-Q4 \ud83c\udf89",authors:{name:"Daniel Hermon",title:"MapColonies Tech Lead",url:"https://github.com/syncush",image_url:"/authors/syncush.png",imageURL:"/authors/syncush.png"},tags:["production","release-notes","3D","vector","raster","openstreetmap","osm"]},unlisted:!1,prevItem:{title:"2023-Q1 \ud83c\udf89",permalink:"/developer-portal/pr-preview/pr-119/blog/2023-q1"},nextItem:{title:"2022-Q3 \ud83c\udf89",permalink:"/developer-portal/pr-preview/pr-119/blog/2022-q3"}},o={authorsImageUrls:[void 0]},c=[{value:"\ud83d\udcc4 TL;DR",id:"-tldr",level:2},{value:"\ud83d\ude80 Features",id:"-features",level:2},{value:"Raster",id:"raster",level:3},{value:"Overview",id:"overview",level:4},{value:"Catalog Service",id:"catalog-service",level:4},{value:"Catalog Profile Update",id:"catalog-profile-update",level:5},{value:"New available layers:",id:"new-available-layers",level:4},{value:"Tile Serving (\u201cMap Server\u201d)",id:"tile-serving-map-server",level:4},{value:"General features",id:"general-features",level:4},{value:"Ingestion Service (activated via Catalog App in manager mode)",id:"ingestion-service-activated-via-catalog-app-in-manager-mode",level:4},{value:"Export Service",id:"export-service",level:4},{value:"Known Bugs \ud83d\udc1e",id:"known-bugs-",level:4},{value:"3D",id:"3d",level:3},{value:"Overview",id:"overview-1",level:4},{value:"Catalog Service",id:"catalog-service-1",level:4},{value:"Tile Serving Service",id:"tile-serving-service",level:4},{value:"Vector",id:"vector",level:3},{value:"Query Service",id:"query-service",level:4},{value:"OpenStreetMap Carto (OSM)",id:"openstreetmap-carto-osm",level:4},{value:"Nominatim",id:"nominatim",level:4},{value:"Catalog App",id:"catalog-app",level:3},{value:"Web tools",id:"web-tools",level:4},{value:"Products Management",id:"products-management",level:4},{value:"Fixed Bugs \ud83d\udc1e\u2714\ufe0f",id:"fixed-bugs-\ufe0f",level:4},{value:"MISC:",id:"misc",level:4},{value:"Known Bugs \ud83d\udc1e \u274c",id:"known-bugs--",level:4}];function d(e){const l={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h2,{id:"-tldr",children:"\ud83d\udcc4 TL;DR"}),"\n",(0,n.jsx)(l.p,{children:"Introducing new services in raster, vector.\nNew exciting features in the catalog app!\nOverall improvements and bug fixes."}),"\n",(0,n.jsx)(l.h2,{id:"-features",children:"\ud83d\ude80 Features"}),"\n",(0,n.jsx)(l.h3,{id:"raster",children:"Raster"}),"\n",(0,n.jsx)(l.h4,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(l.p,{children:"In addition to complete solution for raster product\u2019s consumption. A few major features where introduced in the new version."}),"\n",(0,n.jsx)(l.h4,{id:"catalog-service",children:"Catalog Service"}),"\n",(0,n.jsx)(l.h5,{id:"catalog-profile-update",children:"Catalog Profile Update"}),"\n",(0,n.jsx)(l.p,{children:"Additions:"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.code,{children:"transparency"})," - indicates whether a raster layer has transparency"]}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:"Removals:"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.code,{children:"WMTS_LAYER"})," field removed from record's ",(0,n.jsx)(l.code,{children:"Links"})]}),"\n"]}),"\n",(0,n.jsx)(l.h4,{id:"new-available-layers",children:"New available layers:"}),"\n",(0,n.jsx)("img",{src:t(91750).A,alt:"wmts_logo",width:"500",height:"250"}),"\n",(0,n.jsxs)(l.ol,{children:["\n",(0,n.jsxs)(l.li,{children:["\u201cBest\u201c layer was updated to latest data in ",(0,n.jsx)(l.code,{children:"JPEG"})," format"]}),"\n",(0,n.jsx)(l.li,{children:"\u201cDigital Map\u201c update"}),"\n",(0,n.jsxs)(l.li,{children:["\u201cOSM\u201c layer - a civilian OSM map, for more info click ",(0,n.jsx)(l.a,{href:"/docs/MapColonies/openstreetmap/openstreetmap",children:"here"})]}),"\n"]}),"\n",(0,n.jsx)(l.h4,{id:"tile-serving-map-server",children:"Tile Serving (\u201cMap Server\u201d)"}),"\n",(0,n.jsx)(l.h4,{id:"general-features",children:"General features"}),"\n",(0,n.jsx)(l.p,{children:"Caching and monitoring improvements."}),"\n",(0,n.jsx)(l.h4,{id:"ingestion-service-activated-via-catalog-app-in-manager-mode",children:"Ingestion Service (activated via Catalog App in manager mode)"}),"\n",(0,n.jsxs)(l.ol,{children:["\n",(0,n.jsxs)(l.li,{children:["A full ingestion solution was added for new products for new materials with various raw data formats (",(0,n.jsx)(l.code,{children:"j2k"}),", ",(0,n.jsx)(l.code,{children:"tiff"}),", ",(0,n.jsx)(l.code,{children:"GPKG"}),")."]}),"\n",(0,n.jsxs)(l.li,{children:["A partial solution for \u201cupdating\u201d existing catalog layers data (currently ",(0,n.jsx)(l.code,{children:"GPKG"})," only)."]}),"\n"]}),"\n",(0,n.jsx)(l.h4,{id:"export-service",children:"Export Service"}),"\n",(0,n.jsx)(l.p,{children:"Solution for creating raster \u201coffline\u201c products is now available. (Via API for users with a valid export token)\nThe API supports a webhook when the job finished."}),"\n",(0,n.jsx)(l.h4,{id:"known-bugs-",children:"Known Bugs \ud83d\udc1e"}),"\n",(0,n.jsxs)(l.ol,{children:["\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.code,{children:"GetCapabilities"})," shows the wrong extent of the layer."]}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsx)(l.p,{children:"There is up to 5 minutes delay between a layer presented in the catalog to be available for consumption via the tile server."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(l.h3,{id:"3d",children:"3D"}),"\n",(0,n.jsx)("img",{src:t(73494).A,alt:"3D",width:"500",height:"250"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:"Overall improvements in serving 3D tiles."}),"\n"]}),"\n",(0,n.jsx)(l.h4,{id:"overview-1",children:"Overview"}),"\n",(0,n.jsx)(l.p,{children:"Optimal, complete, easy, efficient, and robust solution for raster product consumption is now available. Just start by querying the catalog for the desired product and set your map component up in no time."}),"\n",(0,n.jsx)(l.h4,{id:"catalog-service-1",children:"Catalog Service"}),"\n",(0,n.jsxs)(l.p,{children:["You are now able to search, and filter all the available 3D photorealistic models in your cloud environment via CSW protocol. Refer to the profile of the 3D records ",(0,n.jsx)(l.a,{href:"/docs/MapColonies/3D/services/catalog/catalog-profile-v2",children:"here"})]}),"\n",(0,n.jsx)(l.h4,{id:"tile-serving-service",children:"Tile Serving Service"}),"\n",(0,n.jsxs)(l.p,{children:["You are now able to consume 3D tiles (b3dm) via the tile serving service in a tile layer (\u201cXYZ\u201d) protocol. Check ",(0,n.jsx)(l.a,{href:"/docs/MapColonies/3D/Guides/3d-getting-started",children:"here"})," for a step-by-step tutorial."]}),"\n",(0,n.jsx)(l.h3,{id:"vector",children:"Vector"}),"\n",(0,n.jsx)("img",{src:t(31618).A,alt:"vector_team_logo",width:"500",height:"250"}),"\n",(0,n.jsx)(l.h4,{id:"query-service",children:"Query Service"}),"\n",(0,n.jsx)(l.p,{children:"This new service provides facilities for searching and retrieving feature data from vector layers.\nbuildings layer is now available to query.\nVector query service uses the WFS protocol which is a READ-ONLY Web Feature Service.\nWe provide three actions to query the layers:"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsx)(l.p,{children:"GetCapabilities - returns full capabilities provided by the service."}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsx)(l.p,{children:"DescribeFeatureType - description of a feature type."}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsx)(l.p,{children:"GetFeature - the request returns a collection of geographic feature instances filtered according to criteria set by the requesting client."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(l.p,{children:["refer to ",(0,n.jsx)(l.a,{href:"/docs/MapColonies/vector/Services/query",children:"Query Service"}),"."]}),"\n",(0,n.jsx)(l.h4,{id:"openstreetmap-carto-osm",children:"OpenStreetMap Carto (OSM)"}),"\n",(0,n.jsx)(l.p,{children:"In this version, can be consumed OpenStreetMap Carto like our other Rasterized Vector products (as a part of Digital Map)."}),"\n",(0,n.jsx)(l.p,{children:"OpenStreetMap Carto (OSM Carto for short) is an open-source stylesheet for rendering OpenStreetMap data to raster tiles."}),"\n",(0,n.jsx)(l.p,{children:"As this stylesheet is open-source, we had to make a few minor changes compared to the original one:"}),"\n",(0,n.jsxs)(l.ol,{children:["\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsx)(l.p,{children:"We changed the stylesheet projection from Web Mercator to WGS84."}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsx)(l.p,{children:"We modified the database insertion script to prefer names in Hebrew and English when possible."}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["\n",(0,n.jsx)(l.p,{children:"We imported data from the Natural Earth dataset in places where we didn't import OSM data."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(l.p,{children:["refer to ",(0,n.jsx)(l.a,{href:"/docs/MapColonies/openstreetmap/osm-carto/openstreetmap-carto",children:"OpenStreetMap Carto"}),"."]}),"\n",(0,n.jsx)(l.h4,{id:"nominatim",children:"Nominatim"}),"\n",(0,n.jsx)(l.p,{children:"Nominatim (from the Latin, 'by name') is a tool to search OpenStreetMap data by name and address (geocoding) and to generate synthetic addresses of OSM points (reverse geocoding)."}),"\n",(0,n.jsx)(l.p,{children:"In addition to the API, we brought Nominatim UI.\nNominatim UI offers a small website for trying Nominatim and inspecting the database content."}),"\n",(0,n.jsxs)(l.p,{children:["refer to ",(0,n.jsx)(l.a,{href:"/docs/MapColonies/vector/Services/nominatim_service",children:"Nominatim"}),"."]}),"\n",(0,n.jsx)("img",{src:t(46200).A,alt:"nominatim_search_he"}),"\n",(0,n.jsx)(l.h3,{id:"catalog-app",children:"Catalog App"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["General improvements of the UI \\ UX","\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:"Components redesign"}),"\n",(0,n.jsx)(l.li,{children:"New fonts and icons"}),"\n",(0,n.jsx)(l.li,{children:"Better error reporting"}),"\n",(0,n.jsx)(l.li,{children:"Fly-to 3D model changes automatically map-view to 3D mode"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(l.li,{children:"Added Vector\u2019s query service in order to visualize an entity and show the details"}),"\n"]}),"\n",(0,n.jsx)("img",{src:t(12261).A,alt:"app_view"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:"New tools suite site is now available via the app"}),"\n",(0,n.jsxs)(l.li,{children:["The app checks for the availability of graphics hardware acceleration (for more info visit ",(0,n.jsx)(l.a,{href:"/docs/MapColonies/3D/Guides/HardwareAcceleration",children:"here"}),")"]}),"\n"]}),"\n",(0,n.jsx)("img",{src:t(26277).A,alt:"app_view"}),"\n",(0,n.jsx)(l.h4,{id:"web-tools",children:"Web tools"}),"\n",(0,n.jsx)(l.p,{children:"The terrain verification tool is exposed as part of the MapColonies WEB tools suite"}),"\n",(0,n.jsx)("img",{src:t(42673).A,alt:"app_view"}),"\n",(0,n.jsx)(l.h4,{id:"products-management",children:"Products Management"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:"Discrete values are now selected from a dropdown instead of free text input."}),"\n",(0,n.jsx)(l.li,{children:"You can now stop / resume jobs from the UI."}),"\n",(0,n.jsx)(l.li,{children:"You can now update a rater layer via the UI"}),"\n",(0,n.jsx)(l.li,{children:"Job management screen shows jobs from defined date till NOW"}),"\n"]}),"\n",(0,n.jsx)("img",{src:t(84637).A,alt:"app_view"}),"\n",(0,n.jsx)(l.h4,{id:"fixed-bugs-\ufe0f",children:"Fixed Bugs \ud83d\udc1e\u2714\ufe0f"}),"\n",(0,n.jsx)(l.p,{children:"Job Management:"}),"\n",(0,n.jsxs)(l.ol,{children:["\n",(0,n.jsx)(l.li,{children:"The refresh button makes the job\u2019s progress disappear."}),"\n",(0,n.jsx)(l.li,{children:"Job progress won\u2019t update with new data when the dialog is open."}),"\n"]}),"\n",(0,n.jsx)(l.h4,{id:"misc",children:"MISC:"}),"\n",(0,n.jsxs)(l.ol,{children:["\n",(0,n.jsx)(l.li,{children:"Backend errors aren't prompted properly to the client."}),"\n",(0,n.jsx)(l.li,{children:"Special characters support in metadata external ID field."}),"\n",(0,n.jsx)(l.li,{children:"When opening the file browser in the ingestion form, it messes up the app\u2019s styles. (Refreshing the app helps)."}),"\n",(0,n.jsx)(l.li,{children:"When searching an area on the map for products, update any field from the product\u2019s metadata and then select edit again, the selected metadata will be the old one."}),"\n"]}),"\n",(0,n.jsx)(l.h4,{id:"known-bugs--",children:"Known Bugs \ud83d\udc1e \u274c"}),"\n",(0,n.jsxs)(l.ol,{children:["\n",(0,n.jsx)(l.li,{children:"3D footprints are not clamped to terrain."}),"\n"]})]})}function p(e={}){const{wrapper:l}={...(0,i.R)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},31618:(e,l,t)=>{t.d(l,{A:()=>s});var n,i,r=t(96540);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(null,arguments)}const s=e=>{let{title:l,titleId:t,...s}=e;return r.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:914,height:652,overflow:"hidden","aria-labelledby":t},s),l?r.createElement("title",{id:t},l):null,n||(n=r.createElement("defs",null,r.createElement("clipPath",{id:"a"},r.createElement("path",{d:"M411 16h914v652H411z"})))),i||(i=r.createElement("g",{clipPath:"url(#a)",transform:"translate(-411 -16)"},r.createElement("path",{fill:"#D9D9D9",fillRule:"evenodd",d:"M681 263.794c.666 27.525 5.328 86.572 3.996 117.206C747.6 351.698 1122.17 113.845 1181 73c-66.38 27.082-426.074 160.604-500 190.794"}),r.createElement("path",{fill:"#88B6E0",fillRule:"evenodd",d:"M712.097 251.374c.357 5.674-.107 26.029 5.832 34.963 3.359 7.771 8.187 14.514 13.321 17.746 5.134 3.233 5.041 16.744 11.484 16.148 6.889-2.526 20.838-3.421 25.169-5.556 1.336-3.247-6.358-20.913-11.153-24.092s-10.132-7.349-13.615-14.477-6.494-27.262-6.283-33.379z"}),r.createElement("path",{fill:"#FFC000",fillRule:"evenodd",d:"M774.976 297.376c6.149-1.39 8.085-1.752 11.483-4.423-2.647-19.07-3.782-46.666-5.833-67.245-3.91.584-5.715 1.524-10.325 2.902 1.098 19.065 2.709 41.5 4.675 68.766"}),r.createElement("path",{fill:"#6DA945",fillRule:"evenodd",d:"M795.054 292.18c6.149-1.39 48.668-16.836 52.066-19.507-2.647-19.069-26.948-38.666-21.333-64.578-3.41 1.334-35.298 13.691-39.908 15.068 2.597 20.066 5.208 42.251 9.175 69.017"}),r.createElement("path",{fill:"#FFF",fillRule:"evenodd",d:"M893.335 181.541c-.981 9.327-3.239 15.957-1.993 24.966 1.245 9.008 5.539 20.943 9.468 29.084 3.928 8.141 11.755 15.559 14.103 19.761-6.936-3.506-3.557 6.182-16.672-2.17-14.524-22.036-14.122-30.59-17.445-43.153-9.485-1.141-19.83-1.413-27.463-1.029-1.41 14.106 2.722 26 4.667 42-1.278 2.334-8.5 6.167-10.333.333-3.834-10.5-5.021-32.199-4.001-43-5.257.2-17.66.312-17.879-.804 7.689-2.193 14.986-5.628 23.233-8.558 11.543-.342 21.349.65 30.613-.419.877-3.859 1.286-6.419 1.096-11.636 4.263-1.709 8.897-4.191 12.606-5.375M960.539 157.709c-.853 8.1-2.776 13.957-1.724 21.385 1.051 7.427 3.012 13.808 8.033 23.178s20.206 29.323 22.091 33.047c-5.621-3.239-15.851-8.494-26.466-16.118-5.784-9.515-11.301-27.026-13.929-38.059-8.053-.153-37.575-1.445-43.971-2.642 6.937-2.091 8.16-3.175 15.093-5.407 9.389.01 20.711.454 28.252-.231.736-3.339 1.084-6.308.961-10.858 3.477-1.376 8.637-3.361 11.66-4.295"}),r.createElement("path",{fill:"#6DA945",fillRule:"evenodd",d:"M907.831 222.795c-7.552-4.445-9.124-30.676-6.906-36.795 7.945 1.111 30.687 3.046 39.924 2.552 1.909 8.89 10.894 18.411 5.391 24.118s-30.856 14.57-38.409 10.125"}),r.createElement("path",{fill:"#FFC000",fillRule:"evenodd",d:"M969.4 210.002c4.073-1.376 5.352-1.749 7.683-4.037-.923-15.203-2.283-37.403-2.754-53.844-2.229.212-2.826 1.603-5.894 2.904-.088 15.266.832 33.163.965 54.977"}),r.createElement("path",{fill:"#FFF",fillRule:"evenodd",d:"M682.531 292.283c8.604 3.86 19.598 15.751 29.119 20.135 9.522 4.383 15.143 4.622 18.01 8.166s1.932 4.39-.804 13.101c-22.184-6.736-30.714-9.199-45.61-19.587-.343-4.877-.706-17.664-.715-21.815"}),r.createElement("path",{fill:"#88B6E0",fillRule:"evenodd",d:"M996.703 132.393c-1.388 3.973-6.609 16.901-5.949 24.457-.382 6.135.299 11.92 2.117 15.374s-1.985 12.689 1.59 13.836c4.348-.067 11.979 2.687 14.859 2.27 1.61-1.902 2.45-15.865.8-19.2-1.66-3.335-3.32-7.481-3.18-13.206.13-5.726 4.46-19.492 5.21-24.115z"}),r.createElement("path",{fill:"#FFF",fillRule:"evenodd",d:"M1057.67 116.408c-.61 5.403-1.96 9.248-1.25 14.461.72 5.212 3.23 12.111 5.54 16.815 2.31 4.703 6.93 8.977 8.31 11.404-4.1-2.012-2.12 3.589-9.88-1.212-8.55-12.721-8.29-17.675-10.23-24.94-5.62-.636-11.76-.766-16.28-.523-.88 8.171 1.54 15.047 2.65 24.306-.76 1.354-5.05 3.592-6.12.22-2.25-6.07-2.9-18.631-2.26-24.887-3.12.129-10.48.227-10.6-.418 4.56-1.291 8.9-3.298 13.8-5.017 6.84-.228 12.65.32 18.15-.323.53-2.237.78-3.72.68-6.74 2.53-1.001 5.29-2.45 7.49-3.146M1101.83 103.361c-.37 5.214-1.36 8.966-.67 13.772s1.88 8.951 4.83 15.067 11.75 19.201 12.86 21.63c-3.2-2.169-9.01-5.702-15.07-10.77-3.38-6.22-6.73-17.595-8.35-24.749-4.53-.212-21.11-1.46-24.72-2.321 3.87-1.252 4.54-1.935 8.4-3.277 5.27.138 11.63.583 15.85.247.36-2.144.52-4.054.38-6.992 1.94-.839 4.8-2.047 6.49-2.607"}),r.createElement("path",{fillOpacity:.251,fillRule:"evenodd",d:"M681 265c.665 27.712 5.323 87.159 3.993 118 62.55-29.5 110.239-64.14 175.007-103.25-48.354-6.258-117.781-11.621-179-14.75"}),r.createElement("path",{fillOpacity:.239,fillRule:"evenodd",d:"M681 263.794c.667 27.525 5.339 86.572 4.004 117.206C747.733 351.698 1123.05 113.845 1182 73c-66.51 27.082-426.926 160.604-501 190.794"}),r.createElement("path",{fill:"#BFBFBF",fillRule:"evenodd",d:"M729.98 310.001C721.984 324.862 703.325 350.06 686 382c62.635-29.278 438.14-268.188 497-309-65.08 31.052-380.015 201.288-453.02 237.001"}),r.createElement("path",{fill:"#DCDCDC",fillRule:"evenodd",d:"M577 182.616C649.143 168 1132.17 82.959 1187 71c-42.4 19.932-407.555 156.573-506.114 194-27.969-19.71-66.815-54.479-103.886-82.384"}),r.createElement("path",{fill:"#5B9BD5",fillRule:"evenodd",d:"M685.411 162.75c-4.521 11.931-11.478 34.458-6.928 49.5s25.377 38.417 34.225 40.75c8.014-3 16.278-5.5 24.292-8.5-3.756-3.75-26.142-22.958-31.137-36.917-4.995-13.958-.487-36.889.668-48.583z"}),r.createElement("path",{fill:"#FFF",fillRule:"evenodd",d:"M621.487 173.511c3.283-.642 8.577-1.004 13.926-2.511-1.019 5.273-1.896 21.734 1.868 34.401S656.415 242.424 658 247c-6.312-4.715-17.931-12.569-29.55-23.185-5.83-15.303-11.124-37.916-6.963-50.304"}),r.createElement("path",{fill:"none",stroke:"#FFC000",strokeMiterlimit:8,strokeWidth:8,d:"M723 195c0-11.046 11.641-20 26-20s26 8.954 26 20-11.641 20-26 20-26-8.954-26-20Z"}),r.createElement("path",{fill:"#FFC000",fillRule:"evenodd",d:"M632 227.521c4.289 4.006 8.244 6.827 11.698 9.479 17.826-7.504 61.861-22.992 81.302-30.298-.947-3.329-.418-3.527-2.924-7.702-18.216 5.981-65.287 19.099-90.076 28.521M770.002 231.019c3.985-1.745 7.646-2.674 10.413-3.831-2.872-2.637-8.46-9.584-12.722-15.588-3.015 1.595-3.313 1.118-6.825 4.407 9.484 16.576 6.74 11.047 9.134 15.012"}),r.createElement("path",{fill:"#83BC5C",fillRule:"evenodd",d:"M785.877 225c-4.103-5.082-6.154-8.039-7.877-11.246 2.462-2.958 5.046-6.665 6.892-9.997 1.846-3.333-.984-8.373 4.185-9.997s21.333-.208 26.831.25c5.497.458 5.784.416 6.154 2.499.369 2.083-3.283 7.289 3.938 12.996-9.518 4.207-31.18 11.913-40.123 15.495"}),r.createElement("path",{fill:"#FFF",fillRule:"evenodd",d:"M866.621 166.498c11.478-4.744 13.244 2.834 6.247 8.084s-44.23 20.57-48.228 23.418c8.663 1.847 13.105 1.861 23.656 3.75l-21.99 8.25c-4.107-2.728-14.152-4.308-22.306-6.95 6.886-8.417 51.143-31.807 62.621-36.552"}),r.createElement("path",{fill:"#FFF",fillRule:"evenodd",d:"M918 175.546c-6.894 1.991-9.503 2.998-13.338 4.376-10.503-3.161-11.671-6.335-22.008-6.16 2.668 3.742 5.447 7.322 10.671 10.132L880.654 189c-4.11-2.653-8.828-17.483-14.654-22.321 6.891-8.186 39.221 4.606 52 8.867M960 159.517c-6.864 2.039-8.133 3.072-11.951 4.483-9.53-5.23-24.532-15.025-33.525-17.931S862.678 139.26 838 134.361c7.03-1.015 3.78-.669 9.645-1.361 23.455 3.111 54.254 4.706 70.365 9.333 16.112 4.627 36.942 14.486 41.99 17.184"}),r.createElement("path",{fill:"#FFC000",fillRule:"evenodd",d:"M926.966 129.572c-.852 4.214-.92.758-1.859 3.672 13.617 6.824 28.507 15.278 42.967 23.114 2.935-1.035 3.531-.749 5.943-2.056-13.164-7.73-28.11-13.907-47.051-24.73"}),r.createElement("path",{fill:"#88B6E0",fillRule:"evenodd",d:"M1010.97 140.251c-2.72-3.217-15.239-16.781-20.782-20.814s-20.71-6.704-27.31-7.304c-6.184 1.233-13.39 2.956-20.792 4.206 4.047 2.49 27.191 7.167 35.959 13.46s11.828 14.388 14.315 16.797c5.702-1.865 12.15-3.98 18.61-6.345"}),r.createElement("path",{fill:"#FFF",fillRule:"evenodd",d:"M1101.85 87.454c3.33-.435 1.47-.394 4.15-.454-1.52 3.147-10.2 16.502-11.55 17.365 2.93.559 4.42.564 7.98 1.136l-7.41 2.499c-1.39-.826-5.27-1.305-8.02-2.105 2.32-2.55 12.26-14.799 14.85-18.441M871.131 165.187c-4.88-2.224-18.846-.168-28.27-4.532-9.423-4.365-21.707-15.654-28.269-21.655-2.272.797-5.385.671-9.592 1.511 3.618 4.868 18.005 19.178 27.26 24.676 12.032 7.512 33.402 8.813 39.881 8.813s3.87-6.589-1.01-8.813"}),r.createElement("path",{fill:"#FFC000",fillRule:"evenodd",d:"M771 182.012c4.278 3.938 3.222 4.381 6.667 6.988 17.777-7.376 204.944-75.423 224.333-82.605-1.19-.527-1.5-.554-5 .084z"}),r.createElement("path",{fill:"#FFC000",fillRule:"evenodd",d:"M771 181.993c4.271 3.948 3.217 4.393 6.657 7.007 17.751-7.396 151.466-56.363 170.826-63.565-.944-3.281 49.924-14.32 47.428-18.435z"}),r.createElement("path",{fill:"none",stroke:"#FFC000",strokeMiterlimit:8,strokeWidth:8,d:"M723 193.5c0-10.217 11.641-18.5 26-18.5s26 8.283 26 18.5-11.641 18.5-26 18.5-26-8.283-26-18.5Z"}),r.createElement("path",{fill:"#FFF",fillRule:"evenodd",d:"M1093.72 102.832c-1.82 1.66-.57 1.416-2.49 3.539-3.92-.456-10.44-.136-15.74-2.043s-12.53-4.714-16.05-9.402c4.44-1.218 2.62-.186 5.55-1.154 3.2 3.12 7.88 5.163 12.67 6.673 4.78 1.51 14.21 1.608 16.06 2.387"}),r.createElement("path",{fill:"#83BC5C",fillRule:"evenodd",d:"M995.001 106.308c-.139 7.449 11.879 18.314 18.949 22.262 7.06 3.948 16.44 2.044 23.45 1.428 6.01-2.128 4.64-1.764 12.6-5.124-1.06-4.873-10.29-16.017-15.69-25.874-9.74 1.4-29.41 5.656-39.309 7.308"}),r.createElement("path",{fill:"#FFF",fillRule:"evenodd",d:"M1079 115.128c-3.74 1.055-5.91 2.088-7.99 2.817-5.7-1.674-14.6-1.11-20.21-1.017 1.45 1.982 2.96 3.878 5.79 5.367l-6.87 2.705c-2.24-1.406-14.06-19.74-15.72-25.298 2.71-.757 2.98-.46 6.18-.702 1.16 3.334 2.26 9.288 8.02 12.225 6.2.326 27 2.783 30.8 3.903M989 107.655c4.144-.67 2.37-.292 7.11-1.655 4.99 5.743 12.11 18.027 19.6 21.901 7.48 3.875 18.65.158 25.29 1.347l-13.84 5.197c-4.64.137-11.89 2.118-18.25-2.347S990.804 111.37 989 107.655"}),r.createElement("path",{fill:"#DCDCDC",fillRule:"evenodd",d:"m890.219 438.909 295.807-368.705-456.563 240.27c39.789 33.145 111.8 90.467 160.756 128.435"}),r.createElement("path",{fill:"#FFF",fillRule:"evenodd",d:"M1068.554 131.967c6.477 2.726 40.39 14.153 47.598 22.736 2.445-3.314 2.532-2.122 5.298-5.973-11.95-10.144-36.526-15.2-46.181-20.659-2.009 1.49-4.422 3.216-6.715 3.896"}),r.createElement("path",{fill:"#5B9BD5",fillRule:"evenodd",d:"M944.934 369.664c-11.408-5.624-55.914-12.119-77.083-23.491s-32.803-35.648-49.931-44.741c-17.129-9.093-45.662-8.005-52.84-9.817-9.438 4.678-17.131 9.546-25.844 13.65 5.045 1.635 46.248 10.268 61.795 21.419s12.942 32.394 31.486 45.489c18.545 13.095 67.932 29.442 82.779 33.413 10.435-12.418 19.203-23.503 29.638-35.922"}),r.createElement("path",{fill:"#FFF",fillRule:"evenodd",d:"M922.645 350.346c22.792-16.514 73.977-53.255 87.706-63.173l19.417-24.333c-.861-1.778-8.52-.42-28.084 11.666-19.562 12.087-59.086 42.706-89.292 60.854s-69.352 45.659-91.947 48.036l23.157 17.863c18.504-3.953 56.251-34.4 79.043-50.913"}),r.createElement("path",{fill:"#FFF",fillRule:"evenodd",d:"M827.422 259c15.088 5.021 169.441-2.037 203.578 1.631-5.07 6.962-9.65 11.651-14.97 19.369-40.337-5.094-181.411-1.13-206.03-11.641 9.826-5.084 9.878-5.126 17.422-9.359"}),r.createElement("path",{fill:"#FFC000",fillRule:"evenodd",d:"M769.534 343.587c6.454 4.583 11.817 8.037 17.72 12.995C806.259 343.927 1144.46 105.46 1165.4 92.564c2.83-4.036 1.67-1.805 4.18-4.718-19.83 11.19-373.371 239.188-400.046 255.741"}),r.createElement("path",{fill:"#FFC000",fillRule:"evenodd",d:"M950.999 361.825c6.003-7.52 11.115-13.202 16.151-20.506-22.122-9.761-142.854-57.135-165.95-68.599-6.203 3.245-6.33 3.432-11.863 6.683 20.623 11.548 132.088 67.903 161.662 82.422"}),r.createElement("path",{fill:"#83BC5C",fillRule:"evenodd",d:"M1027.53 199.261c-4.72 4.181-65.532 45.203-67.222 49.181 38.008.934 51.992-3.104 80.062.807 2.34-2.812 27.58-34.755 30.96-38.183-24.7-1.581-32.68-8.012-43.8-11.805"}),r.createElement("path",{fill:"#FFF",fillRule:"evenodd",d:"M999.475 169c10.815 2.997 58.795 26.198 86.525 23.202-3.64 4.156-6.66 8.19-10.48 12.798-28.66-.078-65.87-25.866-83.52-32.141 7.044-3.777 2.569-1.332 7.475-3.859M854.559 263.36c6.454 4.582 4.984 2.704 13.221 3.329 34.605-17.507 73.876-53.013 95.814-79.519-5.501 2.631-10.832 6.029-14.992 7.449-27.498 24.19-63.701 52.188-94.043 68.741"}),r.createElement("path",{fill:"#FFC000",fillRule:"evenodd",d:"M1073.02 154.133c4.16 3.446 21.82 15.679 28.95 18.867 2.35-3.274 2.56-3.102 4.03-5.428-5.08-2.843-23.45-13.008-28.95-15.248-5.49-2.24-8.18-1.637-4.03 1.809"}),r.createElement("path",{fill:"#FFF",fillRule:"evenodd",d:"M1087.06 133.475c-.61 2.42 3.45 3.322 5.42 1.723 1.98-1.6 1.15-7.34 6.41-11.318s20.13-8.734 25.14-12.547 5.09-9.144 4.93-10.333c-3.62 1.517-3.29 1.148-5.18 2.46-.65 2.051 1.28 4.142-3.2 6.889s-18.81 6.479-24.4 10.333c-5.58 3.854-8.5 10.374-9.12 12.793"}),r.createElement("path",{fill:"#83BC5C",fillRule:"evenodd",d:"M1025.95 172.901c5.98-1.978 48.39-29.65 51.51-32.637-7.55-3.201-7.32-3.015-14.9-5.358-3.26 1.658-49.73 27.704-54.19 29.521 11.07 4.872 10.52 4.264 17.58 8.474"}),r.createElement("path",{fill:"none",stroke:"#5B9BD5",strokeDasharray:"26.6667 26.6667",strokeLinecap:"round",strokeMiterlimit:8,strokeWidth:13.333,d:"M677.5 384.5c-33.736 19.478-52.867 39.578-72.176 70.039-19.31 30.462-32.005 84.737-43.679 112.73s-15.146 37.328-26.367 55.231c6.836-31.484 13.561-65.481 10.387-93.919s-15.914-47.004-29.43-52.696-41.015 3.824-51.669 18.543c-10.653 14.72-24.547 48.894-12.251 69.773s47.782 17.635 60.458 1.067c12.675-16.568 2.922-55.272-9.973-55.65s-19.477 6.931-16.261 18.162"}),r.createElement("path",{fill:"none",stroke:"#5B9BD5",strokeMiterlimit:8,strokeWidth:13.333,d:"M586.779 602.129c22.711 6.086 76.812-6.415 73.483-23.193s-31.866-13.488-54.934-.494-27.823 49.84 2.141 57.736 75.652-21.63 92.031-34.049"}),r.createElement("path",{fill:"none",stroke:"#5B9BD5",strokeMiterlimit:8,strokeWidth:13.333,d:"M774.603 585.611c-2.747-9.929-2.707-12.002-26.996-15.655s-47.701 15.298-49.93 33.288c-2.23 17.99 17.081 36.255 36.552 35.101 27.354 2.307 48.795-21.588 80.271-42.022M841.707 541.5c-13.616 23.132-25.073 47.492-27.353 62.886-2.279 15.394-.719 24.483 13.677 29.478s26.633-1.924 42.469-14.248"}),r.createElement("path",{fill:"none",stroke:"#5B9BD5",strokeMiterlimit:8,strokeWidth:13.333,d:"M797.5 566.5c15.546-.47 31.092-.939 48.259-.994 17.166-.056 35.954.303 54.741.663M1012.5 589.557c-13.071 4.277-36.987 1.7-44.813-8.226-15.693-5.977-27.851-9.761-40.048-5.922s-33.531 13.353-33.134 28.954 15.336 30.792 35.518 32.081c20.182 1.288 42.43-19.879 42.669-30.271s8.422-36.961-41.239-32.08M1015.69 572.346c3.81 28.231-13.6 57.69-8.11 60.939 5.48 3.249 26.87-31.288 41.02-41.445 9.85-13.105 31.16-23.425 58.9-19.494"}))))}},73494:(e,l,t)=>{t.d(l,{A:()=>n});const n=t.p+"assets/images/3d_city_model-45bff9cdd303fa095faf27d25cdd7146.png"},91750:(e,l,t)=>{t.d(l,{A:()=>n});const n=t.p+"assets/images/wmts_logo-cc8cefa60d663abdc0f76e36a93977d8.png"},12261:(e,l,t)=>{t.d(l,{A:()=>n});const n=t.p+"assets/images/app_view_WFS_service-d119575cba2c3dc6aabfcba80211404c.png"},84637:(e,l,t)=>{t.d(l,{A:()=>n});const n=t.p+"assets/images/app_view_jobs_timeline-4f8406f3b749c28c512212638909ac54.png"},26277:(e,l,t)=>{t.d(l,{A:()=>n});const n=t.p+"assets/images/app_view_no_graphic_acc-58584d8197b26bbbda3501aa021e707f.png"},42673:(e,l,t)=>{t.d(l,{A:()=>n});const n=t.p+"assets/images/app_view_web_tools-588c60f7d8cb107b5d7baa8379d84854.png"},46200:(e,l,t)=>{t.d(l,{A:()=>n});const n=t.p+"assets/images/nominatim_search_he-50760b3cf78bed299caa6293e1a406e7.png"},28453:(e,l,t)=>{t.d(l,{R:()=>a,x:()=>s});var n=t(96540);const i={},r=n.createContext(i);function a(e){const l=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function s(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:l},e.children)}}}]);