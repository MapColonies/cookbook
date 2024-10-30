"use strict";(self.webpackChunk_map_colonies_developer_portal=self.webpackChunk_map_colonies_developer_portal||[]).push([[3345],{41778:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>o});var s=t(74848),d=t(28453);const n={id:"dem-profile-v1",slug:"catalog-profile-v1",description:"v1 Profile",title:"Profile v1",tags:["DEM","catalog","v1"]},i="DEM Catalog Profile Information",l={id:"MapColonies/DEM/Services/catalog/dem-profile-v1",title:"Profile v1",description:"v1 Profile",source:"@site/docs/MapColonies/DEM/Services/catalog/profile_v1_0.md",sourceDirName:"MapColonies/DEM/Services/catalog",slug:"/MapColonies/DEM/Services/catalog/catalog-profile-v1",permalink:"/developer-portal/pr-preview/pr-115/docs/MapColonies/DEM/Services/catalog/catalog-profile-v1",draft:!1,unlisted:!1,editUrl:"https://github.com/MapColonies/developer-portal/tree/main/packages/create-docusaurus/templates/shared/docs/MapColonies/DEM/Services/catalog/profile_v1_0.md",tags:[{inline:!0,label:"DEM",permalink:"/developer-portal/pr-preview/pr-115/docs/tags/dem"},{inline:!0,label:"catalog",permalink:"/developer-portal/pr-preview/pr-115/docs/tags/catalog"},{inline:!0,label:"v1",permalink:"/developer-portal/pr-preview/pr-115/docs/tags/v-1"}],version:"current",frontMatter:{id:"dem-profile-v1",slug:"catalog-profile-v1",description:"v1 Profile",title:"Profile v1",tags:["DEM","catalog","v1"]},sidebar:"docSidebar",previous:{title:"Catalog \ud83d\uddc3\ufe0f",permalink:"/developer-portal/pr-preview/pr-115/docs/MapColonies/DEM/Services/catalog/dem-catalog"},next:{title:"Elevation \u26f0\ufe0f",permalink:"/developer-portal/pr-preview/pr-115/docs/MapColonies/DEM/Services/elevation/info"}},c={},o=[];function a(e){const r={a:"a",code:"code",em:"em",h1:"h1",header:"header",li:"li",ol:"ol",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"dem-catalog-profile-information",children:"DEM Catalog Profile Information"})}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"typename"})," = ",(0,s.jsx)(r.code,{children:"mc:MCDEMRecord"})]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"main_namespace"})," = ",(0,s.jsx)(r.code,{children:"http://schema.mapcolonies.com/dem"})]}),"\n",(0,s.jsxs)(r.li,{children:["The ",(0,s.jsx)(r.strong,{children:"DEM"})," sub-system Catalog profile fields with information of each of them:"]}),"\n"]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsxs)(r.strong,{children:["PYCSW Queryable/XML ",(0,s.jsx)("br",{})," Element Name"]})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Type"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"Description"})})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":id"]}),(0,s.jsx)(r.td,{children:"text"}),(0,s.jsx)(r.td,{children:"unique internal catalog item id"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":productId"]}),(0,s.jsx)(r.td,{children:"text"}),(0,s.jsx)(r.td,{children:"unique external product id"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":productName"]}),(0,s.jsx)(r.td,{children:"text"}),(0,s.jsx)(r.td,{children:"the product name"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsxs)(r.a,{href:"#productType",children:["mc",":productType"]})}),(0,s.jsx)(r.td,{children:"enum"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"Valid Values"}),": ",(0,s.jsx)("br",{})," DTM / DSM / QuantizedMesh  / QuantizedMeshDTMBest / QuantizedMeshDSMBest"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":description"]}),(0,s.jsx)(r.td,{children:"text"}),(0,s.jsx)(r.td,{children:"the product description"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":imagingTimeBeginUTC"]}),(0,s.jsx)(r.td,{children:"date"}),(0,s.jsxs)(r.td,{children:["start imaging date of raw product ",(0,s.jsx)("br",{})," supported format: ",(0,s.jsx)(r.strong,{children:'dd/mm/yyyy  (not later than "End date")'})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":imagingTimeEndUTC"]}),(0,s.jsx)(r.td,{children:"date"}),(0,s.jsxs)(r.td,{children:["end imaging date of raw product ",(0,s.jsx)("br",{})," supported format: ",(0,s.jsx)(r.strong,{children:'dd/mm/yyyy  (not earlier than "Begin date")'})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":resolutionDeg"]}),(0,s.jsx)(r.td,{children:"double"}),(0,s.jsxs)(r.td,{children:["the product resolution in degrees ",(0,s.jsx)("br",{})," double unsigned valid: ",(0,s.jsx)(r.strong,{children:"0.00000009 to 0.072"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":resolutionMeter"]}),(0,s.jsx)(r.td,{children:"double"}),(0,s.jsxs)(r.td,{children:["the product resolution in meters ",(0,s.jsx)("br",{})," double unsigned valid: ",(0,s.jsx)(r.strong,{children:"0.01 to 8000"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":absoluteAccuracyLEP90"]}),(0,s.jsx)(r.td,{children:"double"}),(0,s.jsx)(r.td,{children:"LEP90 maximum absolute vertical plane accuracy range in meters"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":relativeAccuracyLEP90"]}),(0,s.jsx)(r.td,{children:"double"}),(0,s.jsx)(r.td,{children:"LEP90 maximum relative vertical plane accuracy range in meters"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":sensors"]}),(0,s.jsx)(r.td,{children:"text"}),(0,s.jsxs)(r.td,{children:["list of sensors used as a source for the product ",(0,s.jsx)("br",{})," comma separated list"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":layerPolygonParts"]}),(0,s.jsx)(r.td,{children:"geojson"}),(0,s.jsx)(r.td,{children:"polygons of the discrete parts (versions) and the list of layers in the best converted to Geojson"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":footprint"]}),(0,s.jsx)(r.td,{children:"geojson"}),(0,s.jsx)(r.td,{children:"geographical delineation of the product / model trace"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":heightRangeFrom"]}),(0,s.jsx)(r.td,{children:"double"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"minimum"}),' height range in Meters (not greater than "heightRangeTo") ',(0,s.jsx)("br",{})," valid: ",(0,s.jsx)(r.strong,{children:"-500 to 9000"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":heightRangeTo"]}),(0,s.jsx)(r.td,{children:"double"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"maximum"}),' height range in Meters (not less than "heightRangeFrom") ',(0,s.jsx)("br",{})," valid: ",(0,s.jsx)(r.strong,{children:"-500 to 9000"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":SRS"]}),(0,s.jsx)(r.td,{children:"int"}),(0,s.jsxs)(r.td,{children:["reference System ID (EPSG), ",(0,s.jsx)("br",{})," ex: 4326 / 3857"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":SRSName"]}),(0,s.jsx)(r.td,{children:"text"}),(0,s.jsx)(r.td,{children:"name of reference system"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":verticalDatum"]}),(0,s.jsx)(r.td,{children:"enum"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"Valid Values"}),": ",(0,s.jsx)("br",{})," WGS 1984 / WGS 1972 / Pulkovo 1942 / Palestine 1923 / MSL Height / Israel / ED 1950 IDF"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":region"]}),(0,s.jsx)(r.td,{children:"text"}),(0,s.jsxs)(r.td,{children:["sector / countries ",(0,s.jsx)("br",{})," comma separated list"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":classification"]}),(0,s.jsx)(r.td,{children:"enum"}),(0,s.jsxs)(r.td,{children:["product classification / confidentiality ",(0,s.jsx)("br",{})," Classification values"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":producerName"]}),(0,s.jsx)(r.td,{children:"text"}),(0,s.jsx)(r.td,{children:"manufacturer / organization that produced / supplied the product"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":units"]}),(0,s.jsx)(r.td,{children:"enum"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"Valid Values"}),": ",(0,s.jsx)("br",{})," METER / DD / DMS / ARC_SECONDS / UNKNOWN"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":geographicArea"]}),(0,s.jsx)(r.td,{children:"text"}),(0,s.jsx)(r.td,{children:"geographic area cities"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":undulationModel"]}),(0,s.jsx)(r.td,{children:"enum"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"Valid Values"}),": ",(0,s.jsx)("br",{})," MSL EGM96 / MSL EGM2008 / MSL DMA10 / ILUM"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":dataType"]}),(0,s.jsx)(r.td,{children:"enum"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"Valid Values"}),": ",(0,s.jsx)("br",{})," FLOAT64 / FLOAT32 / FLOAT16 / INT64 / INT32 / INT16 / INT8"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":noDataValue"]}),(0,s.jsx)(r.td,{children:"enum"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"Valid Values"}),": ",(0,s.jsx)("br",{})," -32768 / -326767 / -999"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":productBBox"]}),(0,s.jsx)(r.td,{children:"text"}),(0,s.jsx)(r.td,{children:"the bounding box of the product minX,minY,maxX,maxY"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":insertDate"]}),(0,s.jsx)(r.td,{children:"date"}),(0,s.jsx)(r.td,{children:"the date when item was added to catalog"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":keywords"]}),(0,s.jsx)(r.td,{children:"text"}),(0,s.jsx)(r.td,{children:"list of key words relevant for product"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":updateDateUTC"]}),(0,s.jsx)(r.td,{children:"date"}),(0,s.jsxs)(r.td,{children:["date the record got and update in catalog ",(0,s.jsx)("br",{})," supported format: ",(0,s.jsx)(r.strong,{children:"dd/mm/yyyy"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["mc",":type"]}),(0,s.jsx)(r.td,{children:"enum"}),(0,s.jsxs)(r.td,{children:["type of the catalog ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.strong,{children:"Valid values"}),":  RECORD_RASTER / RECORD_3D / RECORD_DEM ",(0,s.jsx)("br",{})," default: ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.strong,{children:"RECORD_DEM"})})]})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var s=t(96540);const d={},n=s.createContext(d);function i(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);